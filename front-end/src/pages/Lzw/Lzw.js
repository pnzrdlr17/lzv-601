import React, { useContext, useState } from 'react';
import Input from '../../components/FormElements/Input';
import Button from '../../components/FormElements/Button';
import ErrorModal from '../../components/UIElements/ErrorModal';
import LoadingSpinner from '../../components/UIElements/LoadingSpinner';
import { VALIDATOR_MAXLENGTH, VALIDATOR_REQUIRE } from '../../util/validators';
import { useForm } from '../../hooks/form-hook';
import { useHttpClient } from '../../hooks/http-hook';
import { AuthContext } from '../../context/auth-context';
import FileUpload from '../../components/FormElements/FileUpload';

import Visual from '../../components/Animation/Visual';
import './Lzw.css';

const Lzw = () => {
  const [cMode, setCMode] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [inputText, setInputText] = useState();
  const [compFilePath, setCompFilePath] = useState();
  const [decompFilePath, setDeCompFilePath] = useState();
  const auth = useContext(AuthContext);
  const { isLoading, gotError, sendRequest, clearError } = useHttpClient();
  const [formState, inputHandler] = useForm(
    {
      text: {
        value: '',
        isValid: false,
      },
    },
    false
  );
  const [formStateC, inputHandlerC, setFormDataC] = useForm(
    {
      file: {
        value: null,
        isValid: false,
      },
    },
    false
  );
  const [formStateD, inputHandlerD, setFormDataD] = useForm(
    {
      file: {
        value: null,
        isValid: false,
      },
    },
    false
  );

  const fileCompSubmitHandler = async (event) => {
    event.preventDefault();
    setCompFilePath(null);
    try {
      const formData = new FormData();
      formData.append('file', formStateC.inputs.file.value);

      const responseData = await sendRequest(
        `${process.env.REACT_APP_ASSET_URL}lzw/compress`,
        'POST',
        formData,
        { Authorization: 'Bearer ' + auth.token }
      );
      setCompFilePath(responseData.filePath);
    } catch (error) {
      console.log(error);
    }
  };

  const fileExtSubmitHandler = async (event) => {
    event.preventDefault();
    setDeCompFilePath(null);
    try {
      const formData = new FormData();
      formData.append('file', formStateD.inputs.file.value);

      const responseData = await sendRequest(
        `${process.env.REACT_APP_ASSET_URL}lzw/decompress`,
        'POST',
        formData,
        { Authorization: 'Bearer ' + auth.token }
      );
      setDeCompFilePath(responseData.filePath);
    } catch (error) {
      console.log(error);
    }
  };

  const switchModeHandler = () => {
    if (!cMode) {
      setCMode(true);
    } else {
      setFormDataC(
        {
          ...formStateC.inputs,
          text: undefined,
          file: null,
        },
        false
      );
      setFormDataD(
        {
          ...formStateD.inputs,
          text: undefined,
          file: null,
        },
        false
      );
      setCMode(false);
    }
  };

  const playHandler = async (event) => {
    event.preventDefault();
    setInputText(formState.inputs.text.value);
    setIsAnimating(true);
  };

  const closeAnim = () => {
    setIsAnimating(false);
  };

  return (
    <React.Fragment>
      <ErrorModal error={gotError} onClear={clearError} />
      {isLoading && <LoadingSpinner asOverlay />}
      <div className="container">
        <div className="cmode">
          <span className="empty-span">Lempel - Ziv Welch</span>
          {!isAnimating && (
            <Button inverse onClick={switchModeHandler}>
              {cMode ? 'Try a file instead?' : 'Visualize'}
            </Button>
          )}
          {isAnimating && (
            <button className="cross-btn" onClick={closeAnim}>
              x
            </button>
          )}
        </div>
        {cMode && !isAnimating && (
          <form className="visual" onSubmit={playHandler}>
            <Input
              id="text"
              element="input"
              type="text"
              label="Input"
              validators={[VALIDATOR_REQUIRE(), VALIDATOR_MAXLENGTH(60)]}
              errorText="--Can't be empty! --No more than 60 characters allowed!"
              onInput={inputHandler}
            />
            <Button type="submit" disabled={!formState.isValid}>
              SUBMIT
            </Button>
          </form>
        )}
        {cMode && isAnimating && (
          <Visual value={inputText} mode="lzw" cross={closeAnim} />
        )}
        {!cMode && (
          <form className="compress" onSubmit={fileCompSubmitHandler}>
            <FileUpload
              id="file"
              accept=".txt"
              center
              onInput={inputHandlerC}
            />
            <Button type="submit" disabled={!formStateC.isValid}>
              Compress
            </Button>{' '}
            {!!compFilePath && (
              <Button
                href={process.env.REACT_APP_ASSET_URL + compFilePath}
                inverse
                download
              >
                Download File
              </Button>
            )}
          </form>
        )}
        {!cMode && (
          <form className="compress" onSubmit={fileExtSubmitHandler}>
            <FileUpload
              id="file"
              accept=".lzw"
              center
              onInput={inputHandlerD}
            />
            <Button type="submit" disabled={!formStateD.isValid}>
              De-compress
            </Button>{' '}
            {!!decompFilePath && (
              <Button
                href={process.env.REACT_APP_ASSET_URL + decompFilePath}
                inverse
                download
              >
                Download File
              </Button>
            )}
          </form>
        )}
      </div>
    </React.Fragment>
  );
};
export default Lzw;

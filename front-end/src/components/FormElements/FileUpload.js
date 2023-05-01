import React, { useRef, useState } from 'react';
import Button from './Button';
import './FileUpload.css';

const FileUpload = (props) => {
  const [file, setFile] = useState();
  const [isValid, setIsValid] = useState(false);
  const filePickerRef = useRef();

  const pickedHandler = (event) => {
    let pickedFile;
    let fileIsValid = isValid;
    if (event.target.files && event.target.files.length === 1) {
      pickedFile = event.target.files[0];
      setFile(pickedFile.name);
      setIsValid(true); //doesn't update immediately
      fileIsValid = true;
    } else {
      setIsValid(false);
      fileIsValid = false;
    }
    props.onInput(props.id, pickedFile, fileIsValid);
  };
  const pickFileHandler = () => {
    filePickerRef.current.click();
  };
  return (
    <div className="form-control">
      <input
        id={props.id}
        style={{ display: 'none' }}
        ref={filePickerRef}
        type="file"
        // accept=".txt"
        accept={props.accept}
        onChange={pickedHandler}
      />
      <div className={`file-upload`}>
        {file && <span>{file}</span>}
        <Button type="button" size={'small'} onClick={pickFileHandler}>
          SELECT FILE
        </Button>
      </div>
      {!isValid && <p>{props.errorText}</p>}
    </div>
  );
};

export default FileUpload;

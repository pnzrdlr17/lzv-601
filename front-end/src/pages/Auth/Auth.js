import React, { useState, useContext } from 'react';

import Card from '../../components/UIElements/Card';
import Input from '../../components/FormElements/Input';
import Button from '../../components/FormElements/Button';
import ErrorModal from '../../components/UIElements/ErrorModal';
import LoadingSpinner from '../../components/UIElements/LoadingSpinner';
// import ImageUpload from '../../components/FormElements/ImageUpload';
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from '../../util/validators';
import { useForm } from '../../hooks/form-hook';
import { AuthContext } from '../../context/auth-context';
import { useHttpClient } from '../../hooks/http-hook';

import './Auth.css';

const Auth = () => {
  const auth = useContext(AuthContext);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const { isLoading, gotError, sendRequest, clearError } = useHttpClient();

  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: '',
        isValid: false,
      },
      password: {
        value: '',
        isValid: false,
      },
    },
    false
  );

  const authSubmitHandler = async (event) => {
    event.preventDefault();

    if (isLoginMode) {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/users/login`,
          'POST',
          JSON.stringify({
            email: formState.inputs.email.value,
            password: formState.inputs.password.value,
          }),
          { 'Content-Type': 'application/json' }
        );
        console.log(responseData.userName);
        auth.login(
          responseData.userId,
          responseData.userName,
          responseData.token
        );
      } catch (error) {
        console.log(error, 'Something went wrong, please try again!');
      }
    } else {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/users/signup`,
          'POST',
          JSON.stringify({
            name: formState.inputs.name.value,
            email: formState.inputs.email.value,
            password: formState.inputs.password.value,
          }),
          { 'Content-Type': 'application/json' }
        );

        auth.login(
          responseData.userId,
          responseData.userName,
          responseData.token
        );
      } catch (error) {
        console.log(error, 'Something went wrong, please try again!');
      }
    }
  };

  const switchModeHandler = () => {
    if (!isLoginMode) {
      //moving to login mode--> dropping the name
      setFormData(
        {
          ...formState.inputs,
          name: undefined,
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      //moving to sign-up mode-->disabling login and re-validating
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: '',
            isValid: false,
          },
        },
        false
      );
    }

    setIsLoginMode((prevMode) => !prevMode);
  };

  return (
    <React.Fragment>
      <ErrorModal error={gotError} onClear={clearError} />
      <Card className="authentication">
        {isLoading && <LoadingSpinner asOverlay />}
        <h2>{isLoginMode ? 'LOGIN' : 'SIGN UP'}</h2>
        <hr />
        <form onSubmit={authSubmitHandler}>
          {!isLoginMode && (
            <Input
              element="input"
              id="name"
              type="text"
              label="Your Name"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please enter a name"
              onInput={inputHandler}
            />
          )}
          <Input
            element="input"
            id="email"
            type="email"
            label="Email"
            validators={[VALIDATOR_EMAIL()]}
            errorText="Please enter a valid e-mail address"
            onInput={inputHandler}
          ></Input>
          <Input
            element="input"
            id="password"
            type="password"
            label="Password"
            validators={[VALIDATOR_MINLENGTH(8)]}
            errorText="Please enter a valid password! Minimum 8 characters."
            onInput={inputHandler}
          ></Input>

          <Button type="submit" disabled={!formState.isValid}>
            {isLoginMode ? 'Login' : 'Sign up'}
          </Button>
        </form>
        {isLoginMode && (
          <div>
            Don't have an account?&nbsp;
            <Button size={'small'} inverse onClick={switchModeHandler}>
              Sign Up
            </Button>
          </div>
        )}
        {!isLoginMode && (
          <div>
            Have an account?&nbsp;
            <Button size={'small'} inverse onClick={switchModeHandler}>
              Log In
            </Button>
          </div>
        )}
      </Card>
    </React.Fragment>
  );
};

export default Auth;

import React from 'react';
import { SignInBlockstackButton, SignInBlockstackLiteButton, AuthProvider } from 'blockstack-signin-btn';
import Login from './components/login';

export default class Authenticator extends React.Component {
  state ={
    blockstack.isUserSignedIn(): null,
  }

  render() {
    return (
      <SignInBlockstackButton
        includeBlockstackLogo={false}
        signOutRedirect="login"
      />
    )
  }

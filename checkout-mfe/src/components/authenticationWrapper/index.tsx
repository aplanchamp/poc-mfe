import OktaAuth from '@okta/okta-auth-js';
import { Security } from '@okta/okta-react';
import React from 'react';
import {
  CustomLinkProps,
  FCWithCustomLink,
} from '../../custom-link-component.type';

const oktaAuth = new OktaAuth({
  issuer: 'https://fake/oauth2/default',
});

const restoreOriginalUri = async () => {};

export const withAuthentication = (WrappedComponent: FCWithCustomLink) => {
  const WithSecurity = (props: CustomLinkProps) => {
    return (
      <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
        <WrappedComponent {...props} />
      </Security>
    );
  };

  return WithSecurity;
};

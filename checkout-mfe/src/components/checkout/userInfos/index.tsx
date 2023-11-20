import React from 'react';
import Layout from '../../../layout/layout';
import { FCWithCustomLink } from '../../../custom-link-component.type';
import { useOktaAuth } from '@okta/okta-react';
import { withAuthentication } from '../../authenticationWrapper';

export const UserInfos: FCWithCustomLink = ({
  customLink,
  customNavigationClick,
}) => {
  const { authState } = useOktaAuth();

  console.log('MFE Checkout UserInfos', authState);
  return (
    <Layout
      customLink={customLink}
      customNavigationClick={customNavigationClick}>
      I am a microfrontend component built to gather user information !
    </Layout>
  );
};

export default withAuthentication(UserInfos);

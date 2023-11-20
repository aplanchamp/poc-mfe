import React from 'react';
import Layout from '../../../layout/layout';
import { FCWithCustomLink } from '../../../custom-link-component.type';
import { withAuthentication } from '../../authenticationWrapper';

const CheckoutPayment: FCWithCustomLink = ({
  customLink,
  customNavigationClick,
}) => {
  console.log('MFE CheckoutPayment');
  return (
    <Layout
      customLink={customLink}
      customNavigationClick={customNavigationClick}>
      I am a microfrontend component built to handle payment !
    </Layout>
  );
};

export default withAuthentication(CheckoutPayment);

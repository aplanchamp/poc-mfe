import React, { PropsWithChildren } from 'react';
import { useStore } from 'zustand';
import { CheckoutConfig } from 'context-manager';
import classes from './layout.module.scss';
import { CustomLinkProps } from '../custom-link-component.type';

function useConfigurationStore<T>(
  selector?: (state: CheckoutConfig.StateType) => T
) {
  return useStore(CheckoutConfig.Store, selector!);
}

const Layout = ({
  children,
  customLink,
  customNavigationClick,
}: PropsWithChildren<CustomLinkProps>) => {
  const routes = useConfigurationStore((state) => state.routes);
  const CustomLink = customLink ? customLink : 'a';

  const onCustomLinkClick = (evt: React.MouseEvent, route: string) => {
    if (customNavigationClick) {
      evt.preventDefault();
      customNavigationClick(route);
    }
  };

  return (
    <>
      <header>
        <h2 className={classes.title}>Checkout</h2>
        {routes && (
          <nav>
            <ol className={classes.navList}>
              <li className={classes.navListItem}>
                <CustomLink
                  href={routes[CheckoutConfig.ROUTES.INFORMATION]}
                  onClick={
                    customNavigationClick &&
                    ((evt) =>
                      onCustomLinkClick(
                        evt,
                        routes[CheckoutConfig.ROUTES.INFORMATION]
                      ))
                  }>
                  User Informations
                </CustomLink>
              </li>
              <li className={classes.navListItem}>
                <CustomLink
                  href={routes[CheckoutConfig.ROUTES.PAYMENT]}
                  onClick={
                    customNavigationClick &&
                    ((evt) =>
                      onCustomLinkClick(
                        evt,
                        routes[CheckoutConfig.ROUTES.PAYMENT]
                      ))
                  }>
                  Payment
                </CustomLink>
              </li>
            </ol>
          </nav>
        )}
      </header>
      <section className={classes.content}>{children}</section>
    </>
  );
};

export default Layout;

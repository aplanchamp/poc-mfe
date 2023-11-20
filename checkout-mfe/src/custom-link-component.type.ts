export type CustomLinkProps = {
  customLink?: React.ElementType<{ href: string }>;
  customNavigationClick?(route: string): void;
};

export type FCWithCustomLink = React.FC<CustomLinkProps>;

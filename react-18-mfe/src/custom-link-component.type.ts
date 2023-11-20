export type CustomLinkProps = {
  customLink?: React.ElementType<{ href: string }>;
  customOnClick?(route: string): void;
};

export type FCWithCustomLink = React.FC<CustomLinkProps>;

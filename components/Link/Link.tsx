

import { Link } from '@nextui-org/react';

const CustomLink = ({ href, className = '', children, ...props }) => {
  return (
    <Link
      href={href}
      className={`nextui-link-styles ${className}`} // Combine les styles NextUI et personnalisés
      {...props}
    >
      {children}
    </Link>
  );
};

export default CustomLink;


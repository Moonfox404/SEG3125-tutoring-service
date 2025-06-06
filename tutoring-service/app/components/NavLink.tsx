type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
};

const NavLink = ({ href, children, isActive }: NavLinkProps) => {
  return (
    <a
      href={href}
      className={`px-3 py-2 rounded-md text-sm font-medium ${
        isActive
          ? "text-blue-500 underline underline-offset-4 decoration-2"
          : "text-gray-700 hover:text-blue-500 hover:underline hover:underline-offset-4 hover:decoration-2"
      } transition-colors duration-150`}
    >
      {children}
    </a>
  );
};

export default NavLink;

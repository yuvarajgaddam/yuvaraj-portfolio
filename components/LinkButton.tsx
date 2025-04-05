type Props = {
  href: string;
  targetBlank?: boolean;
  outline?: boolean;
  className?: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
};

const LinkButton: React.FC<Props> = ({
  href,
  targetBlank = false,
  outline = false,
  className = "",
  children,
  onClick,
}) => {
  return (
    <a
      role="button"
      className={`${outline
          ? "border border-marrsyellow dark:border-carriyellow text-marrsyellow dark:text-carriyellow transition hover:shadow-[0_4px_15px_rgba(255,223,0,0.6)]"
          : "bg-marrsyellow dark:bg-carriyellow text-bglight dark:text-bgdark transition hover:shadow-[0_4px_15px_rgba(255,223,0,0.6)]"
        } py-2 px-3 rounded lg:text-xl ${className} outline-marrsyellow dark:outline-carriyellow focus-visible:outline-double outline-offset-2`}
      href={href}
      target={`${targetBlank ? "_blank" : "_self"}`}
      onClick={(e) => {
        if (onClick) {
          e.preventDefault(); // Prevent default behavior if onClick is provided
          onClick(e); // Call the onClick handler
        }
      }}
    >
      {children}
    </a>
  );
};

export default LinkButton;

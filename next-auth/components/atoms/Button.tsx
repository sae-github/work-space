export const Button = ({
  children,
  onClick,
}: {
  children: string;
  onClick: () => void;
}) => (
  <button className="text-white font-mono py-1  px-2" onClick={onClick}>
    {children}
  </button>
);

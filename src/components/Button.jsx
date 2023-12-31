export const Button = ({ children, ...theRestOfTheProps }) => {
  return (
    <button
      className="px-4 py-2 font-semibold uppercase rounded text-stone-900 bg-amber-400 hover:bg-amber-500"
      {...theRestOfTheProps}
    >
      {children}
    </button>
  );
};

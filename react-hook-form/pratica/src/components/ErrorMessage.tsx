export const ErrorMessage = (props: { message: string | undefined }) => {
  const { message } = props;

  return <span className="text-red-400 text-md">{message}</span>;
};

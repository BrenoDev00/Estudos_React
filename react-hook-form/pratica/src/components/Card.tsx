export const Card = (props: {
  name: string;
  email: string;
  phone: string;
  password: string;
  gender: string;
}) => {
  const { name, email, phone, password, gender } = props;

  return (
    <article className="flex flex-col gap-4 bg-slate-300 rounded-md p-4">
      <p className="text-center text-xl font-semibold">{name}</p>

      <div className="flex flex-col gap-2">
        <p className="text-lg">
          <span className="font-semibold">E-mail:</span> {email}
        </p>
        <p className="text-lg">
          <span className="font-semibold">Telefone:</span> {phone}
        </p>
        <p className="text-lg">
          <span className="font-semibold">Senha:</span> {password}
        </p>
        <p className="text-lg">
          <span className="font-semibold">Gênero:</span> {gender}
        </p>
      </div>
    </article>
  );
};

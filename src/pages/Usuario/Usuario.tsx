import { Main } from "../../components/Main";

const User = () => {
  const userImage = (
    <img src="user.png" alt="Ilustração de usuarios acessando o celular" />
  );

  return (
    <Main
      Title="Pessoa Usuária"
      Info="A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado
             por profissionais de qualidade e que atendam às suas necessidades de
             forma segura e acolhedora."
      Image={userImage}
    />
  );
};
export { User };

import { Botao } from "../../components/Button";
import { Main } from "../../components/Main";

const HomeImage = ( <img src="imgHome.png" alt="Ilustração de um medico uniformizado" />)
const botoes = (<Botao Button1="Pessoa Usuária" Button="Profissional"/>)

const Home = () => {
  
    return (
    
      <Main Title="Boas vindas a Lacrei Saúde" 
      Info="Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+" 
      Image={HomeImage} 
      Botoes = {botoes}/>
  
     
    );
  };
  
  export { Home };
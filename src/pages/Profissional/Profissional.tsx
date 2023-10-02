import { Main } from "../../components/Main";

const Prof = () => {
  const profImage = (<img
    src="profissional.png"
    alt="Ilustração de medicos e enfermeiros conversando"
  />)

  return (
 
   
    
      <Main Title="Profissional" 
      Info="Buscamos recrutar pessoas profissionais da saúde que entendam as
      necessidades e se comprometam com o bem-estar da comunidade LGBTQIAPN+" 
      Image={profImage} 
      />
  
    
    );
  };




export { Prof };

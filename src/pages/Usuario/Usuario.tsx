const User = () => {
    return (
      <>
        <div className="grid grid-cols-2"></div>
  
        <section className="flex justify-between mx-20 mt-40 ">
          <div className="w-1/3">
            <h1 className="leading-tight font font-bold font-nunito text-5xl">
            Pessoa Usuária
            </h1>
            <p className="mt-6 font-normal font-nunito text-2xl text-zinc-700">
            A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado 
            por profissionais de qualidade e que atendam às suas necessidades de 
            forma segura e acolhedora.
            </p>
          
          </div>
  
          <div>
            <img src="rafiki 1.png" alt="Ilustração de usuarios acessando o celular" />
          </div>
        </section>
      </>
    );
  };
  
  export { User };
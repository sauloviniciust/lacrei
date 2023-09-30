const Home = () => {
    return (
      <>
        <div className="grid grid-cols-2"></div>
  
        <section className="flex justify-between mx-20 mt-40 ">
          <div className="w-1/3">
            <h1 className="leading-tight font font-bold font-nunito text-5xl">
              Boas vindas a Lacrei Saúde
            </h1>
            <p className="mt-6 font-normal font-nunito text-2xl text-zinc-700">
              Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+
            </p>
            <div  className="flex gap-20 font-semibold font-nunito text-xl mt-16">
              <button className="shadow-lg shadow-zinc-400 tracking-tight text-white bg-emerald-600 rounded-lg hover:bg-emerald-500 px-8 py-2">
                Pessoa Usuária
              </button>
              <button className="shadow-lg shadow-zinc-400 border-2 text-emerald-600 hover:text-emerald-500 border-emerald-600 hover:border-emerald-500 rounded-lg px-8 py-2">
                Profissional
              </button>
            </div>
          </div>
  
          <div>
            <img src="imgHome.png" alt="Ilustração de um medico uniformizado" />
          </div>
        </section>
      </>
    );
  };
  
  export { Home };
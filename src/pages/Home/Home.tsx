

const Home = () => {
    return (
      <section className="flex flex-col  lg:flex-row  gap-10 lg:justify-between mt-28 lg:mt-40 ">
          <div className="lg:w-1/3 mx-4 sm:mx-auto  lg:mb-80">
            <h1 className="text-2xl sm:text-3xl leading-tight font font-bold font-nunito lg:text-5xl">
              Boas vindas a Lacrei Saúde
            </h1>
            <p className="text-sm sm:text-base mt-6 font-normal font-nunito lg:text-2xl text-zinc-700">
              Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+
            </p>
            
            <div className="flex flex-col sm:flex-row place-items-center gap-4 sm:gap-16 
            font-semibold font-nunito text-xl mt-10 lg:mt-10">
              <button className="w-64 shadow-lg shadow-zinc-400 tracking-tight text-white bg-emerald-600 
              rounded-lg hover:bg-emerald-500 h-12"><a href="User">
                Pessoa Usuária</a>
              </button>
              <button className="w-64 shadow-lg shadow-zinc-400 border-2 text-emerald-600 hover:text-emerald-500
               border-emerald-600 hover:border-emerald-500 rounded-lg h-12"><a href="Prof" >
                Profissional</a>
              </button>
              
            </div>
          </div>

          <div className="lg:w-1/3 mx-4 sm:mx-auto">
            <img src="imgHome.png" alt="Ilustração de um medico uniformizado" />
          </div>

      </section>
    
    );
  };
  
  export { Home };
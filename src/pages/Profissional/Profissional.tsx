const Prof = () => {
  return (
    <section className="flex flex-col lg:flex-row  gap-10 lg:justify-between mt-28 lg:mt-40 ">
      <div className="lg:w-1/3 mx-4  sm:mx-8">
        <h1 className="text-2xl sm:text-3xl leading-tight font font-bold font-nunito lg:text-5xl">
          Profissional
        </h1>
        <p className="px-4 border-l-4 border-emerald-600 text-sm sm:text-base mt-6 font-normal font-nunito lg:text-2xl text-zinc-700">
          Buscamos recrutar pessoas profissionais da saúde que entendam as
          necessidades e se comprometam com o bem-estar da comunidade LGBTQIAPN+
        </p>
      </div>

      <div>
        <img
          src="profissional.png"
          alt="Ilustração de medicos e enfermeiros conversando"
        />
      </div>
    </section>
  );
};

export { Prof };

const User = () => {
  return (
    <section className="flex flex-col lg:flex-row  gap-10 lg:justify-between mt-28 lg:mt-40 ">
      <div className="lg:w-1/3 mx-4  sm:mx-8">
        <h1 className="text-2xl sm:text-3xl leading-tight font font-bold font-nunito lg:text-5xl">
          Pessoa Usuária
        </h1>
        <p className="px-4 border-l-4 border-emerald-600 text-sm sm:text-base mt-6 font-normal font-nunito lg:text-2xl text-zinc-700">
          A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado
          por profissionais de qualidade e que atendam às suas necessidades de
          forma segura e acolhedora.
        </p>
      </div>

      <div>
        <img
          src="rafiki 1.png"
          alt="Ilustração de usuarios acessando o celular"
        />
      </div>
    </section>
  );
};

export { User };

const Footer = () => {
    return (
       <>
        <div className="mx-4 sm:ml-8 lg:ml-20 lg:mr-16 border-t border-emerald-200">
            <div className="mt-5 justify-between w-full md:block md:w-auto ">
				<ul className="sm:flex sm:space-x-12 sm:text-base text-sm font-nunito text-black">
					<li><a className=" hover:text-slate-500 " href="/">Home</a></li>
					<li><a className=" hover:text-slate-500 " href="User">Pessoa Usuária</a></li>
					<li><a className=" hover:text-slate-500 " href="Prof">Profissional</a></li>
				</ul>
				<ul className="flex mt-4 space-x-4">
					<li><a href="https://www.instagram.com/lacrei.saude" target="_blank"><img className="hover:opacity-80" src="InstagramLogo.png" alt="Logo do instagram" /></a></li>
					<li><a href="https://www.facebook.com/lacrei.saude" target="_blank"><img className="hover:opacity-80" src="FacebookLogo.png" alt="Logo do facebook" /></a></li>
					<li><a href="https://www.linkedin.com/company/lacrei-saude/" target="_blank"><img className="hover:opacity-80" src="LinkedinLogo.png" alt="Logo do linkedin" /></a></li>
				</ul>
                <p className="text-sm font-normal font-nunito mt-5">Desafio Front-end Lacrei</p>
			</div>
        </div>
       </>
    )

}

export { Footer };
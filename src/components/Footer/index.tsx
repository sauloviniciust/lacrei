const Footer = () => {
    return (
       <>
        <div className="ml-20 mr-16 border-t border-emerald-200">
            <div className="mt-5 hidden justify-between w-full md:block md:w-auto ">
				<ul className="flex space-x-7 font-normal font-nunito text-black">
					<li><a className="focus:font-bold focus:text-black hover:text-slate-500 " href=".#">Home</a></li>
					<li><a className="focus:font-bold focus:text-black hover:text-slate-500 " href=".#conheça">Pessoa Usuária</a></li>
					<li><a className="focus:font-bold focus:text-black hover:text-slate-500 " href="#caminhada">Profissional</a></li>
				</ul>
				<ul className="flex mt-5 space-x-7 font-normal font-nunito text-black">
					<li><a href="https://www.instagram.com/lacrei.saude" target="_blank"><img className="hover:opacity-80" src="InstagramLogo.png" alt="Logo do instagram" /></a></li>
					<li><a href="https://www.facebook.com/lacrei.saude" target="_blank"><img className="hover:opacity-80" src="FacebookLogo.png" alt="Logo do facebook" /></a></li>
					<li><a href="https://www.linkedin.com/company/lacrei-saude/" target="_blank"><img className="hover:opacity-80" src="LinkedinLogo.png" alt="Logo do linkedin" /></a></li>
				</ul>
                <p className="text-sm font-nunito mt-5">Desafio Front-end Lacrei</p>
			</div>
        </div>
       </>
    )

}

export { Footer };
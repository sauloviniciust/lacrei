

const Menu = () => {
    return (
		<nav className="w-full fixed top-0 bg-stone-200 sm:py-3 sm:px-8">
			<div className="flex flex-col sm:flex-row sm:justify-between items-center font-sans ">
				<div className="my-auto font-bold text-4xl">
					<a className="font-nunito text-emerald-600 hover:text-emerald-500" href="/" >Lacrei</a>
				</div>

				<ul className="flex gap-4 sm:gap-6 font-bold font-nunito">
					<li><a className="text-sm sm:text-base text-slate-800 active:text-emerald-700 hover:text-slate-500 " href="/">Home</a></li>
					<li><a href="User" className="text-sm sm:text-base text-slate-800 active:text-emerald-700 hover:text-slate-500 " >Pessoa Usuária</a></li>
					<li><a className="text-sm sm:text-base text-slate-800 active:text-emerald-700 hover:text-slate-500 " href="Prof">Profissional</a></li>
				</ul>

			</div>
		</nav>
    )
}

export { Menu };
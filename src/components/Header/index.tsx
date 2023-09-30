

const Header = () => {
    return (
        <>
        <nav className="w-full fixed h-16 top-0 z-20  bg-stone-200">
		<div className=" md:flex-grow flex-col mt-3 mr-10 flex items-center font-sans ">
    
<div className="my-auto justify-center w-full md:block md:w-auto">
            <a href="#" className="ml-16 font-bold  text-4xl font-nunito text-emerald-600  hover:text-emerald-500 ">Lacrei</a>
            </div>
			<div className=" justify-between w-full md:block md:w-auto">
				<ul className="flex space-x-7 font-bold font-nunito">
					<li><a className="text-lg text-slate-800 focus:text-emerald-700 hover:text-slate-500 " href="/">Home</a></li>
					<li><a className="text-lg text-slate-800 focus:text-emerald-700 hover:text-slate-500 " href="User">Pessoa Usuária</a></li>
					<li><a className="text-lg text-slate-800 focus:text-emerald-700 hover:text-slate-500 " href="Prof">Profissional</a></li>
				</ul>
			</div>
		</div>
	</nav>

    
</>
    )

}

export { Header };
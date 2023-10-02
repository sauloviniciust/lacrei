import { Component } from "react";

class Botao extends Component<{ Button: string; Button1: string }> {
  render() {
    return (
      <div
        className="flex flex-col sm:flex-row place-items-center gap-4 sm:gap-16 
            font-semibold font-nunito text-xl mt-10 lg:mt-10 mb-20"
      >
        <button
          className="w-64 shadow-lg shadow-zinc-400 tracking-tight text-white bg-emerald-600 
              rounded-lg hover:bg-emerald-500 h-12"
        >
          <a href="User">{this.props.Button1}</a>
        </button>
        <button
          className="w-64 shadow-lg shadow-zinc-400 border-2 text-emerald-600 hover:text-emerald-500
               border-emerald-600 hover:border-emerald-500 rounded-lg h-12"
        >
          <a href="Prof">{this.props.Button}</a>
        </button>
      </div>
    );
  }
}

export { Botao };

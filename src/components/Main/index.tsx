import { Component } from "react";

class Main extends Component<{
  Title: string;
  Info: string;
  Image: any;
  Botoes: any;
}> {
  render() {
    return (
      <section className="flex flex-col lg:flex-row gap-10 lg:justify-between mt-28 lg:mt-40 ">
        <div className="lg:w-1/3 mx-4 sm:mx-8 lg:mb-80">
          <h1 className="text-2xl sm:text-3xl leading-tight font font-bold font-nunito lg:text-5xl">
            {this.props.Title}
          </h1>
          <p className="px-4 border-l-4 border-emerald-600 text-sm sm:text-base mt-6 font-normal font-nunito lg:text-2xl text-zinc-700">
            {this.props.Info}
          </p>
          {this.props.Botoes}
        </div>

        <div className="lg:w-1/3 mx-4 sm:mx-auto">{this.props.Image}</div>
      </section>
    );
  }
}

export { Main };

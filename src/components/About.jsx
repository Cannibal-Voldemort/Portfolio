import { Aboutme } from "../constants";
import pp from '../assets/pp.jpeg'
const About = () => {
  return (
    <section className="flex min-h-screen flex-wrap items-center">
      <div className="w-full md:w-1/2">
      <h2 className="my-9 p-2 text-4xl font-bold md:text-5xl lg:text-[7rem]">{Aboutme.name}</h2>
      <p className="p-2 text-3xl tracking-tighter lg:text-4xl">{Aboutme.greet}</p>
      <p className="mb-8 p-2 text-xl">{Aboutme.description}</p>
      </div>
      <div className="w-full md:w-1/2 lg:p-8" >
      <div className="flex justify-center">
        <img src = {pp} width={500} height={500} alt='Aman Singh' className="rounded-3xl"/>
      </div>
      </div>
    </section>
  );
};

export default About;

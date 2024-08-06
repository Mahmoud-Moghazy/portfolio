/* eslint-disable @next/next/no-img-element */
import { tools } from "@/data";

const Knowledge = () => {
  return (
    <section className="py-20 w-full">
      <h1 className="heading">
        My <span className="text-purple">knowledge</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center mt-10">
        {tools.map((tool, index) => (
          <div
            className="flex items-center justify-center sm:w-36 w-24 sm:h-36 h-24 m-3"
            key={index}
          >
            <div className="relative w-full h-full overflow-hidden rounded-3xl">
              <img
                src="/bg.png"
                alt="bgimg"
              />
              <img
                src={tool}
                alt="tool icon"
                className="z-10 absolute bottom-0 p-4 transition-transform duration-300 transform scale-100 hover:scale-150"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Knowledge;
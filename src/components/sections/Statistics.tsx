import clsx from "clsx";
import Image from "next/image";

const Statistics = () => {
  return (
    <section className="bg-[#BACA5B]">
      <div
        className={clsx(
          "relative container mx-auto p-[40px] gap-8 grid grid-cols-4 font-cairo font-bold text-white ",
          "max-md:grid-cols-2"
        )}
      >
        <Image
          src="/tp-white-asset.png"
          alt=""
          width={280}
          height={220}
          className="absolute bottom-0 right-0"
        />
        <div>
          <h1 className="text-3xl">
            5<span className="ml-1 text-xl">+</span>
          </h1>
          <p className="text-xl">Experience</p>
        </div>
        <div>
          <h1 className="text-3xl">
            12<span className="ml-1 text-xl">+</span>
          </h1>
          <p className="text-xl">Total Clients</p>
        </div>
        <div>
          <h1 className="text-3xl">
            67<span className="ml-1 text-xl">+</span>
          </h1>
          <p className="text-xl">Total Visits</p>
        </div>
        <div>
          <h1 className="text-3xl">
            37<span className="ml-1 text-xl">+</span>
          </h1>
          <p className="text-xl">Total Projects</p>
        </div>
      </div>
    </section>
  );
};

export default Statistics;

import Image from "next/image";

const Services = () => {
  return (
    <section className="font-cairo">
      <div className="mx-auto py-[30px] px-[20px] container font-bold ">
        <div className="gap-[10px] flex items-center ">
          <Image
            src="/tp-colorful-asset.png"
            className="max-md:w-[24px] max-md:h-[19px]"
            alt=""
            width={40}
            height={32}
          />
          <h1>Services</h1>
        </div>
      </div>
    </section>
  );
};

export default Services;

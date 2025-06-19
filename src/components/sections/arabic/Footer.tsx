import clsx from "clsx";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
const Footer = () => {
  return (
    <section className="font-cairo bg-[#BACA5B] text-white">
      <div
        className={clsx(
          `relative mx-auto gap-[60px] py-[60px] px-[20px] 
          container flex flex-col items-center justify-center font-bold`,
          `max-md:flex-col`
        )}
      >
        <Image
          src="/tp-white-asset.png"
          alt=""
          width={280}
          height={220}
          className="absolute bottom-0 left-0"
        />
        <Image
          src="/tp-white-asset.png"
          alt=""
          width={280}
          height={220}
          className="absolute top-0 right-0"
        />
        <div
          className={clsx(
            `flex gap-[200px] justify-center`,
            `max-md:flex-col max-md:gap-[20px]`
          )}
        >
          <div className="flex flex-col gap-[20px]">
            <div className={clsx("flex", "max-md:justify-center")}>
              <Image src="/logo.png" alt="" width={200} height={58} />
            </div>
            <p className="text-xl max-w-[430px] max-md:hidden">
              We provide you with the latest power generators and comprehensive
              engineering services, offering high reliability, instant technical
              support, and years of experience
            </p>
          </div>
          <div
            className={clsx(
              "flex flex-col gap-[20px]",
              "max-md:gap-[30px] max-md:items-center"
            )}
          >
            <p className={clsx("text-xl max-w-[270px]", "max-md:text-center")}>
              هل ترغب في شراكة أو تعاون؟
            </p>
            <button
              className={clsx(
                "px-6 py-2 font-bold w-fit bg-[#0000C4] text-white",
                "max-md:text-sm"
              )}
            >
              تواصل معنا
            </button>
            <div className="flex flex-col gap-[20px]">
              <div className="flex gap-4 items-center">
                <Phone className="w-[20px] h-[20px]" />
                <h1>+966 54 314 3105</h1>
              </div>
              <div className="flex gap-4 items-center">
                <Mail className="w-[20px] h-[20px]" />
                <h1>info@threephase.com</h1>
              </div>
              <div className="flex gap-4 items-center">
                <MapPin className="w-[20px] h-[20px]" />
                <h1>الرياض ,المملكة العربية السعودية</h1>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="max-md:text-sm">
            © 2025 ThreePhase. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;

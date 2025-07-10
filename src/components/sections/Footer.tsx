import clsx from "clsx";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import AnimatedSvg from "../shared/AnimatedSvg";
import Link from "next/link";
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
        <AnimatedSvg
          width={280}
          height={220}
          viewBox="0 0 280 220"
          className="absolute bottom-0 left-0"
          svgContent={
            <g opacity="0.1">
              <path
                d="M213.888 199.561L280 -20H232.933L166.821 199.561H213.888Z"
                fill="white"
              />
              <path
                d="M130.477 199.561L196.595 -20H149.528L83.416 199.561H130.477Z"
                fill="white"
              />
              <path
                d="M47.067 199.561L113.179 -20H66.1172L0 199.561H47.067Z"
                fill="white"
              />
            </g>
          }
        />
        <div
          className={clsx(
            `flex gap-[200px] justify-center`,
            `max-md:flex-col max-md:gap-[20px]`
          )}
        >
          <div className="flex flex-col gap-[20px]">
            <div className={clsx("flex", "max-md:justify-center")}>
              <Image
                src="/logo.svg"
                alt="threephase logo"
                width={200}
                height={58}
              />
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
              Interested in a Partnership or Collaboration?
            </p>
            <Link
              href="mailto:contact@threephase.co"
              className={clsx(
                "px-6 py-2 font-bold w-fit bg-[#0000C4] text-white",
                "max-md:text-sm animate-pulse cursor-pointer"
              )}
            >
              Contact Us
            </Link>
            <div className="flex flex-col gap-[20px]">
              <div className="flex gap-4 items-center">
                <Phone className="w-[20px] h-[20px]" />
                <h1>+966 55 344 2515</h1>
              </div>
              <div className="flex gap-4 items-center">
                <Mail className="w-[20px] h-[20px]" />
                <h1>contact@threephase.co</h1>
              </div>
              <div className="flex gap-4 items-center">
                <MapPin className="w-[20px] h-[20px]" />
                <h1>Riyadh , Saudi Arabia</h1>
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

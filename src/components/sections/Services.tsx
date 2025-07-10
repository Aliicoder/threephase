import clsx from "clsx";
import AnimatedSvg from "../shared/AnimatedSvg";

const Services = () => {
  return (
    <section className="relative z-10 font-cairo bg-white">
      <div className="mx-auto gap-[90px] py-[30px] px-[20px] container flex flex-col font-bold">
        <div className="gap-[10px] flex items-center  ">
          <AnimatedSvg
            className="max-md:w-[24px] max-md:h-[19px]"
            width={40}
            height={32}
            viewBox="0 0 40 32"
            svgContent={
              <>
                <path
                  d="M30.5559 31.6813L39.9997 0.318848H33.2763L23.8325 31.6813H30.5559Z"
                  fill="#0000C4"
                />
                <path
                  d="M18.6415 31.6813L28.0861 0.318848H21.3628L11.9189 31.6813H18.6415Z"
                  fill="#FEEA4D"
                />
                <path
                  d="M6.72774 31.6813L16.1716 0.318848H9.449L0.00439453 31.6813H6.72774Z"
                  fill="#FF220F"
                />
              </>
            }
          />
          <h1 className="text-4xl max-md:text-xl">Services</h1>
        </div>
        <div className={clsx("flex ", "max-md:flex-col max-md:gap-[90px]")}>
          <div className="basis-4/12 flex flex-col items-center">
            <svg
              className="max-md:w-[45px] max-md:h-[36px]"
              width="64"
              height="58"
              viewBox="0 0 64 58"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.1 43.174L34.9 48.9129C35.4713 49.4782 36.1494 49.9265 36.8958 50.2324C37.6422 50.5383 38.4421 50.6958 39.25 50.6958C40.0579 50.6958 40.8578 50.5383 41.6042 50.2324C42.3506 49.9265 43.0288 49.4782 43.6 48.9129C44.1713 48.3477 44.6244 47.6767 44.9336 46.9382C45.2427 46.1996 45.4018 45.4081 45.4018 44.6087C45.4018 43.8094 45.2427 43.0178 44.9336 42.2793C44.6244 41.5408 44.1713 40.8698 43.6 40.3045M37.8 34.5656L45.05 41.7393C46.2037 42.8808 47.7684 43.5221 49.4 43.5221C51.0316 43.5221 52.5963 42.8808 53.75 41.7393C54.9037 40.5977 55.5518 39.0495 55.5518 37.4351C55.5518 35.8207 54.9037 34.2724 53.75 33.1309L42.498 21.9973C40.8667 20.3853 38.6555 19.4798 36.35 19.4798C34.0445 19.4798 31.8333 20.3853 30.202 21.9973L27.65 24.5225C26.4963 25.664 24.9316 26.3053 23.3 26.3053C21.6684 26.3053 20.1037 25.664 18.95 24.5225C17.7963 23.3809 17.1482 21.8326 17.1482 20.2183C17.1482 18.6039 17.7963 17.0556 18.95 15.9141L27.099 7.85085C29.7445 5.24004 33.1945 3.57692 36.9029 3.12475C40.6112 2.67259 44.3661 3.45721 47.573 5.35441L48.936 6.15786C50.1708 6.89528 51.6389 7.15103 53.054 6.87523L58.1 5.87091M58.1 3.00144L61 34.5656H55.2M5.9 3.00144L3 34.5656L21.85 53.2171C23.0037 54.3587 24.5684 55 26.2 55C27.8316 55 29.3963 54.3587 30.55 53.2171C31.7037 52.0756 32.3518 50.5273 32.3518 48.9129C32.3518 47.2985 31.7037 45.7503 30.55 44.6087M5.9 5.87091H29.1"
                stroke="black"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h1
              className={clsx(
                "pt-[20px] pb-[16px] text-3xl text-center",
                "max-md:text-2xl"
              )}
            >
              Mobile Generators
            </h1>
            <p className={clsx("max-w-[300px] text-center", "max-md:text-sm")}>
              Generators that can be easily transported and operated at multiple
              locations
            </p>
          </div>
          <div className="basis-4/12 flex flex-col items-center">
            <svg
              className="max-md:w-[45px] max-md:h-[45px]"
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.5 49.4V32C17.5 28.1544 19.0277 24.4662 21.747 21.747C24.4662 19.0277 28.1544 17.5 32 17.5C35.8456 17.5 39.5338 19.0277 42.253 21.747C44.9723 24.4662 46.5 28.1544 46.5 32V49.4M17.5 49.4H46.5M17.5 49.4C15.9617 49.4 14.4865 50.0111 13.3988 51.0988C12.3111 52.1865 11.7 53.6617 11.7 55.2V58.1C11.7 58.8691 12.0055 59.6068 12.5494 60.1506C13.0932 60.6945 13.8309 61 14.6 61H49.4C50.1691 61 50.9068 60.6945 51.4506 60.1506C51.9945 59.6068 52.3 58.8691 52.3 58.1V55.2C52.3 53.6617 51.6889 52.1865 50.6012 51.0988C49.5135 50.0111 48.0383 49.4 46.5 49.4M58.1 32H61M50.85 10.25L49.4 11.7M3 32H5.9M32 3V5.9M11.4941 11.4941L13.5444 13.5444M32 32V49.4"
                stroke="black"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <h1
              className={clsx(
                "pt-[20px] pb-[16px] text-3xl text-center",
                "max-md:text-2xl"
              )}
            >
              Emergency Solutions
            </h1>
            <p className={clsx("max-w-[300px] text-center", "max-md:text-sm")}>
              We serve you during unexpected power Response time: within 1–2
              hours
            </p>
          </div>
          <div className="basis-4/12 flex flex-col items-center">
            <svg
              className="max-md:w-[45px] max-md:h-[41px]"
              width="64"
              height="52"
              viewBox="0 0 64 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M37.8 43.4V8.60005C37.8 7.06179 37.1889 5.58654 36.1012 4.49883C35.0135 3.41112 33.5383 2.80005 32 2.80005H8.8C7.26174 2.80005 5.78649 3.41112 4.69878 4.49883C3.61107 5.58654 3 7.06179 3 8.60005V40.5C3 41.2692 3.30553 42.0068 3.84939 42.5507C4.39325 43.0945 5.13087 43.4 5.9 43.4H11.7M11.7 43.4C11.7 46.6033 14.2967 49.2 17.5 49.2C20.7033 49.2 23.3 46.6033 23.3 43.4M11.7 43.4C11.7 40.1968 14.2967 37.6 17.5 37.6C20.7033 37.6 23.3 40.1968 23.3 43.4M40.7 43.4H23.3M40.7 43.4C40.7 46.6033 43.2967 49.2 46.5 49.2C49.7033 49.2 52.3 46.6033 52.3 43.4M40.7 43.4C40.7 40.1968 43.2967 37.6 46.5 37.6C49.7033 37.6 52.3 40.1968 52.3 43.4M52.3 43.4H58.1C58.8691 43.4 59.6068 43.0945 60.1506 42.5507C60.6945 42.0068 61 41.2692 61 40.5V29.915C60.9988 29.2569 60.7738 28.6188 60.362 28.1054L50.27 15.4904C49.9988 15.1508 49.6547 14.8765 49.2631 14.6877C48.8716 14.499 48.4427 14.4007 48.008 14.4H37.8"
                stroke="black"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h1
              className={clsx(
                "pt-[20px] pb-[16px] text-3xl text-center",
                "max-md:text-2xl"
              )}
            >
              Generator Rental
            </h1>
            <p className={clsx("max-w-[300px] text-center", "max-md:text-sm")}>
              We provide you with a power generator and a trained operator under
              flexible contracts
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

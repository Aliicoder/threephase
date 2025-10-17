import Link from "next/link";
import clsx from "clsx";

const NotFound = () => {
  return (
    <div className="gap-4 flex flex-col items-center justify-center h-[calc(100vh-100px)]">
      <h1
        className={clsx(
          "px-[20px] text-4xl font-bold text-center",
          "max-md:text-2xl"
        )}
      >
        Page Not Found
      </h1>

      <p className={clsx("px-[20px] text-xl text-center", "max-md:text-lg")}>
        The page you are looking for does not exist.
      </p>
      <Link
        className={clsx(
          "mt-8 border border-blue-500 bg-blue-500 px-4 py-2 rounded cursor-pointer text-xl text-white",
          "max-md:text-sm"
        )}
        href="/"
      >
        Go back
      </Link>
    </div>
  );
};

export default NotFound;

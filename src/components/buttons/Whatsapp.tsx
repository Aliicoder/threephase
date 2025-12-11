import React from "react";
import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";

const Whatsapp = () => {
  return (
    <Link
      href="https://wa.me/966553442515"
      className={clsx(
        "hidden p-4 z-50 left-0 bottom-0 cursor-pointer",
        "max-md:fixed max-md:block"
      )}
    >
      <Image src="/assets/icons/whatsapp.svg" alt="" width={40} height={40} />
    </Link>
  );
};

export default Whatsapp;

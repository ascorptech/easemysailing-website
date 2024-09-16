import Link from "next/link";
import Image from "next/image";

const LoginHeader = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between p-3 bg-white shadow-md">
      <div className="ml-16 mr-16 text-xl font-bold">
        {/* <Link href="/">
          EaseMy
          <span className="text-green-600">Sailing</span>
        </Link> */}

        <div className="w-44 h-12 sm:w-52 sm:h-[53px] ">
          <Link href="/">
            <Image
              src="/images/logo_1.png"
              alt="EaseMySailing Logo"
              className="object-contain h-full w-full "
              width={800}
              height={800}
            />
          </Link>
        </div>
      </div>
      <Link
        href={"/"}
        className="px-4 py-2 ml-16 mr-16 text-white bg-green-600 rounded-full"
      >
        Back to website
      </Link>
    </header>
  );
};

export default LoginHeader;

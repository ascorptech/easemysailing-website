// import { Link } from "react-router-dom";
import Link from "next/link";

const LoginHeader = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between p-3 bg-white shadow-md">
      {/* Brand Name */}
      <div className="ml-16 mr-16 text-xl font-bold">
        <Link href="/">
          EaseMy
          <span className="text-green-600">Sailing</span>
        </Link>
      </div>
      {/* Button */}
      <Link
        href={"recruiter"}
        className="px-4 py-2 ml-16 mr-16 text-white bg-green-600 rounded-full"
      >
        Back to website
      </Link>
    </header>
  );
};

export default LoginHeader;

import Image from "next/image";
const LoginImg = () => {
    return (

        <div className="w-1/2 hidden md:flex items-center justify-center bg-white">
          <Image
            src="/images/user.jpg"
            alt="Sign In Illustration"
            width={500}
            height={500}
            className="w-[491px] h-[470px] object-contain"
            priority
          />
        </div>
    )
}

export default LoginImg;
import Image from "next/image";
const Wedo = () => {
  // return (
  //   <div className="flex flex-col">
  //     {/* heading */}
  //     <div>
  //       <h1>What We Do</h1>
  //     </div>
  //     {/* first div */}
  //     <div className="flex h-[9rem] border-2 border-black">
  //       <div>
  //         <img src="sign1.jpg" alt="" />
  //         <h1>For Seaforers</h1>
  //         <p>
  //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
  //           recusandae, esse eveniet illum aliquid aliquam deleniti autem cumque
  //           rerum, dignissimos mollitia. Aut asperiores impedit similique vero
  //           enim quibusdam earum in?
  //         </p>
  //       </div>
  //       {/* second div */}
  //       <div>
  //         <img src="sign2.avif" alt="" />
  //         <h1>For Seaforers</h1>
  //         <p>
  //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
  //           recusandae, esse eveniet illum aliquid aliquam deleniti autem cumque
  //           rerum, dignissimos mollitia. Aut asperiores impedit similique vero
  //           enim quibusdam earum in?
  //         </p>
  //       </div>
  //       {/* Third div */}
  //       <div>
  //         <img src="phone.png" alt="" />
  //         <h1>For Seaforers</h1>
  //         <p>
  //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
  //           recusandae, esse eveniet illum aliquid aliquam deleniti autem cumque
  //           rerum, dignissimos mollitia. Aut asperiores impedit similique vero
  //           enim quibusdam earum in?
  //         </p>
  //       </div>
  //     </div>
  //   </div>
  // );
  return (
    <div className="flex flex-col justify-center items-center">
    <div className="container flex sm:md:flex-row flex-col">
    <div className="flex sm:md:w-1/2 w-full">
    <Image
    src="/aboutleft.png" // Replace with your image path
    alt="Left Image"
    width={5000} // Set to match the height
    height={5050} // Ensure the aspect ratio is consistent
    className="w-[25rem] h-30 md:w-[23rem] md:h-[
    20rem] pt-2 mt-2 "
    priority
    />
    </div>
    <div className="flex sm:md:w-1/2 w-full">
    <h1>Let’s Talk About <span>EaseMy
    Sailing</span> </h1>
    </div>
    </div>
  </div>
  )
};
export default Wedo;

import Image from "next/image";
const Profile = () => {
  return (
    <div className="container w-[85%] h-auto flex justify-between gap-16 mx-auto my-4 ">
      <div className="p-5  text-justify  h-[16rem] w-[65%]">
        <h2 className="font-bold text-lg mb-2">Profile Summary</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, aut
          explicabo quisquam veritatis esse rerum maxime minus rem quo obcaecati
          harum, consequatur unde ut eligendi in! Adipisci quo recusandae
          reiciendis?
        </p>
        <h3 className="font-bold text-sm mt-2">
          Connect with the Mentor at email :{" "}
          <span className="text-green-400">business@easemysailing.com</span>
        </h3>
        <h3 className="font-bold text-sm mt-2 ml-14">Or</h3>
        <div className="">
          <button className="h-8 mt-2 bg-green-600 text-white py-1 px-4 rounded-lg text-sm">
            Express interest
          </button>
        </div>
      </div>
      <div className=" w-[20rem]">
        <Image
          src="/profile.png" // Replace with your image path
          alt="right Image"
          width={500} // Set to match the height
          height={500} // Ensure the aspect ratio is consistent
          className="object-cover w-full"
        />
      </div>
    </div>
  );
};

export default Profile;

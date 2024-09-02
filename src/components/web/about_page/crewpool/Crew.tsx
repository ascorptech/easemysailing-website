const Crew = () => {
  return (
    <div className="border-2 border-red-700 flex flex-col md:flex-row mb-5 ">
      {/* Text Section */}
      <div className="flex flex-col px-2 m-1 w-full md:w-1/2">
        <h1 className="text-2xl md:text-4xl font-semibold">
          Our Seafaring <span className="text-green-700">crew</span> pool
        </h1>
        <p className="flex text-justify mt-4 ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
          eligendi suscipit animi. Sequi quos error repellendus explicabo labore
          eum nesciunt modi consectetur accusamus. Nam perferendis voluptas
          libero laboriosam odit labore.
        </p>
      </div>

      {/* Map Section */}
      <div className="w-full md:w-1/2  h-64 md:h-80 bg-gray-200 mt-4 md:mt-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345097377!2d144.95373631567332!3d-37.816279442021204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727e1e3c8cfdc!2sFederation%20Square!5e0!3m2!1sen!2sus!4v1597732737634!5m2!1sen!2sus"
          className="w-full h-full mx-0 border-0"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Crew;

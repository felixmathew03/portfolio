import { useInView } from 'react-intersection-observer';

const Projects = () => {
  // Scroll-triggered animation for each project
  const { ref: instagramRef, inView: instagramInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: olxRef, inView: olxInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: bookMyShowRef, inView: bookMyShowInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      id="projects"
      className="py-12 min-h-screen  flex items-center"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-400 mb-8">My Projects</h2>
        <div className="flex flex-col sm:flex-col md:flex-col lg:flex-col justify-center gap-24 items-center ">
          {/* Project 1 - Instagram Clone */}
          <div
            ref={instagramRef}
            className={` flex flex-col lg:flex-row items-center w-11/12 me-auto justify-between transition-all duration-500 ease-in-out ${
              instagramInView ? 'animate-slideUp' : 'opacity-0'
            }`}
          >
            <div className="  bg-gradient-to-r from-[#e5d9f2] to-[#f6f4f0] bg-opacity450 p-8 rounded-e-full lg:w-7/12 flex flex-col justify-center items-center transform translate-y-50 mb-6 lg:mb-0">
              <h3 className="text-xl font-semibold bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] bg-clip-text text-transparent mb-2">
                Chat App (CONVERSA)
              </h3>
              <p className="text-gray-900 mb-4 p-2  text-md">
              A real-time chat application built with the MERN stack (MongoDB, Express, React, Node.js), enabling users to register, log in, and engage in one-on-one conversations. The app supports real-time messaging using Socket.IO, ensuring instant message delivery without the need to refresh. Users can send and receive messages in real time, view their message history, and manage conversations seamlessly. The platform includes secure user authentication, stores chat data in MongoDB, and features a clean, responsive design optimized for both desktop and mobile devices.
               </p>

              <a
                href="https://github.com/felixmathew03/instagram.git"
                className="inline-block bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white py-2 px-4 rounded-lg text-center"
                target='_blank'
              >
                View Project
              </a>
            </div>
            <div className="relative w-full lg:w-96 h-full">
              <img
                src="images/socialmedia.jpg"
                alt="Instagram Clone"
                className="w-full h-full me-7 object-cover duration-300"
              />
            </div>
          </div>

          {/* Project 2 - OLX Clone (No React) */}
          <div
            ref={olxRef}
            className={`flex flex-col-reverse lg:flex-row items-center w-11/12 ms-auto justify-between transition-all duration-500 ease-in-out ${
              olxInView ? 'animate-slideUp' : 'opacity-0'
            }`}
          >
            <div className="relative w-full lg:w-96 h-full mb-6 lg:mb-0">
              <img
                src="images/shop.jpg"
                alt="ecommere Clone"
                className="w-full h-full object-cover duration-300"
              />
            </div>
            <div className="bg-gradient-to-r from-[#e5d9f2] to-[#f6f4f0] bg-opacity450 p-8 rounded-s-full lg:w-7/12 flex flex-col justify-center items-center transform translate-y-50">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Ecommerce (VENDORA)</h3>
              <p className="text-gray-900 mb-4 p-2 text-md">
              A MERN stack e-commerce web application with separate buyer and seller roles. Sellers can manage product listings, while buyers can browse, search, add items to a cart, and place orders. The platform features user authentication, real-time data handling, and a responsive user interface.
              </p>
              <a
                href="https://github.com/felixmathew03/vendora.git"
                className="inline-block bg-blue-800 text-white py-2 px-4 rounded-lg text-center"
                target='_blank'
              >
                View Project
              </a>
            </div>
          </div>

          {/* Project 3 - BookMyShow Clone */}
          <div
            ref={bookMyShowRef}
            className={`flex flex-col lg:flex-row items-center w-11/12 me-auto justify-between transition-all duration-500 ease-in-out ${
              bookMyShowInView ? 'animate-slideUp' : 'opacity-0'
            }`}
          >
            <div className="bg-gradient-to-r from-[#e5d9f2] to-[#f6f4f0] bg-opacity450 p-8 rounded-e-full lg:w-7/12  flex flex-col justify-center items-center transform translate-y-50 mb-6 lg:mb-0">
              <h3 className="text-xl font-semibold text-red-700 mb-2">BookMyShow Clone</h3>
              <p className="text-gray-900 mb-4 p-2 text-md">
                This is a clone of the BookMyShow platform, featuring a user-friendly interface. Users can browse and add movies, view detailed information about each movie, and explore showtimes. The platform is built with MongoDB, Node.js, Express, HTML, CSS, and JavaScript.
              </p>
              <a
                href="#"
                className="inline-block bg-gradient-to-r from-slate-900 to-red-600 text-white py-2 px-4 rounded-lg text-center"
                target='_blank'
              >
                View Project
              </a>
            </div>
            <div className="relative w-full lg:w-96 h-full">
              <img
                src="images/film.jpg"
                alt="BookMyShow Clone"
                className="w-full h-full object-cover duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

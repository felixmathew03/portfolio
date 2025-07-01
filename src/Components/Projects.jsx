import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const { ref: chatRef, inView: chatInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: ecommerceRef, inView: ecommerceInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: movieRef, inView: movieInView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="projects" className="py-20 min-h-screen bg-black text-white">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-5xl font-bold text-[#14b8a6] mb-20 font-abril">
          Featured <span className="text-[#6366f1]">Projects</span>
        </h2>

        <div className="flex flex-col gap-24">
          {/* Project 1 */}
          <div
            ref={chatRef}
            className={`flex flex-col-reverse lg:flex-row items-center justify-between w-full transition-all duration-700 ease-in-out px-4 md:px-12 ${chatInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-xl lg:w-7/12">
              <h3 className="text-2xl font-semibold text-[#facc15] mb-2">Chat App (CONVERSA)</h3>
              <p className="text-gray-300 mb-4 text-md">
                Real-time chat app using MERN stack with Socket.IO. Includes real-time messaging, secure auth, chat history, and responsive UI.
              </p>
              <a
                href="https://github.com/yourusername/conversa"
                className="inline-block text-sm bg-[#14b8a6] hover:bg-[#0f766e] text-white py-2 px-5 rounded-xl transition-all"
                target="_blank"
              >
                View Project
              </a>
            </div>
            <div className="w-full lg:w-96 h-auto p-6">
              <img src="/images/socialmedia.jpg" alt="Chat App" className="w-full h-full object-contain rounded-xl shadow-md" />
            </div>
          </div>

          {/* Project 2 */}
          <div
            ref={ecommerceRef}
            className={`flex flex-col lg:flex-row items-center justify-between w-full transition-all duration-700 ease-in-out px-4 md:px-12 ${ecommerceInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="w-full lg:w-96 h-auto p-6">
              <img src="/images/shop.jpg" alt="Ecommerce App" className="w-full h-full object-contain rounded-xl shadow-md" />
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-xl lg:w-7/12">
              <h3 className="text-2xl font-semibold text-[#3b82f6] mb-2">Ecommerce App (VENDORA)</h3>
              <p className="text-gray-300 mb-4 text-md">
                MERN-based e-commerce site with buyer/seller roles. Features include product CRUD, secure login, cart, and order management.
              </p>
              <a
                href="https://github.com/yourusername/vendora"
                className="inline-block text-sm bg-[#3b82f6] hover:bg-blue-700 text-white py-2 px-5 rounded-xl transition-all"
                target="_blank"
              >
                View Project
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div
            ref={movieRef}
            className={`flex flex-col-reverse lg:flex-row items-center justify-between w-full transition-all duration-700 ease-in-out px-4 md:px-12 ${movieInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-xl lg:w-7/12">
              <h3 className="text-2xl font-semibold text-[#f87171] mb-2">BookMyShow Clone</h3>
              <p className="text-gray-300 mb-4 text-md">
                Movie booking site using MERN stack. Users can explore movies, view schedules, and book tickets with a clean and responsive layout.
              </p>
              <a
                href="https://github.com/yourusername/bookmyclone"
                className="inline-block text-sm bg-[#ef4444] hover:bg-red-600 text-white py-2 px-5 rounded-xl transition-all"
                target="_blank"
              >
                View Project
              </a>
            </div>
            <div className="w-full lg:w-96 h-auto p-6">
              <img src="/images/film.jpg" alt="Movie Booking App" className="w-full h-full object-contain rounded-xl shadow-md" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

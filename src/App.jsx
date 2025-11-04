import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Partners } from './components/Partners';
import { Benefits } from './components/Benefits';
import mountainMain from './assets/photos/mountainMain.jpg';
import { SeeTheBigPicture } from './components/SeeTheBigPicture';
function App() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <div className="absolute top-0 z-50 w-full flex justify-center mt-8">
        <div
          className="flex justify-center items-center h-[10vh] px-6 rounded-[25px]
                     bg-white/30 backdrop-blur-md border border-white/40 ">
          <div className="flex gap-8">
            <a
              href="#"
              className="font-roboto font-semibold text-black hover:text-gray-500 transition">
              Benefits
            </a>
            <a
              href="#"
              className="font-roboto font-semibold text-black hover:text-gray-500 transition">
              Specifications
            </a>
            <a
              href="#"
              className="font-roboto font-semibold text-black hover:text-gray-500 transition">
              How-to
            </a>
            <a
              href="#"
              className="font-roboto font-semibold text-black hover:text-gray-500 transition">
              Contact Us
            </a>
          </div>
        </div>
      </div>

      <Navbar />
      <Hero />

      {/* Sección principal */}
      <main className="  w-full flex flex-col justify-center items-center">
        <Partners />
        <Benefits />
        <div className="w-[90%] h-[70vh] mt-8  ">
          <img
            src={mountainMain}
            alt=""
            className="w-full h-full rounded-[65px]"
          />
        </div>
        <SeeTheBigPicture />
      </main>
    </div>
  );
}

export default App;

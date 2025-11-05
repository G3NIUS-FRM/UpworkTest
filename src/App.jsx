import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Partners } from './components/Partners';
import { Benefits } from './components/Benefits';
import mountainMain from './assets/photos/mountainMain.jpg';
import { SeeTheBigPicture } from './components/SeeTheBigPicture';
import { Toplinks } from './components/Toplinks';
function App() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <Toplinks />
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

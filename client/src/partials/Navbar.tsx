
import Graveyard from "/Graveyard.svg";

export const Navbar = () => {
  return (
    <>
      <section className="flex items-center justify-center mt-3">
        <div className="container h-auto border-2  max-h-20 md:max-h-32 overflow-hidden rounded-xl bg-slate-800">
        <div className="brandimage ">
            <h1 className="text-2xl md:text-4xl font-semibold text-center text-[#fffb97] relative top-5 z-10 font-[grave] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">GRAVEYARD</h1>
          <img src={Graveyard} alt="HomeIMage" className=" w-full  relative  bottom-12 md:bottom-20 " />
        </div>
        </div>
      </section>
    </>
  );
};

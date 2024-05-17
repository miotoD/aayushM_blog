import React from "react";
import Contact from "./contact";
import Header from "./header";

function Homepage() {
  return (
    <>
      <div className="w-full " style={{ backgroundImage: "url('/wo.jpg')" }}>
        <div className="main min-h-screen w-full">
          <h1 className="font-semibold font-serif text-[24px] text-center border-[2px] h-[150px] bg-black text-white py-8 m-0">
            This Is A Fitness Blog Example.
            <h1 className=" text-sm py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              corporis molestias tenetur id alias optio temporibus minima aut
              soluta blanditiis, nam eligendi debitis laudantium, officia
              aperiam quam cupiditate aspernatur! Molestiae?
            </h1>
          </h1>
          <div className="w-full p-4">
            <div className="flex flex-wrap justify-center p-4">
              <section className="bg-black border-black border-2 h-[240px] mt-10 mx-5 w-[260px] rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:translate-y-1 hover:cursor-pointer">
                <span className="text-white font-semibold font-serif text-sm block mb-4">
                  The Best Chest Workouts
                </span>
                <img
                  src="/wo.jpg"
                  alt="picture"
                  className="w-full h-[130px] rounded mb-4"
                />
                <p className="text-white font-semibold font-serif text-md mt-5 hover:text-red-300 hover:cursor-pointer">
                  Start from Today
                </p>
              </section>

              <section className="bg-black border-black border-2 mt-10 mx-5 w-[260px] h-[245px] rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:translate-y-1 hover:cursor-pointer">
                <span className="text-white font-semibold font-serif text-md block mb-4">
                  The Squats
                </span>
                <img
                  src="/squat.jpg"
                  alt="picture"
                  className="w-full h-[130px] rounded mb-4"
                />
                <p className="text-white font-semibold font-serif text-md hover:text-red-300 hover:cursor-pointer">
                  Start from Today
                </p>
              </section>

              <section className="bg-black border-black border-2 h-[240px] mt-10 mx-5 w-[260px] rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:translate-y-1 hover:cursor-pointer">
                <span className="text-white font-semibold font-serif text-sm block mb-4">
                  Yoga Science
                </span>
                <img
                  src="/ewrj.jpg"
                  alt="picture"
                  className="w-full h-[130px] rounded mb-4"
                />
                <p className="text-white font-semibold font-serif text-md mt-5 hover:text-red-300 hover:cursor-pointer">
                  Start from Today
                </p>
              </section>
            </div>
          </div>
        </div>

        <div className="footer text-center py-4 bg-gray-900 text-white font-semibold">
          <span className="block">Fitness Blog</span>
          <span className="block">&copy; 2024 Fitness Blog</span>
        </div>
      </div>
    </>
  );
}

export default Homepage;

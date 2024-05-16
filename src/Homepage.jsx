import React from "react";
import Contact from "./contact";
import Header from "./header";

function Homepage() {
  return (
    <>
      <Header />
      <div className="container mx-auto ">
        <div className="main h-[1200px]">
          <h1 className=" font-semibold font-serif text-[24px] mt-3">
            This Is A Fitness Blog Example.
          </h1>
          <section className=" bg-black border-black border-[2px] mt-[40px] my-[20px] mx-[20px] w-[600px]  ">
            <span className=" text-white font-semibold font-serif text-[20px]">
              The Best Chest Workouts
            </span>
            <img src="/wo.jpg" alt="picture" className=" mt-5" />
            <p className=" text-white font-semibold font-serif text-[25px] mt-3 hover:text-red-300 hover:cursor-pointer">
              Start from Today
            </p>
          </section>
          <section className="ex border-[2px] ml-[630px] mt-[-300px] h-[180px] bg-white text-black font-semibold rounded-[20px] shadow-xl">
            The best chest workouts at home to pump up your pecs – guarantee!
            Want a sculpted chest without a gym membership? This guide offers
            bodyweight and dumbbell exercises you can do at home, targeting
            different areas of your chest for complete development Chest Muscles
            Anatomy In the gym, there are…{" "}
            <a href="https://www.fitwirr.com/workout/chest-workouts-at-home/">
              Read more
            </a>
          </section>

          <section className=" bg-black border-black border-[2px] mt-[120px] my-[20px] mx-[20px] w-[600px]  ">
            <span className=" text-white font-semibold font-serif text-[20px]">
              The Squat: What Happens If You Squat For 30 Days?
            </span>
            <img src="/squat.jpg" alt="picture" className=" mt-5" />
            <p className=" text-white font-semibold font-serif text-[25px] mt-3 hover:text-red-300 hover:cursor-pointer">
              Start from Today
            </p>
          </section>

          <section className="ex border-[2px] ml-[630px] mt-[-500px] h-[180px] bg-white text-black font-semibold rounded-[20px] shadow-xl">
            The squat reigns supreme in the gym world. Beloved by beginners and
            pro athletes alike, this versatile exercise sculpts glutes, builds
            core strength, and lays the foundation for a powerful lower body.
            Chances are, you’ve already incorporated squats into your routine –
            but what happens when you make them your…
            <a href="https://www.fitwirr.com/workout/chest-workouts-at-home/">
              Read more
            </a>
          </section>
        </div>

        <div className="footer text-center py-4 mt-8 bg-gray-900 text-white font-semibold">
          <span className=" ml-[-400px]"> Fitness Blog</span>
          <span className=" ml-[300px]">&copy; 2024 Fitness Blog</span>
        </div>
      </div>
      {/* <Contact /> */}
    </>
  );
}

export default Homepage;

import { Link, useNavigate } from "react-router-dom";
import { Logo } from "./components";

function App() {
  const navigate = useNavigate();
  // if (flow === "customer") {
  //   return (
  //     <div className="min-h-screen flex flex-col items-center justify-start bg-white p-4">
  //       <Logo />
  //       <CustomRequest />
  //       <button
  //         className="mt-6 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
  //         onClick={() => setFlow("")}
  //       >
  //         Back
  //       </button>
  //     </div>
  //   );
  // }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen  bg-primary px-4 py-8">
      {/* Logo */}
      <header className="flex h-[10vh] justify-start items-center fixed top-0 left-5 right-0 z-20 px-4 sm:px-6 md:px-8">
        <Link to={"/"}>
          <Logo />
        </Link>
      </header>

      <p className="text-accent text-4xl sm:text-xl mb-8 text-center md:text-4xl font-bold">
        Connecting independent fashion designers with people who want custom
        outfits.
      </p>

      {/* Cards container */}
      <div className="flex flex-col md:flex-col lg:flex-row justify-center items-center gap-6 mt-10 w-full max-w-6xl">
        {/* Card 1 */}
        <div
          className="
            w-full md:w-full lg:w-[55%]
            h-[25vh] sm:h-[30vh]
            p-2 bg-accent rounded-lg shadow-lg border-2 border-secondary 
            flex justify-center items-center
            transition-transform duration-500 ease-in-out
            hover:-rotate-3 hover:scale-105
            cursor-pointer
          "
          onClick={() => navigate("/login")}
        >
          <button
            className="
              px-6 sm:px-7 py-4 bg-secondary text-accent
              text-2xl sm:text-3xl font-bold font-cursive
              cursor-pointer
            "
          >
            I am a designer
          </button>
        </div>

        {/* Card 2 */}
        <div
          className="
            w-full md:w-full lg:w-[55%]
            h-[25vh] sm:h-[30vh]
            p-2 bg-secondary rounded-lg shadow-lg border-2 border-accent 
            flex justify-center items-center
            transition-transform duration-500 ease-in-out
            hover:-rotate-3 hover:scale-105
            cursor-pointer
          "
          onClick={() => navigate("/waitlist")}
        >
          <button
            className="
              px-6 sm:px-7 py-4 bg-accent text-secondary
              text-2xl sm:text-3xl font-bold font-cursive cursor-pointer
            "
          >
            I need a designer
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;

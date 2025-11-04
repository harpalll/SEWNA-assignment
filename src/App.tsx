import { Link, useNavigate } from "react-router-dom";
import { Box, Logo } from "./components";

function App() {
  const navigate = useNavigate();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen  bg-primary px-4 py-8">
      {/* Logo */}
      <header className="flex h-[10vh] justify-start items-center fixed top-0 left-5 right-0 z-20 px-4 sm:px-6 md:px-8">
        <Link to={"/"}>
          <Logo />
        </Link>
      </header>

      <div className="relative flex flex-col items-center justify-center py-16 px-4 mt-4">
        {/* Top-left Box */}
        <Box className="animate-logo-bounce absolute left-0 -top-2 sm:-top-2" />

        {/* Main text with handwritten doodle */}
        <p className="text-center text-3xl sm:text-2xl md:text-4xl font-bold max-w-3xl leading-loose relative">
          <span className="relative inline-block">
            <span className="text-accent font-cursive">Connecting</span>

            {/* Handwritten style doodle */}
            <svg
              className="absolute left-1/2 -bottom-6 -translate-x-1/2 w-24 h-8 sm:w-20 sm:h-6 sm:-bottom-4"
              viewBox="0 0 96 32"
              fill="none"
            >
              <path
                d="M2,16 C10,8 20,24 32,16 C44,8 56,24 68,16 C80,8 90,24 94,16"
                stroke="#00b67f"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>{" "}
          independent fashion designers <br /> with people who want custom
          outfits.
        </p>

        {/* Bottom-right Box */}
        <Box className="animate-logo-bounce absolute right-0 bottom-4 sm:bottom-2" />
      </div>

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

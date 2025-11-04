import { Link, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import { useState, type FormEvent, type ReactEventHandler } from "react";

interface loginData {
  email: string;
  password: string;
}

const Login = () => {
  const [loginData, setLoginData] = useState<loginData>({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleTestCreds = () => {
    setLoginData({
      email: "demo@mail.com",
      password: "Demo@1234",
    });
  };

  const handleLogin: ReactEventHandler = (e: FormEvent) => {
    e.preventDefault();
    if (
      loginData.email === "demo@mail.com" &&
      loginData.password === "Demo@1234"
    ) {
      navigate("/designUpload");
    } else {
      alert("login failed please use Test Creds for testing");
    }
  };

  return (
    <div className="flex min-h-screen w-full gap-2 bg-primary p-2 sm:gap-4 sm:p-4">
      <div className="hidden grow flex-col bg-secondary items-center justify-between rounded-lg bg-foreground p-8 shadow-lg lg:flex">
        <Logo />
        <div className="w-full">
          <h1 className="text-5xl  font-bold font-poppins">
            <span className="inline-block text-primary font-cursive border-b-8 border-b-accent transform -rotate-3 transition-transform duration-300">
              Creative
            </span>

            <br />
            <span className="text-accent">Subscription Partner</span>
          </h1>
        </div>

        <div className="mt-8 flex w-full gap-1.5 text-sm text-primary">
          <div className="flex w-full flex-col gap-2">
            <img
              alt="Floral top"
              src="/floral-top.png"
              className="aspect-square w-56 h-56 rounded-2xl bg-primary object-cover object-center"
            />
            <span className="text-lg">Floral top</span>
          </div>
          <div className="flex w-full flex-col gap-2">
            <img
              alt="White Pocket Wrap Skirt"
              src="/white-pocket-skirt.png"
              className="aspect-square w-56 h-56 rounded-2xl bg-primary object-cover object-center"
            />
            <span className="text-lg">White Pocket Wrap Skirt</span>
          </div>
          <div className="flex w-full flex-col gap-2">
            <img
              alt="Black Crochet Tank Top"
              src="/black-corset.png"
              className="aspect-square w-56 h-56 rounded-2xl bg-primary object-cover object-center"
            />
            <span className="text-lg">Black Crochet Tank Top</span>
          </div>
          <div className="flex w-full flex-col gap-2">
            <img
              alt="Belladonna Shirt"
              src="/aw.png"
              className="aspect-square w-56 h-56 rounded-2xl bg-primary object-cover object-center"
            />
            <span className="text-lg">Belladonna Shirt</span>
          </div>
          <div className="flex w-full flex-col gap-2">
            <img
              alt="Denim Corset"
              src="/denim-corset.png"
              className="aspect-square w-56 h-56 rounded-2xl bg-primary object-cover object-center"
            />
            <span className="text-lg">Denim Corset</span>
          </div>
        </div>

        <div>
          <Link to={"https://www.joinsewna.com"} target="_blank">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-ring rounded-full bg-accent text-primary hover:scale-110 transition-all h-10 px-8 py-6 w-full text-xl ease-in">
              Join Sewna
            </button>
          </Link>
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-[500px] flex-col items-stretch gap-4 rounded-lg bg-card p-8 shadow-lg lg:min-w-[320px] 2xl:min-w-[360px] border border-accent">
        <h1 className="text-2xl font-bold font-poppins text-accent">Sign in</h1>
        <div className="flex flex-col items-center gap-8">
          <form
            onSubmit={handleLogin}
            className="flex flex-col items-center gap-8 w-full"
          >
            <input
              type="text"
              className="flex h-12 w-full rounded-full bg-gray-100 p-8 text-base transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-xl"
              placeholder="Email"
              value={loginData.email}
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
            />
            <input
              type="password"
              className="flex h-12 w-full rounded-full bg-gray-100 p-8 text-base transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-xl"
              placeholder="Password"
              value={loginData.password}
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
            />
            <button
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium  focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-ring rounded-full bg-secondary text-primary hover:scale-110 h-8 px-8 py-6 w-full text-lg ease-in transition-all"
              type="submit"
            >
              Login
            </button>
          </form>

          <div className="flex justify-between w-full">
            <button
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-lg font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-ring rounded-full underline-offset-4 hover:underline h-auto self-start p-0 text-violet-400"
              disabled
            >
              Forgot Password?
            </button>
            <button
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-lg font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-ring rounded-full underline-offset-4 hover:underline h-auto self-start p-0 text-violet-400"
              onClick={handleTestCreds}
            >
              Testing Credentials
            </button>
          </div>
        </div>

        <div className="my-2 flex w-full flex-row items-center justify-center gap-2">
          <div
            data-orientation="horizontal"
            role="none"
            className="h-px w-full shrink bg-secondary/20"
          ></div>
          <span className="text-xl uppercase">Or</span>
          <div
            data-orientation="horizontal"
            role="none"
            className="h-px w-full shrink bg-secondary/20"
          ></div>
        </div>

        <div className="flex flex-col items-start text-left">
          <span className="text-sm uppercase font-medium text-violet-400 pointer-events-none">
            New here?
          </span>
          <span className="max-w-60 font-poppins font-bold text-2xl leading-snug">
            Start Small or Go All In — You Decide
          </span>
          <button
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-ring rounded-full border border-border bg-accent text-primary hover:shadow-md hover:scale-110 transition-all h-8 px-8 py-6 mt-4 text-lg font-bold ease-in"
            disabled
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

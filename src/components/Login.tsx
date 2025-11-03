import Logo from "./Logo";

const Login = () => {
  return (
    <div className="flex min-h-screen w-full gap-2 bg-primary p-2 sm:gap-4 sm:p-4">
      <div className="hidden grow flex-col bg-secondary items-center justify-between rounded-lg bg-foreground p-8 shadow-lg lg:flex">
        <Logo />
        <div className="w-full">
          <h1 className="text-7xl  font-bold font-poppins">
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
              alt="Brand Identity Example"
              src="https://cdn.designpickle.com/_web/brand_identity-SfBlt_Ph.jpg"
              className="aspect-square w-56 h-56 rounded-2xl bg-primary object-cover object-center"
            />
            <span className="text-lg">Brand Identity</span>
          </div>
          <div className="flex w-full flex-col gap-2">
            <img
              alt="Brand Identity Example"
              src="https://cdn.designpickle.com/_web/marketing_advertising-CWzomOlA.jpg"
              className="aspect-square w-56 h-56 rounded-2xl bg-primary object-cover object-center"
            />
            <span className="text-lg">Brand Identity</span>
          </div>
          <div className="flex w-full flex-col gap-2">
            <img
              alt="Brand Identity Example"
              src="https://cdn.designpickle.com/_web/digital_web-DLn837V3.jpg"
              className="aspect-square w-56 h-56 rounded-2xl bg-primary object-cover object-center"
            />
            <span className="text-lg">Brand Identity</span>
          </div>
          <div className="flex w-full flex-col gap-2">
            <img
              alt="Brand Identity Example"
              src="https://cdn.designpickle.com/_web/motion_video-Bkp-OV6K.jpg"
              className="aspect-square w-56 h-56 rounded-2xl bg-primary object-cover object-center"
            />
            <span className="text-lg">Brand Identity</span>
          </div>
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-[600px] flex-col items-stretch gap-4 rounded-lg bg-card p-8 shadow-lg lg:min-w-[320px] 2xl:min-w-[360px] border border-accent">
        <h1 className="text-3xl font-bold font-poppins text-accent">Sign in</h1>
        <div className="flex flex-col items-center gap-8">
          <input
            type="text"
            className="flex h-15 w-full rounded-full bg-gray-100 p-8 text-base transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-xl"
            placeholder="Email"
          />
          <input
            type="password"
            className="flex h-15 w-full rounded-full bg-gray-100 p-8 text-base transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-xl"
            placeholder="Password"
          />
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-ring rounded-full bg-secondary text-primary hover:text-accent h-10 px-8 py-6 w-full text-xl">
            Login
          </button>

          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-xl font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-ring rounded-full underline-offset-4 hover:underline h-auto self-start p-0 text-violet-400">
            Forgot Password?
          </button>
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
          <span className="text-md uppercase font-medium text-violet-400">
            New here?
          </span>
          <span className="max-w-60 font-poppins font-bold text-2xl leading-snug">
            Start Small or Go All In — You Decide
          </span>
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-ring rounded-full border border-border bg-accent text-primary hover:shadow-md hover:bg-accent/80 transition-all h-10 px-6 py-8 mt-4 text-xl font-bold">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

import { useState, type FormEvent, type ReactEventHandler } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import emailjs from "@emailjs/browser";

const Waitlist = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit: ReactEventHandler = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setMessage("");
    setError("");

    try {
      const result = await emailjs.send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        {
          email: email,
          name: name,
        },
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      );

      if (result.status === 200) {
        setMessage("🎉 Thanks for joining the waitlist! Check your inbox.");
        setEmail("");
        setName("");
      } else {
        throw new Error("Failed to send email.");
      }
    } catch (err) {
      console.error(err);
      setError("Oops! Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-primary px-4 py-8">
      <header className="flex h-[10vh] justify-start items-center fixed top-0 left-5 right-0 z-20 px-4 sm:px-6 md:px-8">
        <Link to={"/"}>
          <Logo />
        </Link>
      </header>

      <div className="flex-1 flex items-center justify-center font-poppins min-h-screen">
        <div className="max-w-2xl w-full mx-auto text-center transition-all duration-700">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-8 leading-tight whitespace-nowrap">
            <div>
              You want the{" "}
              <span className="text-accent font-cursive font-bold">best</span>,
            </div>
            <div>
              you gotta wait for the{" "}
              <span style={{ letterSpacing: "-0.02em" }}>best!</span>
            </div>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8">
            Give us just <span className="font-bold text-black">two weeks</span>{" "}
            to fully onboard the amazing designers <br />
            who will listen and understand your vision.
          </p>

          <form className="max-w-md mx-auto mb-6" onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                placeholder="Enter your name"
                // className="w-full px-4 py-3 border-2 focus:outline-none text-base transition-all duration-200 border-gray-300 focus:border-black"
                className="flex h-15 w-full rounded-full bg-gray-100 p-8 text-base transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-xl mb-4"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={loading}
                required
              />
              <input
                placeholder="Enter your email"
                // className="w-full px-4 py-3 border-2 focus:outline-none text-base transition-all duration-200 border-gray-300 focus:border-black"
                className="flex h-15 w-full rounded-full bg-gray-100 p-8 text-base transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-xl"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading || !email || !name}
              // className="w-full px-8 py-3 font-medium text-base transition-all duration-200 bg-black hover:bg-gray-800 text-white disabled:opacity-50 disabled:cursor-not-allowed"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium  focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-ring rounded-full bg-secondary text-primary hover:scale-110 h-10 px-8 py-6 w-full text-xl ease-in transition-all"
            >
              {loading ? "Sending..." : "Notify me when ready"}
            </button>
          </form>

          {message && <p className="text-green-600">{message}</p>}
          {error && <p className="text-red-600">{error}</p>}

          <div className="flex items-center justify-center gap-4 text-sm text-gray-500 mt-6">
            <Link
              className="hover:text-gray-900 transition-colors duration-200"
              to="/"
              data-discover="true"
            >
              ← Go back
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Waitlist;

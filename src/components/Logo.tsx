export default function Logo() {
  return (
    <div
      className="
        animate-logo-bounce
        flex items-baseline cursor-pointer
        text-accent tracking-[-0.02em]
        text-[2rem] sm:text-[2.3rem] md:text-[2.5rem]
        drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)]
        transition-transform duration-500
        hover:scale-110 hover:animate-logo-bounce
        font-bold
      "
    >
      {/* 'se' in Pacifico */}
      <span className="font-cursive">se</span>

      {/* 'W' + italic 'N' in Poppins */}
      <span className="font-poppins text-[1.5rem] sm:text-[1.6rem] md:text-[1.7rem] tracking-[-0.2em] ml-px">
        W
        <i className="font-poppins italic text-[1.5rem] sm:text-[1.6rem] md:text-[1.7rem] tracking-[0em]">
          N
        </i>
      </span>

      {/* 'a.' in Poppins */}
      <span className="font-poppins text-[2rem] sm:text-[2.1rem] md:text-[2.2rem] tracking-[-0.02em] ml-px">
        a.
      </span>
    </div>
  );
}

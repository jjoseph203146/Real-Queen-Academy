import logo from "../assets/reel-queen-logo.png";

export default function Hero() {
  return (
    <section
      className="relative text-center overflow-hidden px-6 py-24 md:py-[96px] pb-[88px]"
      style={{
        background:
          "radial-gradient(ellipse 900px 500px at 50% -10%, #3B1548 0%, #2A0F35 60%)",
      }}
    >
      <div className="max-w-[760px] mx-auto flex flex-col items-center gap-7">
        <img
          src={logo}
          alt="The Reel Queen Academy"
          className="w-[220px] h-[220px] sm:w-[340px] sm:h-[340px] lg:w-[520px] lg:h-[520px] object-contain"
        />

        <div className="flex flex-col gap-[18px]">
          <p className="m-0 text-sm tracking-[3px] uppercase text-gold-500 font-medium">
            Founding Cohort &nbsp;&middot;&nbsp; Begins September 2026
          </p>
          <h1 className="m-0 font-display font-semibold text-[34px] sm:text-[42px] lg:text-[52px] leading-[1.12] text-cream-50">
            Become the Queen of Your Brand
          </h1>
          <p className="m-0 text-[17px] sm:text-[19px] leading-[1.65] text-[#D9C9DE] max-w-[600px] mx-auto">
            A 4-week coaching experience designed to help purpose-driven
            women elevate their online presence, strengthen their personal
            brand, and confidently show up online.
          </p>
        </div>

        <div className="flex items-center gap-[10px] mt-1">
          <span className="h-px w-12 bg-plum-400" />
          <span className="text-[13px] tracking-[2.5px] text-gold-500 uppercase whitespace-nowrap">
            Visibility &nbsp;&bull;&nbsp; Credibility &nbsp;&bull;&nbsp; Opportunity
          </span>
          <span className="h-px w-12 bg-plum-400" />
        </div>

        <a
          href="#pricing"
          className="mt-[10px] px-10 py-4 bg-gold-500 hover:bg-gold-400 text-plum-900 text-[15px] tracking-[1.5px] uppercase font-semibold rounded-sm transition-colors"
        >
          Secure Your Spot
        </a>
      </div>
    </section>
  );
}

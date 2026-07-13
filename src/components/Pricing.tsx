export default function Pricing() {
  return (
    <section
      id="pricing"
      className="px-6 pt-[100px] pb-[110px]"
      style={{ background: "#2A0F35" }}
    >
      <div className="max-w-[920px] mx-auto text-center">
        <p className="m-0 mb-3 text-[13px] tracking-[3px] uppercase text-gold-500 font-medium">
          Founding Cohort Enrollment
        </p>
        <h2 className="m-0 mb-3 font-display font-semibold text-[30px] sm:text-[38px] text-cream-50">
          The Reel Queen Academy
        </h2>
        <p className="m-0 mb-14 text-base text-[#C9B7CF]">
          Founding members lock in early pricing before it's gone.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 text-left">
          <div
            className="relative rounded-md px-[34px] py-10 flex flex-col gap-4"
            style={{
              backgroundImage:
                "linear-gradient(165deg, #C21E8C 0%, #8E1568 100%)",
            }}
          >
            <span className="absolute top-5 right-5 text-[11px] tracking-[1.5px] uppercase bg-gold-500 text-plum-900 px-3 py-[5px] rounded-[20px] font-semibold">
              Early Bird
            </span>
            <p className="m-0 text-sm tracking-[1.5px] uppercase text-[#F2D4E5]">
              Enroll Early
            </p>
            <p className="m-0 font-display font-bold text-[56px] text-white">
              $125
            </p>
            <p className="m-0 text-[15px] text-[#F2D4E5]">
              Secure your spot by <strong>July 17</strong>
            </p>
          </div>

          <div className="bg-plum-800 border border-plum-500 rounded-md px-[34px] py-10 flex flex-col gap-4">
            <p className="m-0 text-sm tracking-[1.5px] uppercase text-gold-500">
              Standard Enrollment
            </p>
            <p className="m-0 font-display font-bold text-[56px] text-cream-50">
              $250
            </p>
            <p className="m-0 text-[15px] text-[#C9B7CF]">
              Through <strong>July 31</strong>
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-7 mt-11 flex-wrap">
          <p className="m-0 text-sm text-[#C9B7CF]">
            📅 Program begins September 2026
          </p>
          <span className="w-px h-4 bg-plum-500" />
          <p className="m-0 text-sm text-[#C9B7CF]">👑 Limited spots available</p>
        </div>

        <a
          href="#inquire"
          className="inline-block mt-10 px-[52px] py-[18px] bg-gold-500 hover:bg-gold-400 text-plum-900 text-[15px] tracking-[1.5px] uppercase font-semibold rounded-sm transition-colors"
        >
          Reserve My Spot
        </a>
      </div>
    </section>
  );
}

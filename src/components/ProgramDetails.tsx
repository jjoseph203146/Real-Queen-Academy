const details = [
  { icon: "📅", label: "Program Begins", value: "September 2026" },
  { icon: "⏰", label: "Live Sessions", value: "Thursdays" },
  { icon: "⌛", label: "Duration", value: "4 Weeks" },
  { icon: "🎥", label: "Session Length", value: "60 Minutes, Live" },
];

export default function ProgramDetails() {
  return (
    <section className="bg-cream-50 text-plum-900 px-6 py-[88px]">
      <div className="max-w-[1080px] mx-auto">
        <div className="text-center mb-[52px]">
          <p className="m-0 mb-3 text-[13px] tracking-[3px] uppercase text-magenta-600 font-semibold">
            Program Details
          </p>
          <h2 className="m-0 font-display font-semibold text-[30px] sm:text-[36px]">
            The Details, At a Glance
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {details.map((d) => (
            <div
              key={d.label}
              className="flex flex-col gap-[10px] px-5 py-8 bg-white border border-[#EADFCF] rounded text-center"
            >
              <span className="text-[30px]">{d.icon}</span>
              <p className="m-0 mt-[6px] text-xs tracking-[1.5px] uppercase text-[#8A7590]">
                {d.label}
              </p>
              <p className="m-0 font-display font-semibold text-[19px]">
                {d.value}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10 mx-auto max-w-[640px] text-center text-[15px] leading-[1.7] text-[#6B5670] italic">
          Participants are encouraged to join each session from a quiet
          environment where they can focus, engage, and get the most out of
          the experience.
        </p>
      </div>
    </section>
  );
}

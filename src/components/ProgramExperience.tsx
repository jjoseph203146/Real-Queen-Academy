import type { ReactNode } from "react";

const rows: { number: string; text: ReactNode }[] = [
  {
    number: "01",
    text: (
      <>
        Live virtual coaching every <strong>Thursday</strong>, delivered in real time with the group.
      </>
    ),
  },
  {
    number: "02",
    text: (
      <>
        <strong>60-minute sessions</strong>, held consistently across the full 4-week program.
      </>
    ),
  },
  {
    number: "03",
    text: (
      <>
        A <strong>quiet, distraction-free environment</strong> is encouraged so you can focus, engage, and get the most from every session.
      </>
    ),
  },
  {
    number: "04",
    text: (
      <>
        <strong>Networking opportunities</strong> with other women entrepreneurs building and elevating their brands alongside you.
      </>
    ),
  },
  {
    number: "05",
    text: (
      <>
        <strong>Optional prerecorded weekly Bible studies</strong>, available virtually at your own convenience.
      </>
    ),
  },
  {
    number: "06",
    text: (
      <>
        <strong>One-on-one coaching available upon request</strong> for those who want a more personalized experience.
      </>
    ),
  },
];

export default function ProgramExperience() {
  return (
    <section className="bg-cream-50 text-plum-900 px-6 py-24">
      <div className="max-w-[900px] mx-auto">
        <div className="text-center mb-14">
          <p className="m-0 mb-3 text-[13px] tracking-[3px] uppercase text-magenta-600 font-semibold">
            Program Experience
          </p>
          <h2 className="m-0 font-display font-semibold text-[30px] sm:text-[36px]">
            What to Expect Each Week
          </h2>
        </div>

        <div className="flex flex-col">
          {rows.map((row, index) => (
            <div
              key={row.number}
              className={`flex gap-5 py-[22px]${
                index < rows.length - 1 ? " border-b border-[#E4D6C4]" : ""
              }`}
            >
              <span className="font-display font-semibold text-[15px] text-gold-500 w-7 flex-shrink-0">
                {row.number}
              </span>
              <p className="m-0 text-base leading-[1.6] text-[#3F2C46]">
                {row.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

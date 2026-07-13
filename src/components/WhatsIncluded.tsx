const items = [
  {
    icon: "✨",
    title: "Weekly Live Coaching Sessions",
    body: "Join a focused 60-minute coaching session every Thursday where you'll learn strategies to strengthen your online presence, clarify your brand message, create engaging content, and build credibility and trust.",
  },
  {
    icon: "🤝",
    title: "Community & Networking",
    body: "Connect with other women who are building, growing, and elevating their brands. Build relationships, exchange ideas, and grow together.",
  },
  {
    icon: "📖",
    title: "Optional Faith-Based Bible Study",
    body: "Access optional virtual, prerecorded weekly Bible studies to watch at your convenience — designed to provide encouragement, reflection, and spiritual growth throughout the program.",
  },
  {
    icon: "👑",
    title: "One-on-One Coaching Available",
    body: "Need additional support? Individual coaching sessions are available upon request for a more personalized experience.",
  },
];

export default function WhatsIncluded() {
  return (
    <section className="bg-plum-900 px-6 py-24">
      <div className="max-w-[1080px] mx-auto">
        <div className="text-center mb-14">
          <p className="m-0 mb-3 text-[13px] tracking-[3px] uppercase text-gold-500 font-medium">
            What's Included
          </p>
          <h2 className="m-0 font-display font-semibold text-[30px] sm:text-[36px] text-cream-50">
            Inside The Reel Queen Academy
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {items.map((item) => (
            <div
              key={item.title}
              className="p-9 bg-plum-800 border border-plum-600 rounded flex flex-col gap-[14px]"
            >
              <span className="text-[26px]">{item.icon}</span>
              <h3 className="m-0 font-display font-semibold text-[22px] text-cream-50">
                {item.title}
              </h3>
              <p className="m-0 text-[15px] leading-[1.7] text-[#C9B7CF]">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

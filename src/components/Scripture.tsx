export default function Scripture() {
  return (
    <section className="bg-plum-900 px-6 py-20 text-center border-t border-b border-plum-600">
      <div className="max-w-[720px] mx-auto flex flex-col items-center gap-5">
        <span className="text-[26px]">📖</span>
        <p className="m-0 font-display italic font-medium text-[20px] sm:text-[24px] leading-[1.6] text-cream-50">
          &ldquo;Let your light so shine before men, that they may see your
          good works, and glorify your Father which is in heaven.&rdquo;
        </p>
        <p className="m-0 text-[13px] tracking-[2px] uppercase text-gold-500">
          Matthew 5:16, KJV
        </p>
      </div>
    </section>
  );
}

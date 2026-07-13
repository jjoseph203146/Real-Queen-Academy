export default function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[#EADFCF] text-[#8A7590]">
      <span className="text-4xl">🖼️</span>
      <span className="text-sm tracking-wide">{label}</span>
    </div>
  );
}

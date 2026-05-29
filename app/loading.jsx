export default function Loading() {
  return (
    <div className="min-h-[60vh] grid place-items-center">
      <div className="flex flex-col items-center gap-6">
        <div className="relative h-16 w-16">
          <div className="absolute inset-0 rounded-full border-2 border-brand/20" />
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-brand animate-spin" />
        </div>
        <div className="text-xs uppercase tracking-[0.3em] text-white/40">Loading</div>
      </div>
    </div>
  );
}

export default function ProofStrip({ proof = [] }) {
  return (
    <section aria-label="Selected proof points" className="border-y border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-[#110f17]/50">
      <div className="max-w-[1400px] mx-auto px-6 py-6 md:px-12 lg:px-20">
        <div className="grid gap-4 sm:grid-cols-3">
          {proof.map((item) => (
            <div key={item} className="flex items-start gap-3 text-sm text-text-secondary">
              <span aria-hidden="true" className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#EC4899]" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

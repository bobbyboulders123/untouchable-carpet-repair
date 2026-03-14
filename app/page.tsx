import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f7f4ef] text-neutral-900">
      <header className="border-b border-black/10 bg-[#f7f4ef]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <Image
              src="/logo.png"
              alt="Untouchable Carpet Repair logo"
              width={56}
              height={56}
              className="h-14 w-14 rounded-full object-contain"
              priority
            />
            <div className="leading-tight">
              <p className="text-sm font-semibold tracking-[0.18em] text-[#5b1f26] uppercase">
                Untouchable Carpet Repair
              </p>
              <p className="text-sm text-neutral-600">
                Premium Carpet Repair & Restoration
              </p>
            </div>
          </div>

          <a
            href="tel:15555555555"
            className="rounded-full bg-[#1f1a17] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Call Now
          </a>
        </div>
      </header>

      <section className="mx-auto grid min-h-[calc(100vh-89px)] max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#5b1f26]">
            33 Years of Experience
          </p>

          <h1 className="max-w-2xl text-5xl font-bold tracking-tight text-[#1f1a17] sm:text-6xl">
            Classy, trusted carpet repair with an old-school standard of quality.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
            Professional carpet stretching, patching, stain repair, threshold
            replacement, and water-damaged carpet and pad restoration with a
            polished, premium local-service feel.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="tel:15555555555"
              className="rounded-full bg-[#5b1f26] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Call for Free Estimate
            </a>
            <a
              href="#contact"
              className="rounded-full border border-black/15 bg-white px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-100"
            >
              Request Estimate
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-[0_20px_80px_rgba(0,0,0,0.08)]">
            <Image
              src="/logo.png"
              alt="Untouchable Carpet Repair logo"
              width={420}
              height={420}
              className="h-auto w-full max-w-[360px] object-contain"
              priority
            />
          </div>
        </div>
      </section>
    </main>
  );
}
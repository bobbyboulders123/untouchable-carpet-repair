export default function HomePage() {
  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-24 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
          Untouchable Carpet Repair
        </p>

        <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl md:text-6xl">
          Classy, trusted carpet repair with an old-school standard of quality.
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg">
          Premium carpet repair, stretching, patching, and restoration with a
          polished local-service feel.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="tel:15555555555"
            className="rounded-full bg-neutral-950 px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Call Now
          </a>
          <a
            href="#contact"
            className="rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-100"
          >
            Request Estimate
          </a>
        </div>
      </section>
    </main>
  );
}
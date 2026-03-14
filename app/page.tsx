import Image from "next/image";

const services = [
  {
    title: "Carpet Stretching",
    description:
      "Remove ripples, waves, and loose areas to restore a cleaner, safer, more finished look.",
  },
  {
    title: "Patching & Repair",
    description:
      "Targeted repair work for damaged carpet sections, seams, burns, and problem spots.",
  },
  {
    title: "Stain & Pet Damage",
    description:
      "Professional solutions for tough damaged areas caused by stains, pets, or everyday wear.",
  },
  {
    title: "Threshold Replacement",
    description:
      "Clean transition and threshold updates that improve both appearance and function.",
  },
  {
    title: "Water-Damaged Carpet",
    description:
      "Carpet and pad replacement or restoration for water-damaged areas when repair is the right option.",
  },
  {
    title: "Free Estimates",
    description:
      "Straightforward guidance and honest recommendations backed by 33 years of experience.",
  },
];

const trustItems = [
  "33 Years of Experience",
  "Free Estimates",
  "Professional, Respectful Service",
  "Repair Before Replacement Mindset",
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f6f2ec] text-[#1f1a17]">
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f6f2ec]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Untouchable Carpet Repair logo"
              width={48}
              height={48}
              className="h-12 w-12 rounded-full object-contain"
              priority
            />
            <div className="leading-tight">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#5b1f26] sm:text-sm">
                Untouchable Carpet Repair
              </p>
              <p className="text-xs text-neutral-600 sm:text-sm">
                Premium Carpet Repair &amp; Restoration
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

      <section className="mx-auto grid max-w-6xl items-center gap-14 px-6 pb-18 pt-20 md:min-h-[calc(100vh-76px)] md:grid-cols-2 md:py-24">
        <div className="max-w-2xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-[#5b1f26]">
            33 Years of Experience
          </p>

          <h1 className="text-5xl font-bold tracking-tight text-[#1f1a17] sm:text-6xl md:text-7xl">
            Classy, trusted carpet repair with an old-school standard of quality.
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-neutral-700">
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
              href="#services"
              className="rounded-full border border-black/15 bg-white px-6 py-3 text-sm font-semibold text-[#1f1a17] transition hover:bg-neutral-100"
            >
              View Services
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-[0_20px_80px_rgba(0,0,0,0.08)]">
            <Image
              src="/logo.png"
              alt="Untouchable Carpet Repair brand mark"
              width={420}
              height={420}
              className="h-auto w-full max-w-[340px] object-contain"
              priority
            />
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#efe8de]">
        <div className="mx-auto grid max-w-6xl gap-4 px-6 py-6 md:grid-cols-4">
          {trustItems.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-black/8 bg-white/70 px-5 py-4 text-sm font-semibold text-[#1f1a17] shadow-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#5b1f26]">
            Services
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#1f1a17] sm:text-4xl">
            Skilled repair work with a premium, professional approach.
          </h2>
          <p className="mt-5 text-lg leading-8 text-neutral-700">
            We focus on quality repair and restoration work that helps extend
            the life of your carpet and improve the look of your home.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-[1.75rem] border border-black/10 bg-white p-7 shadow-[0_16px_50px_rgba(0,0,0,0.05)] transition hover:-translate-y-1"
            >
              <div className="mb-5 h-1.5 w-14 rounded-full bg-[#5b1f26]" />
              <h3 className="text-xl font-semibold tracking-tight text-[#1f1a17]">
                {service.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-neutral-700">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
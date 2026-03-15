"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const trustItems = [
  "33 Years of Experience",
  "Free Estimates",
  "Professional, Respectful Service",
  "Repair Before Replacement Mindset",
];

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
      "Professional solutions for damaged areas caused by stains, pets, or everyday wear.",
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
      "Straightforward guidance and honest recommendations backed by decades of experience.",
  },
];

const beforeAfterItems = [
  {
    id: "stretching",
    tab: "Project 1",
    title: "Wrinkled Carpet Restored",
    description:
      "Professional stretching that removes waves and brings the room back to a cleaner, tighter finish.",
    beforeSrc: "/before01.png",
    afterSrc: "/after01.png",
  },
  {
    id: "repair",
    tab: "Project 2",
    title: "Damaged Area Repaired",
    description:
      "Targeted patching and repair work that helps extend carpet life without full replacement.",
    beforeSrc: "/before02.png",
    afterSrc: "/after02.png",
  },
  {
    id: "water",
    tab: "Project 3",
    title: "Water-Damaged Section Recovered",
    description:
      "Selective restoration and replacement where needed for a more polished final result.",
    beforeSrc: "/before03.png",
    afterSrc: "/after03.png",
  },
];

const reasons = [
  {
    title: "Craftsmanship Over Shortcuts",
    text: "We focus on careful repair work that improves appearance, function, and longevity.",
  },
  {
    title: "Experienced, Local Service",
    text: "Decades of hands-on experience mean clearer recommendations and better finished results.",
  },
  {
    title: "Respect for the Home",
    text: "Professional, respectful service with a premium local feel from estimate to completion.",
  },
];

function BeforeAfterShowcase({
  items,
}: {
  items: {
    id: string;
    tab: string;
    title: string;
    description: string;
    beforeSrc: string;
    afterSrc: string;
  }[];
}) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");
  const [isTouchLike, setIsTouchLike] = useState(false);
  const [showAfter, setShowAfter] = useState(false);

  const activeItem = items.find((item) => item.id === activeId) ?? items[0];

  useEffect(() => {
    const media = window.matchMedia("(hover: none), (pointer: coarse)");
    const update = () => setIsTouchLike(media.matches);
    update();

    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", update);
      return () => media.removeEventListener("change", update);
    }

    media.addListener(update);
    return () => media.removeListener(update);
  }, []);

  useEffect(() => {
    setShowAfter(false);
  }, [activeId, isTouchLike]);

  return (
    <div data-reveal className="mt-12">
      <div className="flex flex-wrap justify-center gap-3">
        {items.map((item) => {
          const active = item.id === activeId;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveId(item.id)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-semibold transition duration-300",
                active
                  ? "border-[color:rgba(111,29,40,0.35)] bg-[var(--brand-burgundy)] text-white shadow-sm"
                  : "border-[color:rgba(199,163,90,0.25)] bg-white text-[var(--ink)] hover:-translate-y-0.5 hover:border-[color:rgba(199,163,90,0.42)]",
              )}
            >
              {item.tab}
            </button>
          );
        })}
      </div>

      <div className="card-tint mt-6 rounded-[2rem] border border-[color:rgba(199,163,90,0.22)] p-4 shadow-[0_18px_50px_rgba(0,0,0,0.05)] md:p-6">
        <button
          type="button"
          className="relative block w-full overflow-hidden rounded-[1.5rem] border border-[var(--line)] bg-white/70 text-left"
          onMouseEnter={() => {
            if (!isTouchLike) setShowAfter(true);
          }}
          onMouseLeave={() => {
            if (!isTouchLike) setShowAfter(false);
          }}
          onClick={() => {
            if (isTouchLike) setShowAfter((prev) => !prev);
          }}
          aria-label={showAfter ? "Show before image" : "Show after image"}
        >
          <div className="relative aspect-[16/10] md:aspect-[16/9]">
            <Image
              src={activeItem.beforeSrc}
              alt={`${activeItem.title} before`}
              fill
              className={cn(
                "object-cover transition-opacity duration-700",
                showAfter ? "opacity-0" : "opacity-100",
              )}
              priority
            />

            <Image
              src={activeItem.afterSrc}
              alt={`${activeItem.title} after`}
              fill
              className={cn(
                "object-cover transition-opacity duration-700",
                showAfter ? "opacity-100" : "opacity-0",
              )}
              priority
            />

            <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between p-4">
              <span
                className={cn(
                  "rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] backdrop-blur-sm transition",
                  showAfter
                    ? "bg-white/65 text-[var(--muted)]"
                    : "bg-[color:rgba(111,29,40,0.88)] text-white",
                )}
              >
                Before
              </span>

              <span
                className={cn(
                  "rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] backdrop-blur-sm transition",
                  showAfter
                    ? "bg-[color:rgba(199,163,90,0.9)] text-[var(--ink)]"
                    : "bg-white/65 text-[var(--muted)]",
                )}
              >
                After
              </span>
            </div>
          </div>
        </button>

        <div className="mt-6 max-w-3xl">
          <h3 className="text-2xl font-semibold tracking-tight text-[var(--ink)]">
            {activeItem.title}
          </h3>
          <p className="mt-3 text-base leading-7 text-[var(--muted)]">
            {activeItem.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const reduced =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;

    if (reduced) return;

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-in-view", "true");
            observer.unobserve(entry.target);
          }
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--ink)]">
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }
        }

        :root {
          --bg: #f5f1ea;
          --bg-soft: #efe6da;
          --surface: #ffffff;
          --surface-2: rgba(255, 255, 255, 0.72);
          --ink: #1f1715;
          --muted: #655c58;
          --line: rgba(31, 23, 21, 0.1);

          --brand-burgundy: #6f1d28;
          --brand-burgundy-2: #8b2735;
          --brand-gold: #c7a35a;
          --brand-gold-soft: #e9d5a3;

          --brand-gradient-soft: linear-gradient(
            135deg,
            rgba(111, 29, 40, 0.12),
            rgba(139, 39, 53, 0.08),
            rgba(199, 163, 90, 0.12)
          );

          --card-gold-tint: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.96),
            rgba(239, 230, 218, 0.78)
          );

          --card-stripe: linear-gradient(
            90deg,
            var(--brand-burgundy),
            var(--brand-burgundy-2),
            var(--brand-gold)
          );
        }

        [data-reveal] {
          opacity: 0;
          transform: translateY(20px) scale(0.985);
          transition:
            opacity 800ms cubic-bezier(0.22, 1, 0.36, 1),
            transform 800ms cubic-bezier(0.22, 1, 0.36, 1);
          will-change: opacity, transform;
        }

        [data-reveal][data-in-view="true"] {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        @media (prefers-reduced-motion: reduce) {
          [data-reveal] {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }

        .brand-gradient-soft {
          background: var(--brand-gradient-soft);
        }

        .gold-ring {
          box-shadow:
            0 0 0 1px rgba(199, 163, 90, 0.22),
            0 20px 80px rgba(0, 0, 0, 0.08);
        }

        .card-tint {
          background: var(--card-gold-tint);
        }

        .accent-stripe {
          background: var(--card-stripe);
        }
      `}</style>

      <header
        className={cn(
          "sticky top-0 z-50 border-b border-[var(--line)] relative",
          scrolled
            ? "bg-[color:rgba(245,241,234,0.72)] backdrop-blur-xl"
            : "bg-[color:rgba(245,241,234,0.92)] backdrop-blur-md",
        )}
      >
        <div className="pointer-events-none absolute inset-0 brand-gradient-soft opacity-40" />

        <div className="relative mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <span className="relative h-11 w-11 overflow-hidden rounded-full border border-black/10 bg-white shadow-sm">
              <Image
                src="/logo.png"
                alt="Untouchable Carpet Repair logo"
                fill
                className="object-contain p-1"
                priority
              />
            </span>

            <div className="leading-tight">
              <div className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--brand-burgundy)] sm:text-sm">
                Untouchable Carpet Repair
              </div>
              <div className="text-xs text-[var(--muted)] sm:text-sm">
                Premium Carpet Repair &amp; Restoration
              </div>
            </div>
          </div>

          <a
            href="tel:15555555555"
            className="rounded-full bg-[var(--ink)] px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:opacity-95"
          >
            Call Now
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-5 pb-18 pt-8 md:pb-24 md:pt-16">
        <div className="grid gap-8 md:grid-cols-[0.92fr_1.08fr] md:items-center md:gap-16">
          <div data-reveal className="md:contents">
            <div className="grid grid-cols-2 items-center gap-4 md:hidden">
              <div className="gold-ring rounded-[1.6rem] border border-[var(--line)] bg-white p-2">
                <div className="relative overflow-hidden rounded-[1.2rem] bg-white aspect-square">
                  <Image
                    src="/logo2.png"
                    alt="Untouchable Carpet Repair brand mark"
                    fill
                    priority
                    className="object-contain p-0"
                  />
                </div>
              </div>

              <h1 className="text-[1.95rem] font-bold leading-[0.94] tracking-tight text-[var(--ink)]">
                Classy, trusted carpet repair with an old-school standard of
                quality.
              </h1>
            </div>

            <div className="hidden md:flex md:justify-start">
              <div className="gold-ring w-full max-w-[520px] rounded-[2.25rem] border border-[var(--line)] bg-white p-4 md:p-6">
                <div className="relative overflow-hidden rounded-[1.8rem] bg-white aspect-square">
                  <Image
                    src="/logo2.png"
                    alt="Untouchable Carpet Repair brand mark"
                    fill
                    priority
                    className="object-contain p-3 md:p-5"
                  />
                </div>
              </div>
            </div>

            <div className="hidden max-w-2xl md:block md:justify-self-end">
              <h1 className="text-4xl font-bold leading-[0.95] tracking-tight text-[var(--ink)] sm:text-6xl md:text-7xl">
                Classy, trusted carpet repair with an old-school standard of
                quality.
              </h1>
            </div>
          </div>
        </div>

        <div data-reveal className="mt-8 max-w-2xl md:mt-10">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-[var(--brand-burgundy)]">
            33 Years of Experience
          </p>

          <p className="max-w-xl text-lg leading-8 text-[var(--muted)]">
            Professional carpet stretching, patching, stain repair, threshold
            replacement, and water-damaged carpet and pad restoration with a
            polished, premium local-service feel.
          </p>

          <div className="mt-8 flex flex-row flex-wrap gap-3">
            <a
              href="tel:15555555555"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-[var(--brand-burgundy)] px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[var(--brand-burgundy-2)]"
            >
              Call for Free Estimate
            </a>

            <a
              href="#services"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-[var(--ink)] transition duration-300 hover:-translate-y-0.5 hover:border-[color:rgba(199,163,90,0.45)] hover:bg-[color:rgba(255,255,255,0.9)]"
            >
              View Services
            </a>
          </div>
        </div>
      </section>

      <section
        data-reveal
        className="border-y border-[var(--line)] bg-[var(--bg-soft)]"
      >
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-5 py-6 md:grid-cols-4 md:gap-4">
          {trustItems.map((item, index) => (
            <div
              key={item}
              data-reveal
              className="card-tint rounded-2xl border border-[color:rgba(199,163,90,0.22)] px-4 py-4 text-sm font-semibold text-[var(--ink)] shadow-sm backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-[color:rgba(199,163,90,0.38)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.06)]"
              style={{ transitionDelay: `${index * 45}ms` }}
            >
              <div className="accent-stripe mb-3 h-[3px] w-full rounded-full" />
              <div className="leading-5">{item}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <div data-reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--brand-burgundy)]">
            Services
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--ink)] sm:text-4xl">
            Skilled repair work with a premium, professional approach.
          </h2>

          <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
            We focus on quality repair and restoration work that helps extend
            the life of your carpet and improve the look of your home.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.title}
              data-reveal
              className="group card-tint rounded-[1.75rem] border border-[color:rgba(199,163,90,0.22)] p-7 shadow-[0_16px_50px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[color:rgba(199,163,90,0.38)] hover:shadow-[0_24px_70px_rgba(0,0,0,0.08)]"
              style={{
                transitionDelay: `${index * 55}ms`,
              }}
            >
              <div className="accent-stripe mb-5 h-[3px] w-full rounded-full" />

              <h3 className="text-xl font-semibold tracking-tight text-[var(--ink)]">
                {service.title}
              </h3>

              <p className="mt-4 text-base leading-7 text-[var(--muted)]">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-[var(--line)] bg-[var(--bg-soft)]">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
          <div data-reveal className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--brand-burgundy)]">
              Before &amp; After
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--ink)] sm:text-4xl">
              Real improvement you can see.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
              Carpet repair is a visual service. The right repair work can
              transform loose, damaged, or worn areas into a cleaner and more
              finished-looking space.
            </p>
          </div>

          <BeforeAfterShowcase items={beforeAfterItems} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <div className="grid gap-12 md:grid-cols-[0.95fr_1.05fr] md:items-start">
          <div data-reveal className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--brand-burgundy)]">
              Why Choose Us
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--ink)] sm:text-4xl">
              A premium, repair-first approach built on experience.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
              Our focus is simple: quality work, honest recommendations, and a
              finished result that looks more polished and lasts longer.
            </p>
          </div>

          <div className="grid gap-5">
            {reasons.map((reason, index) => (
              <article
                key={reason.title}
                data-reveal
                className="card-tint rounded-[1.75rem] border border-[color:rgba(199,163,90,0.22)] p-6 shadow-[0_16px_40px_rgba(0,0,0,0.04)] transition duration-300 hover:-translate-y-1 hover:border-[color:rgba(199,163,90,0.38)]"
                style={{ transitionDelay: `${index * 55}ms` }}
              >
                <div className="accent-stripe mb-4 h-[3px] w-full rounded-full" />
                <h3 className="text-xl font-semibold tracking-tight text-[var(--ink)]">
                  {reason.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-[var(--muted)]">
                  {reason.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <div
          data-reveal
          className="card-tint rounded-[2rem] border border-[color:rgba(199,163,90,0.22)] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.05)] md:p-10"
        >
          <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-center">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--brand-burgundy)]">
                Free Estimate
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--ink)] sm:text-4xl">
                Ready to restore the look of your carpet?
              </h2>
              <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
                Reach out for a free estimate and honest guidance on stretching,
                patching, repair, and restoration options.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
              <a
                href="tel:15555555555"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-[var(--brand-burgundy)] px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[var(--brand-burgundy-2)]"
              >
                Call Now
              </a>

              <a
                href="#"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-[var(--ink)] transition duration-300 hover:-translate-y-0.5 hover:border-[color:rgba(199,163,90,0.45)]"
              >
                Request Estimate
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[var(--line)] bg-[var(--bg-soft)]">
        <div className="mx-auto max-w-6xl px-5 py-10 text-sm text-[var(--muted)]">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>© {new Date().getFullYear()} Untouchable Carpet Repair.</div>
            <div>Premium Carpet Repair &amp; Restoration</div>
          </div>
        </div>
      </footer>
    </main>
  );
}

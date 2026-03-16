"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const NAV_ITEMS = [
  { href: "#services", label: "Services" },
  { href: "#before-after", label: "Before & After" },
  { href: "#why-choose-us", label: "Why Choose Us" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
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
    id: "stain-removal",
    tab: "Project 1",
    title: "Stain Removal",
    description:
      "Targeted stain removal and restoration work that helps improve the appearance of the carpet without full replacement.",
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
    id: "wrinkled-carpet",
    tab: "Project 3",
    title: "Wrinkled Carpet Restored",
    description:
      "Professional stretching that removes waves and brings the room back to a cleaner, tighter finish.",
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

const faqItems = [
  {
    question: "Do you offer free estimates?",
    answer:
      "Yes. You can call to schedule a free estimate and get honest guidance on the best repair option for your carpet.",
  },
  {
    question: "Can carpet be repaired instead of replaced?",
    answer:
      "In many cases, yes. Stretching, patching, and targeted repair work can improve appearance and extend the life of your carpet without full replacement.",
  },
  {
    question: "What types of carpet damage do you repair?",
    answer:
      "We handle issues like ripples, loose carpet, damaged sections, seams, stains, pet-related damage, threshold concerns, and some water-damaged areas.",
  },
  {
    question: "Do you serve Denver and surrounding areas?",
    answer:
      "Denver, Colorado is our primary service area. Call to confirm your location and availability for an estimate.",
  },
  {
    question: "What are your business hours?",
    answer:
      "We are open Monday through Saturday from 9:00am to 5:00pm, and closed on Sunday.",
  },
];

function BBBCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "rounded-[1.7rem] border border-[color:rgba(199,163,90,0.22)] bg-white/60 p-5 shadow-[0_16px_40px_rgba(0,0,0,0.04)] backdrop-blur-md",
        className,
      )}
    >
      <div className="accent-stripe mb-4 h-[3px] w-full rounded-full" />
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-burgundy)]">
        BBB Accredited
      </p>
      <p className="mt-2 text-base font-medium text-[var(--ink)]">
        A+ Rated Business
      </p>
      <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
        BBB Accredited since 2021. Trusted residential carpet repair in Denver.
      </p>

      <a
        href="https://www.bbb.org/us/co/denver/profile/carpet-and-rug-repair/untouchable-carpet-repair-1296-1000108992"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex min-h-10 items-center justify-center rounded-full border border-[color:rgba(199,163,90,0.28)] bg-white px-4 py-2 text-sm font-semibold text-[var(--ink)] transition duration-300 hover:-translate-y-0.5 hover:border-[color:rgba(199,163,90,0.42)] hover:text-[var(--brand-burgundy)]"
      >
        View BBB Profile
      </a>

      <p className="mt-3 text-xs leading-5 text-[var(--muted)]">
        Replace this panel later with the official BBB Dynamic Seal embed.
      </p>
    </div>
  );
}

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

      <div className="card-tint mt-6 rounded-[2rem] border border-[color:rgba(199,163,90,0.22)] p-4 shadow-[0_18px_50px_rgba(0,0,0,0.05)] backdrop-blur-md md:p-6">
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

        <p className="mt-3 text-xs font-medium uppercase tracking-[0.16em] text-[var(--muted)] md:hidden">
          Tap image to switch between before and after
        </p>

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

function FAQSection({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section
      id="faq"
      className="border-t border-[var(--line)] bg-[color:rgba(239,230,218,0.72)] backdrop-blur-[2px]"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <div data-reveal className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--brand-burgundy)]">
              FAQ
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--ink)] sm:text-4xl">
              Helpful answers before you call.
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-8 text-[var(--muted)]">
              A few common questions about estimates, repair options, service
              area, and scheduling.
            </p>
          </div>

          <div className="grid gap-4">
            {items.map((item, index) => {
              const open = index === openIndex;

              return (
                <article
                  key={item.question}
                  data-reveal
                  className="card-tint rounded-[1.5rem] border border-[color:rgba(199,163,90,0.22)] p-5 shadow-[0_14px_36px_rgba(0,0,0,0.04)] backdrop-blur-md"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div className="accent-stripe mb-4 h-[3px] w-full rounded-full" />

                  <button
                    type="button"
                    onClick={() =>
                      setOpenIndex((prev) => (prev === index ? -1 : index))
                    }
                    className="flex w-full items-center justify-between gap-4 text-left"
                    aria-expanded={open}
                  >
                    <span className="text-lg font-semibold tracking-tight text-[var(--ink)]">
                      {item.question}
                    </span>
                    <span
                      className={cn(
                        "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[color:rgba(199,163,90,0.28)] bg-white text-[var(--brand-burgundy)] transition duration-300",
                        open ? "rotate-45" : "rotate-0",
                      )}
                    >
                      +
                    </span>
                  </button>

                  <div
                    className={cn(
                      "grid transition-all duration-300 ease-out",
                      open
                        ? "mt-4 grid-rows-[1fr] opacity-100"
                        : "mt-0 grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="text-base leading-7 text-[var(--muted)]">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
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

  useEffect(() => {
    const closeMenu = () => setMobileMenuOpen(false);
    window.addEventListener("resize", closeMenu);
    return () => window.removeEventListener("resize", closeMenu);
  }, []);

  const handleNavClick = () => setMobileMenuOpen(false);

  return (
    <main className="relative isolate min-h-screen overflow-x-hidden bg-transparent text-[var(--ink)]">
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        body {
          background: #f5f1ea;
        }

        section[id] {
          scroll-margin-top: 120px;
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
            rgba(111, 29, 40, 0.1),
            rgba(139, 39, 53, 0.06),
            rgba(199, 163, 90, 0.08)
          );

          --card-gold-tint: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.86),
            rgba(239, 230, 218, 0.7)
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

      <div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-0 h-[100svh] w-full overflow-hidden [transform:translateZ(0)]"
      >
        <Image
          src="/room-bg.png"
          alt=""
          fill
          priority
          className="object-cover object-center scale-[1.08] brightness-[0.84] contrast-[1.02] saturate-[0.9]"
        />
        <div className="absolute inset-0 bg-[rgba(245,241,234,0.52)]" />
      </div>

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[90] border-b border-white/40 shadow-[0_10px_28px_rgba(31,23,21,0.05)] backdrop-blur-2xl",
          scrolled
            ? "bg-[rgba(255,255,255,0.42)]"
            : "bg-[rgba(255,255,255,0.28)]",
        )}
      >
        <div className="pointer-events-none absolute inset-0 brand-gradient-soft opacity-40" />

        <div className="relative mx-auto max-w-6xl px-5 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="relative h-14 w-14 shrink-0">
                <Image
                  src="/logo.png"
                  alt="Untouchable Carpet Repair logo"
                  fill
                  className="object-contain"
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

            <div className="hidden items-center gap-6 lg:flex">
              <nav className="flex items-center gap-6">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-sm font-medium text-[var(--muted)] transition duration-300 hover:text-[var(--brand-burgundy)]"
                  >
                    {item.label}
                  </a>
                ))}

                <Link
                  href="/legal"
                  className="text-sm font-medium text-[var(--muted)] transition duration-300 hover:text-[var(--brand-burgundy)]"
                >
                  Legal
                </Link>
              </nav>

              <a
                href="tel:17203271395"
                className="rounded-full bg-[var(--ink)] px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:opacity-95"
              >
                Call Now
              </a>
            </div>

            <div className="flex items-center gap-3 lg:hidden">
              <a
                href="tel:17203271395"
                className="rounded-full bg-[var(--ink)] px-4 py-2.5 text-sm font-semibold text-white transition duration-300 hover:opacity-95"
              >
                Call
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="rounded-full border border-white/60 bg-white/60 px-4 py-2.5 text-sm font-semibold text-[var(--ink)] shadow-sm backdrop-blur-md transition duration-300 hover:border-white"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                Menu
              </button>
            </div>
          </div>

          <div
            className={cn(
              "overflow-hidden transition-all duration-300 lg:hidden",
              mobileMenuOpen
                ? "max-h-96 pt-4 opacity-100"
                : "max-h-0 pt-0 opacity-0",
            )}
          >
            <div className="card-tint rounded-[1.5rem] border border-white/50 p-4 shadow-[0_14px_36px_rgba(0,0,0,0.04)] backdrop-blur-xl">
              <div className="accent-stripe mb-4 h-[3px] w-full rounded-full" />
              <nav className="grid gap-2">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={handleNavClick}
                    className="rounded-xl px-3 py-3 text-sm font-medium text-[var(--ink)] transition duration-300 hover:bg-white/70 hover:text-[var(--brand-burgundy)]"
                  >
                    {item.label}
                  </a>
                ))}

                <Link
                  href="/legal"
                  onClick={handleNavClick}
                  className="rounded-xl px-3 py-3 text-sm font-medium text-[var(--ink)] transition duration-300 hover:bg-white/70 hover:text-[var(--brand-burgundy)]"
                >
                  Legal
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <div className="relative z-10 pt-[94px] md:pt-[102px]">
        <section className="mx-auto max-w-6xl px-5 pb-20 pt-8 md:pb-24 md:pt-14">
          <div
            data-reveal
            className="card-tint rounded-[2.3rem] border border-white/55 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.08)] backdrop-blur-xl md:p-8 lg:p-10"
          >
            <div className="grid gap-8 lg:grid-cols-[430px_minmax(0,1fr)] lg:gap-x-10 lg:gap-y-8">
              <div className="order-1 lg:col-start-1 lg:row-start-1">
                <div className="gold-ring mx-auto w-full max-w-[330px] rounded-[2rem] border border-[var(--line)] bg-white/72 p-4 backdrop-blur-md lg:max-w-[430px] lg:p-6">
                  <div className="relative aspect-square overflow-hidden rounded-[1.6rem] bg-white">
                    <Image
                      src="/logo2.png"
                      alt="Untouchable Carpet Repair brand mark"
                      fill
                      priority
                      className="object-contain p-3 lg:p-6"
                    />
                  </div>
                </div>
              </div>

              <div className="order-2 lg:col-start-2 lg:row-start-1">
                <h1 className="max-w-none text-[2.8rem] font-bold leading-[0.94] tracking-tight text-[var(--ink)] sm:text-6xl lg:text-6xl">
                  Trusted carpet repair with an old-school standard of quality.
                </h1>
              </div>

              <div className="order-3 lg:col-start-2 lg:row-start-2">
                <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-start lg:gap-x-8">
                  <div className="max-w-xl">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[var(--brand-burgundy)]">
                      33 Years of Experience
                    </p>

                    <p className="text-lg leading-8 text-[var(--muted)]">
                      Professional carpet stretching, patching, stain repair,
                      threshold replacement, and water-damaged carpet and pad
                      restoration with a polished, premium local-service feel.
                    </p>
                  </div>

                  <div className="hidden lg:block lg:justify-self-end">
                    <BBBCard className="w-[280px]" />
                  </div>
                </div>
              </div>

              <div className="order-4 lg:col-start-1 lg:row-start-2">
                <div className="flex flex-row flex-wrap gap-3 lg:pt-2">
                  <a
                    href="tel:17203271395"
                    className="inline-flex min-h-11 items-center justify-center rounded-full bg-[var(--brand-burgundy)] px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[var(--brand-burgundy-2)]"
                  >
                    Call for Free Estimate
                  </a>

                  <a
                    href="#services"
                    className="inline-flex min-h-11 items-center justify-center rounded-full border border-black/10 bg-white/85 px-5 py-3 text-sm font-semibold text-[var(--ink)] backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-[color:rgba(199,163,90,0.45)] hover:bg-white"
                  >
                    View Services
                  </a>
                </div>
              </div>

              <div className="order-5 lg:hidden">
                <BBBCard />
              </div>
            </div>
          </div>
        </section>

        <section
          id="services"
          className="mx-auto max-w-6xl px-5 py-20 md:py-24"
        >
          <div
            data-reveal
            className="card-tint max-w-3xl rounded-[2rem] border border-white/50 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.05)] backdrop-blur-xl md:p-8"
          >
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
                className="group card-tint rounded-[1.75rem] border border-[color:rgba(199,163,90,0.22)] p-7 shadow-[0_16px_50px_rgba(0,0,0,0.05)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-[color:rgba(199,163,90,0.38)] hover:shadow-[0_24px_70px_rgba(0,0,0,0.08)]"
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

        <section
          id="before-after"
          className="border-t border-[var(--line)] bg-[color:rgba(239,230,218,0.72)] backdrop-blur-[2px]"
        >
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

        <section
          id="why-choose-us"
          className="mx-auto max-w-6xl px-5 py-20 md:py-24"
        >
          <div className="grid gap-12 md:grid-cols-[0.95fr_1.05fr] md:items-start">
            <div
              data-reveal
              className="card-tint max-w-3xl rounded-[2rem] border border-white/50 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.05)] backdrop-blur-xl md:p-8"
            >
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
                  className="card-tint rounded-[1.75rem] border border-[color:rgba(199,163,90,0.22)] p-6 shadow-[0_16px_40px_rgba(0,0,0,0.04)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-[color:rgba(199,163,90,0.38)]"
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
            className="card-tint rounded-[2rem] border border-white/50 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.05)] backdrop-blur-xl md:p-10"
          >
            <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-start">
              <div className="max-w-xl">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--brand-burgundy)]">
                  Free Estimate
                </p>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--ink)] sm:text-4xl">
                  Ready to restore the look of your carpet?
                </h2>

                <p className="mt-5 max-w-lg text-lg leading-8 text-[var(--muted)]">
                  For estimates, please contact me at your convenience. I look
                  forward to meeting you soon and helping you decide on the best
                  repair option for your home.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.25rem] border border-[color:rgba(199,163,90,0.22)] bg-white/72 p-5 backdrop-blur-md">
                    <div className="accent-stripe mb-4 h-[3px] w-full rounded-full" />
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-burgundy)]">
                      Service Area
                    </p>
                    <p className="mt-2 text-base font-medium text-[var(--ink)]">
                      Denver, Colorado
                    </p>
                  </div>

                  <div className="rounded-[1.25rem] border border-[color:rgba(199,163,90,0.22)] bg-white/72 p-5 backdrop-blur-md">
                    <div className="accent-stripe mb-4 h-[3px] w-full rounded-full" />
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-burgundy)]">
                      Contact
                    </p>
                    <p className="mt-2 text-base font-medium text-[var(--ink)]">
                      Ricky Brown
                    </p>
                    <p className="mt-1 text-sm text-[var(--muted)]">
                      Untouchable Carpet Repair
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-5">
                <div className="rounded-[1.5rem] border border-[color:rgba(199,163,90,0.22)] bg-white/72 p-6 shadow-sm backdrop-blur-md">
                  <div className="accent-stripe mb-4 h-[3px] w-full rounded-full" />
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-burgundy)]">
                    Phone
                  </p>
                  <a
                    href="tel:17203271395"
                    className="mt-2 block text-2xl font-semibold tracking-tight text-[var(--ink)] transition hover:text-[var(--brand-burgundy)]"
                  >
                    (720) 327-1395
                  </a>
                  <p className="mt-2 text-sm text-[var(--muted)]">
                    Call for a free estimate
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-[color:rgba(199,163,90,0.22)] bg-white/72 p-6 shadow-sm backdrop-blur-md">
                  <div className="accent-stripe mb-4 h-[3px] w-full rounded-full" />
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-burgundy)]">
                    Business Hours
                  </p>
                  <div className="mt-3 space-y-2 text-sm text-[var(--muted)]">
                    <div className="flex items-center justify-between gap-4">
                      <span>Monday – Saturday</span>
                      <span className="font-medium text-[var(--ink)]">
                        9:00am – 5:00pm
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <span>Sunday</span>
                      <span className="font-medium text-[var(--ink)]">
                        Closed
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-start md:justify-end">
                  <a
                    href="tel:17203271395"
                    className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--brand-burgundy)] px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[var(--brand-burgundy-2)]"
                  >
                    Schedule a Free Estimate
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FAQSection items={faqItems} />

        <footer className="relative border-t border-[var(--line)] bg-[color:rgba(239,230,218,0.72)] backdrop-blur-[2px]">
          <div className="pointer-events-none absolute inset-0 brand-gradient-soft opacity-30" />

          <div className="relative mx-auto max-w-6xl px-5 py-10">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-4">
                <span className="relative h-16 w-16 shrink-0">
                  <Image
                    src="/logo.png"
                    alt="Untouchable Carpet Repair logo"
                    fill
                    className="object-contain"
                  />
                </span>

                <div className="leading-tight">
                  <div className="text-sm font-bold uppercase tracking-[0.22em] text-[var(--brand-burgundy)]">
                    Untouchable Carpet Repair
                  </div>
                  <div className="text-sm text-[var(--muted)]">
                    Premium Carpet Repair &amp; Restoration
                  </div>
                </div>
              </div>

              <div className="grid gap-3 text-sm text-[var(--muted)] md:text-right">
                <div>Denver, Colorado</div>
                <a
                  href="tel:17203271395"
                  className="font-medium text-[var(--ink)] transition hover:text-[var(--brand-burgundy)]"
                >
                  (720) 327-1395
                </a>
                <div>Monday – Saturday: 9:00am – 5:00pm</div>
              </div>
            </div>

            <div className="mt-8 border-t border-[var(--line)] pt-6 text-sm text-[var(--muted)]">
              © {new Date().getFullYear()} Untouchable Carpet Repair. All rights
              reserved.
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}

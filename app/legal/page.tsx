"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const LEGAL_SECTIONS = [
  { id: "terms", label: "Terms of Service" },
  { id: "privacy", label: "Privacy Policy" },
  { id: "disclaimer", label: "Disclaimer" },
];

export default function LegalPage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("terms");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const closeMenu = () => setMobileMenuOpen(false);
    window.addEventListener("resize", closeMenu);
    return () => window.removeEventListener("resize", closeMenu);
  }, []);

  return (
    <main className="relative isolate min-h-screen overflow-x-hidden bg-transparent text-[var(--ink)]">
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        body {
          background: #f5f1ea;
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

        .brand-gradient-soft {
          background: var(--brand-gradient-soft);
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
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
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
            <Link href="/" className="flex items-center gap-4">
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
            </Link>

            <div className="hidden items-center gap-6 lg:flex">
              <nav className="flex items-center gap-6">
                <Link
                  href="/"
                  className="text-sm font-medium text-[var(--muted)] transition duration-300 hover:text-[var(--brand-burgundy)]"
                >
                  Home
                </Link>
                <span className="text-sm font-semibold text-[var(--brand-burgundy)]">
                  Legal
                </span>
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
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-xl px-3 py-3 text-sm font-medium text-[var(--ink)] transition duration-300 hover:bg-white/70 hover:text-[var(--brand-burgundy)]"
                >
                  Home
                </Link>
                <Link
                  href="/legal"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-xl bg-white/60 px-3 py-3 text-sm font-semibold text-[var(--brand-burgundy)]"
                >
                  Legal
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <div className="relative z-10 pt-[94px] md:pt-[102px]">
        <section className="mx-auto max-w-6xl px-5 pb-14 pt-8 md:pb-16 md:pt-14">
          <div className="card-tint rounded-[2.3rem] border border-white/55 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.08)] backdrop-blur-xl md:p-8 lg:p-10">
            <div className="accent-stripe mb-6 h-[3px] w-full rounded-full" />

            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--brand-burgundy)]">
                Legal
              </p>
              <h1 className="mt-4 text-4xl font-bold leading-[0.95] tracking-tight text-[var(--ink)] sm:text-5xl lg:text-6xl">
                Terms, privacy, and important site policies.
              </h1>
              <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
                This page outlines the basic terms for using this website,
                general privacy handling, and important disclaimers for
                Untouchable Carpet Repair.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {LEGAL_SECTIONS.map((section) => {
                const active = activeSection === section.id;

                return (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={() => setActiveSection(section.id)}
                    className={cn(
                      "rounded-full border px-4 py-2 text-sm font-semibold transition duration-300",
                      active
                        ? "border-[color:rgba(111,29,40,0.35)] bg-[var(--brand-burgundy)] text-white shadow-sm"
                        : "border-[color:rgba(199,163,90,0.25)] bg-white text-[var(--ink)] hover:-translate-y-0.5 hover:border-[color:rgba(199,163,90,0.42)]",
                    )}
                  >
                    {section.label}
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 pb-20">
          <div className="grid gap-6">
            <article
              id="terms"
              className="card-tint rounded-[2rem] border border-white/50 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.05)] backdrop-blur-xl md:p-8"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--brand-burgundy)]">
                Terms of Service
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--ink)]">
                Website use and service information
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-[var(--muted)]">
                <p>
                  By using this website, you agree to use it for lawful purposes
                  only and to not misuse, disrupt, or attempt to interfere with
                  the website or its content.
                </p>
                <p>
                  Information on this site is provided for general informational
                  purposes about Untouchable Carpet Repair’s services, service
                  area, and contact methods. Content may be updated, changed, or
                  removed at any time without notice.
                </p>
                <p>
                  Estimates, scheduling, repair recommendations, pricing, and
                  service availability may vary based on the actual condition of
                  the carpet, location, timing, and in-person evaluation.
                  Content on this website does not guarantee a specific repair
                  outcome or service appointment.
                </p>
                <p>
                  All text, branding, logos, imagery, and design elements on
                  this website are the property of Untouchable Carpet Repair or
                  are used with permission and may not be copied or reused
                  without permission.
                </p>
              </div>
            </article>

            <article
              id="privacy"
              className="card-tint rounded-[2rem] border border-white/50 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.05)] backdrop-blur-xl md:p-8"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--brand-burgundy)]">
                Privacy Policy
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--ink)]">
                Basic privacy practices
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-[var(--muted)]">
                <p>
                  If you contact Untouchable Carpet Repair by phone or through
                  any future form on this website, basic information such as
                  your name, phone number, address, or service request details
                  may be collected in order to respond to you, provide an
                  estimate, or schedule service.
                </p>
                <p>
                  Personal information is used only for business communication,
                  customer support, estimating, scheduling, and service
                  delivery. Information is not sold to third parties.
                </p>
                <p>
                  This site may use standard website hosting, analytics, or
                  security tools that collect limited technical information such
                  as browser type, device type, or general usage data. That
                  information is used to improve website performance and
                  reliability.
                </p>
                <p>
                  Because no internet transmission or storage method is fully
                  guaranteed to be secure, users should avoid sending sensitive
                  personal or financial information through unsecured channels.
                </p>
              </div>
            </article>

            <article
              id="disclaimer"
              className="card-tint rounded-[2rem] border border-white/50 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.05)] backdrop-blur-xl md:p-8"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--brand-burgundy)]">
                Disclaimer
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--ink)]">
                General site and service disclaimer
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-[var(--muted)]">
                <p>
                  This website is provided on an “as is” and “as available”
                  basis. While Untouchable Carpet Repair aims to keep
                  information accurate and current, no guarantee is made that
                  all website content is complete, current, or error-free at all
                  times.
                </p>
                <p>
                  Repair results depend on many factors including carpet age,
                  wear, material, prior damage, installation condition, and the
                  nature of the issue being repaired. Individual results may
                  vary.
                </p>
                <p>
                  Links to third-party websites, including business profile or
                  accreditation pages, are provided for convenience only.
                  Untouchable Carpet Repair is not responsible for the content,
                  policies, or availability of third-party sites.
                </p>
                <p>
                  Nothing on this website should be interpreted as a binding
                  contractual promise unless confirmed directly through a service
                  agreement or direct business communication.
                </p>
              </div>
            </article>
          </div>
        </section>

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
                <Link
                  href="/legal"
                  className="font-medium text-[var(--ink)] transition hover:text-[var(--brand-burgundy)]"
                >
                  Legal
                </Link>
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
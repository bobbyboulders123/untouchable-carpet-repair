"use client";

import Image from "next/image";
import { useState } from "react";

function ServiceAreaMapPlaceholder() {
  return (
    <div className="relative overflow-hidden rounded-[1.5rem] border border-[var(--line)] bg-white/72">
      <div className="absolute inset-0 brand-gradient-soft opacity-70" />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-35"
        style={{
          backgroundImage:
            "linear-gradient(rgba(31,23,21,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(31,23,21,0.08) 1px, transparent 1px)",
          backgroundSize: "38px 38px",
        }}
      />

      <div className="relative aspect-[16/9] min-h-[280px] p-6 md:p-8">
        <div className="absolute left-[18%] top-[22%] h-24 w-24 rounded-full border border-[color:rgba(111,29,40,0.18)] bg-[color:rgba(111,29,40,0.08)] sm:h-32 sm:w-32" />
        <div className="absolute right-[14%] top-[18%] h-28 w-28 rounded-full border border-[color:rgba(199,163,90,0.28)] bg-[color:rgba(199,163,90,0.16)] sm:h-40 sm:w-40" />
        <div className="absolute bottom-[16%] left-[38%] h-32 w-32 rounded-full border border-[color:rgba(111,29,40,0.14)] bg-white/34 sm:h-44 sm:w-44" />

        <div className="relative flex h-full flex-col justify-between">
          <div className="max-w-sm rounded-[1.25rem] border border-white/70 bg-white/82 p-5 shadow-sm backdrop-blur-md">
            <div className="accent-stripe mb-4 h-[3px] w-full rounded-full" />
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-burgundy)]">
              Future Map Panel
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--ink)]">
              Denver Metro Service Area
            </h3>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
              A static service-area map will be added here after Google Maps
              API setup is approved.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex rounded-full bg-[var(--brand-burgundy)] px-4 py-2 text-sm font-semibold text-white shadow-sm">
              Denver, CO
            </span>
            <span className="inline-flex rounded-full border border-[color:rgba(199,163,90,0.28)] bg-white/82 px-4 py-2 text-sm font-semibold text-[var(--ink)] shadow-sm backdrop-blur-md">
              Nearby areas by availability
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServiceAreaMap() {
  const [hasMapError, setHasMapError] = useState(false);

  return (
    <div
      data-reveal
      className="card-tint rounded-[2rem] border border-[color:rgba(199,163,90,0.22)] p-4 shadow-[0_18px_50px_rgba(0,0,0,0.05)] backdrop-blur-md md:p-6"
    >
      {hasMapError ? (
        <ServiceAreaMapPlaceholder />
      ) : (
        <div className="relative aspect-[16/9] min-h-[280px] overflow-hidden rounded-[1.5rem] border border-[var(--line)] bg-white/72">
          <Image
            src="/api/service-area-map"
            alt="Static map showing Untouchable Carpet Repair service area around Denver, Colorado"
            fill
            sizes="(min-width: 1024px) 620px, calc(100vw - 64px)"
            className="object-cover"
            onError={() => setHasMapError(true)}
          />
        </div>
      )}
    </div>
  );
}

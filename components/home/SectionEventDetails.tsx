'use client';

import { useEffect, useState } from 'react';

const eventDate = new Date('2026-11-28T11:30:00+07:00');

const eventDetails = {
  venue: 'KFC Arifin Ahmad',
  date: 'Sabtu, 28 November 2026',
  time: '11.30 WIB',
  address:
    'Jl. Arifin Ahmad No.kel, Sidomulyo Tim., Marpoyan Damai, Kota Pekanbaru, Riau 28125',
  mapsUrl: 'https://maps.app.goo.gl/DfCk3nw7Yb9qDpU19',
};

function getCountdown() {
  const difference = eventDate.getTime() - Date.now();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

export default function SectionEventDetails() {
  const [countdown, setCountdown] = useState(getCountdown);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCountdown(getCountdown());
    }, 1000);

    return () => window.clearInterval(interval);
  }, []);

  const countdownItems = [
    { label: 'DAYS', value: countdown.days },
    { label: 'HOURS', value: String(countdown.hours).padStart(2, '0') },
    { label: 'MINUTES', value: String(countdown.minutes).padStart(2, '0') },
    { label: 'SECONDS', value: String(countdown.seconds).padStart(2, '0') },
  ];

  return (
    <section
      id="event-details"
      className="relative isolate flex min-h-[100svh] w-full flex-col justify-center overflow-hidden bg-[#07182B] px-4 py-8 text-white sm:px-8 sm:py-10 lg:px-16 lg:py-6"
    >
      {/* Racing background */}
      <div
        className="absolute inset-0 -z-10 opacity-15"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, transparent 0px, transparent 35px, #FFFFFF 36px, transparent 37px)',
        }}
      />

      <div className="absolute top-10 -right-20 -z-10 h-64 w-64 rounded-full bg-[#FF3939]/20 blur-[90px]" />
      <div className="absolute bottom-0 -left-20 -z-10 h-64 w-64 rounded-full bg-[#164D78]/30 blur-[90px]" />

      {/* Racing stripe */}
      <div className="absolute top-0 left-0 h-1 w-full bg-white/10">
        <div className="h-full w-1/3 bg-[#FF3939]" />
      </div>

      <div className="mx-auto w-full max-w-6xl">
        {/* Section heading */}
        <div className="mb-5 text-center sm:mb-6">
          <div className="mb-4 flex items-center justify-center gap-3 sm:mb-5">
            <span className="h-[2px] w-8 bg-[#FF3939] sm:w-10" />

            <p className="text-[10px] font-black tracking-[0.25em] text-[#FFD447] uppercase sm:text-xs">
              Event Information
            </p>

            <span className="h-[2px] w-8 bg-[#FF3939] sm:w-10" />
          </div>

          <p className="mb-2 text-[10px] font-bold tracking-[0.25em] text-white/45 uppercase sm:text-xs sm:tracking-[0.3em]">
            Your invitation to the grid
          </p>

          <h2 className="text-3xl leading-[0.95] font-black uppercase italic sm:text-5xl lg:text-6xl">
            Save the <span className="text-[#FF3939]">Date.</span>
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-xs leading-5 text-white/60 sm:text-sm sm:leading-6">
            One special day. One legendary celebration. Be there for the next
            lap.
          </p>
        </div>

        {/* Countdown */}
        <div className="mb-4 border border-white/15 bg-[#0B2742]/85 p-3 backdrop-blur-sm sm:p-4">
          <div className="mb-3 flex items-center justify-center gap-3 sm:mb-4">
            <span className="h-px w-8 bg-[#FF3939]" />

            <p className="text-[9px] font-black tracking-[0.25em] text-white/60 sm:text-xs sm:text-[10px]">
              LIGHTS OUT IN
            </p>

            <span className="h-px w-8 bg-[#FF3939]" />
          </div>

          <div className="grid grid-cols-4 gap-2 sm:gap-3">
            {countdownItems.map((item) => (
              <div
                key={item.label}
                className="border border-white/10 bg-[#07182B] px-1 py-2 text-center sm:py-3"
              >
                <p className="text-xl font-black text-white tabular-nums sm:text-3xl lg:text-4xl">
                  {item.value}
                </p>

                <p className="mt-1 text-[8px] font-bold tracking-[0.12em] text-[#FFD447] sm:text-[10px] sm:tracking-[0.2em]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Event information cards */}
        <div className="grid gap-3 md:grid-cols-2 md:gap-4">
          {/* Date and time */}
          <article className="group relative overflow-hidden rounded-xl border border-white/15 bg-[#0B2742]/85 p-4 transition duration-300 hover:border-[#FF3939]/60 sm:p-5">
            <div className="absolute top-0 right-0 h-1 w-1/3 bg-[#FF3939] transition-all duration-300 group-hover:w-full" />

            <div className="mb-3 flex items-center justify-between sm:mb-4">
              <div className="flex h-10 w-10 items-center justify-center border border-[#FF3939]/30 bg-[#FF3939]/10 text-[#FF3939] sm:h-12 sm:w-12">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  className="h-5 w-5 sm:h-6 sm:w-6"
                  aria-hidden="true"
                >
                  <rect x="3" y="5" width="18" height="16" rx="2" />
                  <path d="M16 3v4M8 3v4M3 10h18" />
                </svg>
              </div>

              <span className="text-[9px] font-black tracking-[0.15em] text-white/35 sm:text-[10px] sm:tracking-[0.2em]">
                01 / SCHEDULE
              </span>
            </div>

            <p className="mb-2 text-[9px] font-bold tracking-[0.25em] text-[#FFD447] sm:text-[10px]">
              RACE DAY
            </p>

            <h3 className="text-lg font-black uppercase sm:text-2xl">
              {eventDetails.date}
            </h3>

            <div className="mt-4 flex items-center gap-3 border-t border-white/10 pt-4 sm:mt-5 sm:pt-5">
              <span className="text-[#FF3939]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </svg>
              </span>

              <div>
                <p className="text-[9px] font-bold tracking-[0.2em] text-white/40 sm:text-[10px]">
                  START TIME
                </p>

                <p className="mt-1 text-base font-black sm:text-lg">
                  {eventDetails.time}
                </p>
              </div>
            </div>
          </article>

          {/* Venue */}
          <article className="group relative overflow-hidden rounded-xl border border-white/15 bg-[#0B2742]/85 p-4 transition duration-300 hover:border-[#FF3939]/60 sm:p-5">
            <div className="absolute top-0 right-0 h-1 w-1/3 bg-[#FF3939] transition-all duration-300 group-hover:w-full" />

            <div className="mb-3 flex items-center justify-between sm:mb-4">
              <div className="flex h-10 w-10 items-center justify-center border border-[#FF3939]/30 bg-[#FF3939]/10 text-[#FF3939] sm:h-12 sm:w-12">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  className="h-5 w-5 sm:h-6 sm:w-6"
                  aria-hidden="true"
                >
                  <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </div>

              <span className="text-[9px] font-black tracking-[0.15em] text-white/35 sm:text-[10px] sm:tracking-[0.2em]">
                02 / LOCATION
              </span>
            </div>

            <p className="mb-2 text-[9px] font-bold tracking-[0.25em] text-[#FFD447] sm:text-[10px]">
              RACE VENUE
            </p>

            <h3 className="text-xl font-black uppercase sm:text-2xl">
              {eventDetails.venue}
            </h3>

            <p className="mt-2 text-xs leading-5 text-white/60 sm:text-sm">
              {eventDetails.address}
            </p>

            <a
              href={eventDetails.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-4 flex w-full items-center justify-center gap-3 bg-[#FF3939] px-4 py-3.5 text-xs font-black tracking-[0.15em] text-white uppercase transition hover:bg-[#FFD447] hover:text-[#07182B] focus-visible:ring-2 focus-visible:ring-[#FFD447] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B2742] focus-visible:outline-none"
            >
              OPEN IN GOOGLE MAPS
              <span aria-hidden="true">↗</span>
            </a>
          </article>
        </div>

        {/* Checkered finish line */}
        <div className="mt-5 flex items-center gap-1 opacity-60">
          {Array.from({ length: 32 }, (_, index) => (
            <span
              key={index}
              className={`h-2 flex-1 ${
                index % 2 === 0 ? 'bg-white' : 'bg-transparent'
              }`}
            />
          ))}
        </div>

        {/* Bottom message */}
        <div className="mt-4 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-4 sm:mt-5 sm:flex-row">
          <div className="mt-3 flex items-center justify-center gap-2 text-center">
            <span className="text-[8px] font-black tracking-[0.15em] text-white/40 sm:text-[10px] sm:tracking-[0.2em]">
              RJCH RACING · BIRTHDAY GRAND PRIX · 2026
            </span>
            <span className="text-sm">🏁</span>
          </div>

          <a
            href="#attendance"
            className="mt-4 flex items-center justify-center gap-2 text-[9px] font-bold tracking-[0.2em] text-white/50 uppercase transition hover:text-[#FFD447] sm:mt-5 sm:text-[10px]"
          >
            Driver Registration
            <span className="animate-bounce text-[#FF3939]">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}

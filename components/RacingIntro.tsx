'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import { Suspense } from 'react';
import InviteGreeting from '@/components/InviteGreeting';

type RacingIntroProps = {
  onComplete: () => void;
  isExiting: boolean;
};

export default function RacingIntro({
  onComplete,
  isExiting,
}: RacingIntroProps) {
  const [isSwiped, setIsSwiped] = useState(false);
  const startY = useRef<number | null>(null);

  const handleStart = (y: number) => {
    if (isSwiped || isExiting) return;
    startY.current = y;
  };

  const handleEnd = (y: number) => {
    if (startY.current === null) return;

    const distance = startY.current - y;

    if (distance > 50 && !isSwiped && !isExiting) {
      setIsSwiped(true);

      // Tunggu animasi mobil selesai
      setTimeout(() => {
        onComplete();
      }, 400);
    }

    startY.current = null;
  };

  return (
    <section
      className={`fixed inset-0 z-50 h-screen overflow-hidden bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
        isExiting ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
      style={{
        backgroundImage: "url('/images/racing-background.jpg')",
      }}
      onTouchStart={(e) => handleStart(e.touches[0].clientY)}
      onTouchEnd={(e) => handleEnd(e.changedTouches[0].clientY)}
      onMouseDown={(e) => handleStart(e.clientY)}
      onMouseUp={(e) => handleEnd(e.clientY)}
    >
      {/* Mobil */}
      <div
        className={`absolute bottom-[-25px] left-1/2 z-10 -translate-x-1/2 transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] sm:bottom-[-50px] xl:bottom-[-250px] ${
          isSwiped ? '-translate-y-[115vh] scale-50' : 'translate-y-0 scale-75'
        }`}
      >
        <Image
          src="/images/red-car.png"
          alt="Red racing car"
          width={1400}
          height={768}
          priority
          draggable={false}
          className="pointer-events-none mb-[-2px] block w-[120vw] max-w-none select-none sm:w-[80vw] lg:w-[65vw]"
        />
      </div>

      {/* Racing invitation panel */}
      {!isSwiped && (
        <div className="absolute top-[10%] left-1/2 z-20 w-[92%] max-w-xl sm:top-[9%]">
          <div className="animate-[introReveal_800ms_ease-out_both]">
            {/* Label */}
            <div className="mb-3 flex items-center justify-center gap-3">
              <span className="h-[2px] w-8 shrink-0 bg-[#FF3939]" />

              <span className="text-center text-[10px] font-black tracking-[0.3em] text-white uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] sm:text-xs">
                A Special Birthday Mission
              </span>

              <span className="h-[2px] w-8 shrink-0 bg-[#FF3939]" />
            </div>

            {/* Main card */}
            <div className="relative overflow-hidden rounded-2xl border border-white/40 bg-gradient-to-br from-[#164D78]/95 via-[#10365B]/95 to-[#081D35]/95 px-5 py-5 text-center shadow-[0_15px_50px_rgba(0,0,0,0.35)] backdrop-blur-md sm:px-8 sm:py-7">
              {/* Decorative racing stripe */}
              <div className="absolute top-0 left-0 h-1 w-full bg-white/10">
                <div className="h-full w-1/3 bg-[#FF3939]" />
              </div>

              <div className="flex items-center justify-center gap-2">
                <span className="text-lg">🏁</span>
                <span className="text-[10px] font-bold tracking-[0.25em] text-white/70">
                  YOU`RE ON THE GRID
                </span>
                <span className="text-lg">🏁</span>
              </div>

              <h1 className="mt-3 text-3xl leading-none font-black tracking-tight text-white uppercase italic sm:text-5xl">
                You`re
                <span className="ml-2 text-[#FF3939]">Invited!</span>
              </h1>

              <div className="mx-auto my-4 h-[2px] w-16 bg-[#FF3939]" />

              <p className="text-[10px] font-bold tracking-[0.2em] text-white/65 uppercase sm:text-xs">
                This invitation is prepared for
              </p>

              <p className="mt-2 text-xl leading-tight font-black sm:text-3xl">
                <Suspense
                  fallback={
                    <span className="text-[#FFE16A]">Family & Friends</span>
                  }
                >
                  <InviteGreeting />
                </Suspense>
              </p>

              <p className="mt-3 text-xs leading-relaxed text-white/85 sm:text-sm">
                One special day. One unforgettable adventure.
                <br />
                Come celebrate with us!
              </p>

              {/* Bottom metadata */}
              <div className="mt-5 flex items-center justify-between border-t border-white/15 pt-3">
                <span className="text-[9px] font-bold tracking-widest text-white/60 sm:text-[10px]">
                  RJC RACING
                </span>

                <span className="bg-[#FF3939] px-3 py-1.5 text-[9px] font-black tracking-widest text-white sm:text-[10px]">
                  ENTRY PASS · 001
                </span>
              </div>
            </div>

            {/* Swipe instruction */}
            <div className="mt-4 flex flex-col items-center">
              <div className="flex items-center gap-3 rounded-full border border-white/40 bg-[#08213D]/75 px-5 py-2.5 text-white shadow-lg backdrop-blur-sm">
                <span className="text-sm">↑</span>

                <span className="text-[10px] font-black tracking-[0.2em] uppercase sm:text-xs">
                  Swipe up to start
                </span>

                <span className="text-sm">↑</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

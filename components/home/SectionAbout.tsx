import Image from 'next/image';

export default function SectionAbout() {
  return (
    <section
      id="about"
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
      <div className="absolute bottom-0 -left-20 -z-10 h-64 w-64 rounded-full bg-[#164D78]/40 blur-[90px]" />

      {/* Racing stripe */}
      <div className="absolute top-0 left-0 h-1 w-full bg-white/10">
        <div className="h-full w-1/3 bg-[#FF3939]" />
      </div>

      <div className="mx-auto w-full max-w-6xl">
        {/* Section label */}
        <div className="mb-4 flex items-center gap-3 sm:mb-5">
          <span className="h-[2px] w-8 bg-[#FF3939] sm:w-10" />
          <p className="text-[10px] font-black tracking-[0.25em] text-[#FFD447] uppercase sm:text-xs">
            Driver Profile · 001
          </p>
          <span className="ml-auto border border-white/20 px-2 py-1 text-[9px] font-bold tracking-widest text-white/60">
            RACE DAY
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl leading-[0.95] font-black uppercase italic sm:text-5xl lg:text-6xl">
          Meet the
          <span className="mt-1 block text-[#FF3939]">Birthday Champion</span>
        </h2>

        {/* Profile card */}
        <div className="mt-5 grid overflow-hidden rounded-2xl border border-white/15 bg-[#0B2742]/80 shadow-2xl shadow-black/20 backdrop-blur-sm sm:mt-6 md:grid-cols-2">
          {/* Profile photo */}
          <div className="relative min-h-52 overflow-hidden bg-[#164D78] sm:min-h-64 md:min-h-0">
            <Image
              src="/images/ryuiichi.jpeg"
              alt="Ryuiichi Jovin Chen"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#07182B]/80 via-transparent to-transparent" />

            <p className="absolute bottom-4 left-4 text-[10px] font-black tracking-[0.2em] text-white uppercase sm:bottom-5 sm:left-5 sm:text-xs">
              The star of the race
            </p>

            <span className="absolute top-3 right-4 text-5xl font-black text-white/50 italic sm:top-4 sm:right-5 sm:text-6xl">
              01
            </span>

            {/* Checkered accent */}
            <div
              className="absolute right-0 bottom-0 left-0 h-2 opacity-80"
              style={{
                backgroundImage:
                  'repeating-conic-gradient(#FFFFFF 0% 25%, #07182B 0% 50%)',
                backgroundSize: '16px 16px',
              }}
            />
          </div>

          {/* Profile content */}
          <div className="flex flex-col justify-center p-5 sm:p-7 lg:p-8">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#FF3939]" />
              <p className="text-[10px] font-bold tracking-[0.2em] text-[#FFD447] uppercase sm:text-xs">
                Our&apos;s main character
              </p>
            </div>

            <h3 className="mt-2 text-2xl leading-tight font-black uppercase sm:mt-3 sm:text-4xl">
              Ryuiichi
              <span className="block text-[#FF3939]">Jovin Chen</span>
            </h3>

            <div className="my-4 h-1 w-14 bg-[#FF3939] sm:my-5 sm:w-16" />

            <p className="text-xs leading-6 text-white/80 sm:text-sm sm:leading-7">
              A new lap around the sun, a new chapter to explore, and countless
              beautiful memories waiting to be made.
            </p>

            <p className="mt-3 text-xs leading-5 font-semibold text-[#FFD447] sm:mt-4 sm:text-sm sm:leading-6">
              Keep shining, keep smiling, and enjoy every lap!
            </p>

            <a
              href="#event-details"
              className="group mt-5 flex w-fit items-center justify-center gap-3 bg-[#FF3939] px-4 py-3.5 text-xs font-black tracking-[0.15em] text-white uppercase transition hover:bg-[#FFD447] hover:text-[#07182B] focus-visible:ring-2 focus-visible:ring-[#FFD447] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B2742] focus-visible:outline-none"
            >
              Save the date <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

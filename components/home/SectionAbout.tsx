import Image from 'next/image';

export default function SectionAbout() {
  return (
    <section
      id="about"
      className="relative isolate flex min-h-[100svh] w-full flex-col justify-center overflow-hidden bg-[#0B2742] px-5 py-12 text-white sm:px-10 lg:px-16"
    >
      {/* Decorative background */}
      <div
        className="absolute inset-0 -z-10 opacity-20"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, transparent 0px, transparent 35px, #FFFFFF 36px, transparent 37px)',
        }}
      />

      <div className="absolute top-20 -right-20 -z-10 h-64 w-64 rounded-full bg-[#FF3939]/20 blur-[90px]" />

      <div className="mx-auto w-full max-w-6xl">
        {/* Section label */}
        <div className="mb-5 flex items-center gap-3">
          <span className="h-[2px] w-10 bg-[#FF3939]" />
          <p className="text-xs font-black tracking-[0.25em] text-[#FFD447] uppercase">
            Driver Profile · 001
          </p>
        </div>

        {/* Heading */}
        <h2 className="text-4xl leading-[0.95] font-black uppercase italic sm:text-6xl lg:text-7xl">
          Meet the
          <span className="mt-2 block text-[#FF3939]">Birthday Champion</span>
        </h2>

        {/* Profile card */}
        <div className="mt-8 grid overflow-hidden rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm md:grid-cols-2">
          {/* Profile photo */}
          <div className="relative min-h-56 overflow-hidden bg-[#164D78] sm:min-h-72">
            <Image
              src="/images/ryuiichi.jpeg"
              alt="Ryuiichi Jovin Chen"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#08213D]/70 via-transparent to-transparent" />

            <p className="absolute right-4 bottom-4 left-4 text-xs font-bold tracking-widest text-white uppercase">
              The star of the race
            </p>

            <span className="absolute top-4 right-4 text-5xl font-black text-white/60 italic">
              01
            </span>
          </div>

          {/* Profile content */}
          <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
            <p className="text-xs font-bold tracking-[0.2em] text-[#FFD447] uppercase">
              Today&apos;s main character
            </p>

            <h3 className="mt-3 text-3xl leading-tight font-black uppercase sm:text-4xl">
              Ryuiichi
              <span className="block text-[#FF3939]">Jovin Chen</span>
            </h3>

            <div className="my-5 h-1 w-16 bg-[#FF3939]" />

            <p className="text-sm leading-7 text-white/85 sm:text-base">
              A new lap around the sun, a new chapter to explore, and countless
              beautiful memories waiting to be made.
            </p>

            <p className="mt-4 text-sm leading-6 font-semibold text-[#FFD447]">
              Keep shining, keep smiling, and enjoy every lap!
            </p>

            <a
              href="#gallery"
              className="mt-7 inline-flex w-fit items-center gap-3 bg-[#FF3939] px-5 py-3 text-xs font-black tracking-wider uppercase transition hover:bg-[#E92727]"
            >
              Explore the memories <span>↗</span>
            </a>
          </div>
        </div>

        {/* Bottom scroll cue */}
        <a
          href="#gallery"
          className="mt-7 flex items-center justify-center gap-2 text-[10px] font-bold tracking-[0.25em] text-white/60 uppercase transition hover:text-white"
        >
          Next stop: Our memories
          <span className="animate-bounce">↓</span>
        </a>
      </div>
    </section>
  );
}

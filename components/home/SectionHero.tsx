export default function SectionHero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[100svh] w-full flex-col overflow-hidden bg-[#08213D] text-white"
    >
      {/* Background */}
      <div
        className="absolute inset-0 -z-30 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/racing-background.jpg')",
        }}
      />

      {/* Racing atmosphere */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-r from-[#06172C]/95 via-[#08213D]/65 to-[#08213D]/35" />
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-[#06172C]/50 via-transparent to-[#06172C]/95" />

      {/* Red glow */}
      <div className="absolute top-1/4 -right-24 -z-10 h-80 w-80 rounded-full bg-red-600/20 blur-[110px]" />
      <div className="absolute bottom-20 -left-32 -z-10 h-72 w-72 rounded-full bg-blue-500/15 blur-[100px]" />

      {/* Decorative racing stripes */}
      <div className="pointer-events-none absolute top-0 right-0 -z-10 hidden h-full w-[28%] -skew-x-12 border-l border-white/10 bg-white/[0.025] lg:block" />
      <div className="pointer-events-none absolute top-0 right-[8%] -z-10 hidden h-full w-1 bg-red-600/20 lg:block" />

      {/* Header */}
      <header className="relative z-20 flex items-center justify-between gap-3 px-5 py-5 sm:px-10 lg:px-16">
        <a href="#home" className="flex items-center gap-2.5">
          <span className="text-2xl">🏁</span>
          <span className="text-sm font-black tracking-[0.2em]">
            RJC RACING
          </span>
        </a>

        <div className="flex items-center gap-3">
          <span className="hidden text-[10px] font-bold tracking-[0.2em] text-white/50 sm:block">
            SEASON
          </span>
          <span className="border border-red-500/50 bg-red-600/10 px-3 py-2 text-[10px] font-black tracking-[0.15em] sm:text-xs">
            BIRTHDAY GRAND PRIX · 2026
          </span>
        </div>
      </header>

      {/* Main content */}
      <div className="relative z-10 mx-auto flex w-full flex-1 flex-col items-center justify-center px-5 pt-10 pb-36 text-center sm:px-10 sm:pb-40 lg:pb-44">
        {/* Race status */}
        <div className="mb-7 inline-flex items-center gap-2 border border-white/15 bg-[#06172C]/60 px-4 py-2 backdrop-blur-sm">
          <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
          <span className="text-[9px] font-black tracking-[0.25em] text-white/80 sm:text-[10px]">
            LIGHTS OUT · IT`S YOUR DAY
          </span>
        </div>

        {/* Main title */}
        <div className="relative">
          <span className="pointer-events-none absolute -top-12 -left-5 -z-10 text-[130px] leading-none font-black text-white/[0.035] italic select-none sm:-top-20 sm:-left-12 sm:text-[220px] lg:-left-20 lg:text-[300px]">
            01
          </span>

          <p className="mb-4 text-[10px] font-black tracking-[0.3em] text-red-400 uppercase sm:text-sm">
            Ladies and gentlemen, start your engines!
          </p>

          <h1 className="text-5xl leading-[0.85] font-black tracking-[-0.06em] uppercase italic sm:text-7xl lg:text-9xl">
            Happy
            <span className="mt-2 block text-[#FF3939] drop-shadow-[0_0_30px_rgba(255,57,57,0.18)]">
              Birthday!
            </span>
          </h1>
        </div>

        {/* Racing divider */}
        <div className="my-7 flex w-full max-w-xs items-center gap-3 sm:my-8 sm:max-w-sm">
          <span className="h-[2px] flex-1 bg-gradient-to-r from-transparent to-red-600" />
          <span className="text-[10px] font-black tracking-[0.25em] text-white/60">
            THE MAIN CHARACTER
          </span>
          <span className="h-[2px] flex-1 bg-gradient-to-l from-transparent to-red-600" />
        </div>

        {/* Birthday name */}
        <h2 className="max-w-4xl text-2xl font-black tracking-wide uppercase drop-shadow-[0_3px_8px_rgba(0,0,0,0.8)] sm:text-4xl lg:text-5xl">
          Ryuiichi Jovin Chen
        </h2>

        <p className="mt-4 max-w-md text-xs leading-6 text-white/65 sm:text-sm">
          One special day. One legendary driver. A whole new lap around the sun.
        </p>

        {/* CTA */}
        <a
          href="#about"
          className="group mt-8 flex w-fit items-center justify-center gap-4 bg-[#FF3939] px-7 py-4 text-xs font-black tracking-[0.15em] text-white uppercase transition duration-300 hover:bg-[#FFD447] hover:text-[#07182B] focus-visible:ring-2 focus-visible:ring-[#FFD447] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B2742] focus-visible:outline-none"
        >
          Let the celebration begin
          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          >
            ↗
          </span>
        </a>

        {/* Race stats */}
        <div className="mt-10 grid w-full max-w-sm grid-cols-3 border-y border-white/15 py-4 sm:max-w-md">
          <div className="border-r border-white/15 px-2">
            <p className="text-[9px] font-bold tracking-[0.2em] text-white/45">
              EVENT
            </p>
            <p className="mt-1 text-xs font-black tracking-wider sm:text-sm">
              BIRTHDAY
            </p>
          </div>

          <div className="border-r border-white/15 px-2">
            <p className="text-[9px] font-bold tracking-[0.2em] text-white/45">
              DRIVER
            </p>
            <p className="mt-1 text-xs font-black tracking-wider sm:text-sm">
              RJC
            </p>
          </div>

          <div className="px-2">
            <p className="text-[9px] font-bold tracking-[0.2em] text-white/45">
              SEASON
            </p>
            <p className="mt-1 text-xs font-black tracking-wider sm:text-sm">
              2026
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-white/60 transition hover:text-white"
      >
        <span className="text-[9px] font-bold tracking-[0.3em] whitespace-nowrap">
          SCROLL TO EXPLORE
        </span>
        <span className="animate-bounce text-xl">↓</span>
      </a>
    </section>
  );
}

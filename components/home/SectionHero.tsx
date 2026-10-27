export default function SectionHero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[100svh] w-full flex-col overflow-hidden bg-[#08213D]"
    >
      {/* Background sirkuit */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/racing-background.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#123B65]/20 via-[#123B65]/15 to-[#08213D]/80" />

      {/* Aksen merah */}
      <div className="absolute top-24 -right-32 -z-10 h-72 w-72 rounded-full bg-red-600/20 blur-[100px]" />

      {/* Header */}
      <header className="flex items-center justify-between px-5 py-5 sm:px-10 lg:px-16">
        <a href="#home" className="flex items-center gap-2">
          <span className="text-2xl">🏁</span>
          <span className="text-sm font-black tracking-[0.2em] text-white">
            RJCH RACING
          </span>
        </a>

        <span className="rounded-md border border-white/40 bg-[#123B65]/40 px-3 py-2 text-[10px] font-bold tracking-[0.2em] text-white sm:text-xs">
          BIRTHDAY GRAND PRIX · 2026
        </span>
      </header>

      {/* Konten utama */}
      <div className="relative z-10 mx-auto flex w-full flex-1 flex-col items-center justify-center px-5 pt-8 pb-48 text-center sm:pb-56 lg:pb-64">
        <p className="mb-4 text-xs font-black tracking-[0.3em] text-red-500 uppercase sm:text-sm">
          Ladies and gentlemen, start your engines!
        </p>

        <h1 className="max-w-5xl text-4xl leading-[0.95] font-black tracking-tight uppercase italic sm:text-6xl lg:text-8xl">
          Happy
          <span className="block text-[#FF3939]">Birthday!</span>
        </h1>

        <div className="my-6 flex items-center gap-3">
          <span className="h-[2px] w-10 bg-red-600" />
          <span className="text-xs font-bold tracking-[0.3em] text-white/60">
            THE MAIN CHARACTER
          </span>
          <span className="h-[2px] w-10 bg-red-600" />
        </div>

        <h2 className="max-w-4xl text-2xl font-black tracking-wide text-white uppercase drop-shadow-[0_3px_8px_rgba(0,0,0,0.8)] sm:text-4xl lg:text-5xl">
          Ryuiichi Jovin Chen
        </h2>

        <a
          href="#gallery"
          className="mt-8 inline-flex items-center justify-center gap-3 bg-red-600 px-7 py-4 text-xs font-black tracking-[0.15em] uppercase transition duration-300 hover:bg-red-700 hover:shadow-[0_0_30px_rgba(220,38,38,0.4)] sm:text-sm"
        >
          Let the celebration begin
          <span aria-hidden="true">↗</span>
        </a>
      </div>

      {/* Petunjuk scroll */}
      <a
        href="#about"
        className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1 text-white/60 transition hover:text-white"
      >
        <span className="text-[9px] font-bold tracking-[0.3em]">
          SCROLL TO EXPLORE
        </span>
        <span className="animate-bounce text-xl">↓</span>
      </a>

      {/* Aksen garis bawah */}
      <div className="absolute bottom-0 left-0 h-1 w-full bg-white/10">
        <div className="h-full w-1/3 bg-red-600" />
      </div>
    </section>
  );
}

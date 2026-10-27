import Image from 'next/image';

const memories = [
  {
    src: '/images/memory-1.jpeg',
    title: 'The Beginning',
    category: '01 / STARTING GRID',
    className: 'md:col-span-2 md:row-span-2',
  },
  {
    src: '/images/memory-2.jpeg',
    title: 'Good Times',
    category: '02 / PIT STOP',
    className: '',
  },
  {
    src: '/images/memory-3.jpeg',
    title: 'Little Moments',
    category: '03 / FULL THROTTLE',
    className: '',
  },
  {
    src: '/images/memory-4.jpeg',
    title: 'Unforgettable',
    category: '04 / VICTORY LAP',
    className: 'md:col-span-2',
  },
];

export default function SectionGallery() {
  return (
    <section
      id="gallery"
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
        <div className="mb-5 sm:mb-6">
          <div className="mb-4 flex items-center gap-3 sm:mb-5">
            <span className="h-[2px] w-8 bg-[#FF3939] sm:w-10" />

            <p className="text-[10px] font-black tracking-[0.25em] text-[#FFD447] uppercase sm:text-xs">
              Memories · Lap by Lap
            </p>

            <span className="ml-auto border border-white/20 px-2 py-1 text-[9px] font-bold tracking-widest text-white/60">
              RACE ARCHIVE
            </span>
          </div>

          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end sm:gap-6">
            <h2 className="text-3xl leading-[0.95] font-black uppercase italic sm:text-5xl lg:text-6xl">
              Our
              <span className="mt-1 block text-[#FF3939]">
                Memories<span className="text-[#FFD447]">.</span>
              </span>
            </h2>

            <p className="max-w-sm text-xs leading-5 text-white/60 sm:text-sm sm:leading-6">
              Every moment is a lap worth remembering. Here&apos;s to the
              memories that make the journey special.
            </p>
          </div>
        </div>

        {/* Memories gallery */}
        <div className="grid grid-cols-2 gap-2 sm:gap-3 md:auto-rows-[minmax(0,1fr)] md:grid-cols-3 md:grid-rows-2">
          {memories.map((memory, index) => (
            <div
              key={memory.src}
              className={`group relative h-36 overflow-hidden rounded-xl border border-white/15 bg-[#0B2742] sm:h-44 md:h-auto ${memory.className}`}
            >
              <Image
                src={memory.src}
                alt={memory.title}
                fill
                sizes={
                  memory.className.includes('col-span-2')
                    ? '(max-width: 768px) 50vw, 66vw'
                    : '(max-width: 768px) 50vw, 33vw'
                }
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#07182B]/95 via-[#07182B]/10 to-transparent transition-colors duration-300 group-hover:from-[#07182B]/75" />

              {/* Image number */}
              <span className="absolute top-2 right-3 text-3xl font-black text-white/50 italic transition-colors group-hover:text-[#FFD447] sm:top-3 sm:right-4 sm:text-4xl">
                {String(index + 1).padStart(2, '0')}
              </span>

              {/* Image caption */}
              <div className="absolute right-3 bottom-3 left-3 sm:right-4 sm:bottom-4 sm:left-4">
                <p className="mb-1 text-[8px] font-black tracking-[0.12em] text-[#FFD447] uppercase sm:text-[9px] sm:tracking-[0.2em]">
                  {memory.category}
                </p>

                <h3 className="text-sm font-black uppercase italic sm:text-xl">
                  {memory.title}
                </h3>

                <div className="mt-2 h-[2px] w-8 bg-[#FF3939] transition-all duration-300 group-hover:w-16 sm:mt-3 sm:w-10" />
              </div>

              {/* Checkered accent */}
              <div
                className="absolute top-0 left-0 h-1 w-10 opacity-80 sm:w-14"
                style={{
                  backgroundImage:
                    'repeating-conic-gradient(#FFFFFF 0% 25%, #07182B 0% 50%)',
                  backgroundSize: '8px 8px',
                }}
              />
            </div>
          ))}

          {/* Racing quote card */}
          <div className="relative flex min-h-36 flex-col justify-between overflow-hidden rounded-xl border border-[#FFD447]/30 bg-[#0B2742] p-4 sm:min-h-44 sm:p-5 md:col-span-1 md:min-h-0">
            <span className="text-[8px] font-black tracking-[0.15em] text-[#FFD447] uppercase sm:text-[9px] sm:tracking-[0.2em]">
              Beyond the finish line
            </span>

            <div className="my-3">
              <p className="text-xl leading-tight font-black uppercase italic sm:text-2xl lg:text-3xl">
                The best
                <span className="block text-[#FF3939]">is yet to come.</span>
              </p>

              <div className="mt-3 h-1 w-10 bg-[#FFD447] sm:w-14" />
            </div>

            <div className="flex items-center justify-between gap-2">
              <span className="text-[8px] font-bold tracking-wider text-white/50 uppercase sm:text-[9px] sm:tracking-widest">
                Ryuiichi · Birthday Edition
              </span>

              <span className="text-xl sm:text-2xl">🏁</span>
            </div>

            <div className="pointer-events-none absolute -top-4 -right-3 text-7xl font-black text-white/[0.04] italic sm:-top-8 sm:-right-8 sm:text-9xl">
              05
            </div>
          </div>
        </div>

        {/* Bottom message */}
        <div className="mt-4 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-4 sm:mt-5 sm:flex-row">
          <p className="text-[9px] font-bold tracking-[0.15em] text-white/50 uppercase sm:text-[10px] sm:tracking-[0.2em]">
            Every picture tells a story
          </p>

          <a
            href="#event-details"
            className="group mt-auto flex items-center justify-center gap-3 bg-[#FF3939] px-4 py-3.5 text-xs font-black tracking-[0.15em] text-white uppercase transition hover:bg-[#FFD447] hover:text-[#07182B] focus-visible:ring-2 focus-visible:ring-[#FFD447] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B2742] focus-visible:outline-none"
          >
            Event Information <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

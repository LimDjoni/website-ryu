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
      className="relative isolate flex min-h-[100svh] flex-col justify-center overflow-hidden bg-[#08213D] px-5 py-8 text-white sm:px-10 lg:px-16"
    >
      {/* Decorative background */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.07]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, transparent 0px, transparent 35px, #FFFFFF 36px, transparent 37px)',
        }}
      />

      <div className="absolute top-20 -right-20 -z-10 h-72 w-72 rounded-full bg-[#08B8F0]/15 blur-[100px]" />

      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <div className="mb-5">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-[#FF3939]" />
            <p className="text-xs font-black tracking-[0.25em] text-[#FFD447] uppercase">
              Memories · Lap by Lap
            </p>
          </div>

          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <h2 className="text-4xl leading-[0.95] font-black uppercase italic sm:text-6xl lg:text-7xl">
              Our
              <span className="mt-2 block text-[#FF3939]">
                Memories<span className="text-[#FFD447]">.</span>
              </span>
            </h2>

            <p className="max-w-sm text-sm leading-7 text-white/60">
              Every moment is a lap worth remembering. Here&apos;s to the
              memories that make the journey special.
            </p>
          </div>
        </div>

        {/* Memories gallery */}
        <div className="grid auto-rows-[150px] grid-cols-1 gap-3 sm:grid-cols-2 md:auto-rows-[minmax(0,1fr)] md:grid-cols-3 md:grid-rows-[minmax(0,1fr)_minmax(0,1fr)] md:gap-3">
          {memories.map((memory, index) => (
            <div
              key={memory.src}
              className={`group relative overflow-hidden rounded-xl border border-white/10 bg-[#0B2742] ${memory.className}`}
            >
              <Image
                src={memory.src}
                alt={memory.title}
                fill
                sizes={
                  memory.className.includes('col-span-2')
                    ? '(max-width: 768px) 100vw, 66vw'
                    : '(max-width: 768px) 100vw, 33vw'
                }
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#061426]/90 via-[#061426]/10 to-transparent transition-colors duration-300 group-hover:from-[#061426]/70" />

              {/* Number */}
              <span className="absolute top-4 right-4 text-4xl font-black text-white/50 italic transition-colors group-hover:text-[#FFD447]">
                {String(index + 1).padStart(2, '0')}
              </span>

              {/* Caption */}
              <div className="absolute right-5 bottom-5 left-5">
                <p className="mb-2 text-[9px] font-black tracking-[0.2em] text-[#FFD447] uppercase">
                  {memory.category}
                </p>

                <h3 className="text-xl font-black uppercase italic sm:text-2xl">
                  {memory.title}
                </h3>

                <div className="mt-3 h-[2px] w-10 bg-[#FF3939] transition-all duration-300 group-hover:w-20" />
              </div>
            </div>
          ))}
          {/* Racing quote card */}
          <div className="relative flex flex-col justify-between overflow-hidden rounded-xl border border-[#FFD447]/30 bg-[#0B2742] p-6 md:col-span-1">
            <span className="text-xs font-black tracking-[0.25em] text-[#FFD447] uppercase">
              Beyond the finish line
            </span>

            <div>
              <p className="text-3xl leading-tight font-black uppercase italic">
                The best
                <span className="block text-[#FF3939]">is yet to come.</span>
              </p>

              <div className="mt-4 h-1 w-14 bg-[#FFD447]" />
            </div>

            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold tracking-widest text-white/50 uppercase">
                Ryuiichi · Birthday Edition
              </span>
              <span className="text-2xl">🏁</span>
            </div>

            <div className="pointer-events-none absolute -top-8 -right-8 text-9xl font-black text-white/[0.03] italic">
              04
            </div>
          </div>
        </div>

        {/* Bottom message */}
        <div className="mt-5 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-4 sm:flex-row">
          <p className="text-[10px] font-bold tracking-[0.2em] text-white/50 uppercase">
            Every picture tells a story
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-[#FF3939] px-5 py-3 text-xs font-black tracking-wider uppercase transition-colors hover:bg-[#E92727]"
          >
            Leave a birthday wish <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';

type Wish = {
  name: string;
  message: string;
};

const initialWishes: Wish[] = [
  {
    name: 'Your Supporters',
    message:
      'Wishing you a year full of happiness, unforgettable memories, and new adventures. Keep shining, Ryuiichi!',
  },
  {
    name: 'Team Birthday',
    message:
      'Another year, another lap! May every new chapter bring you closer to your dreams. Happy Birthday!',
  },
  {
    name: 'Team Birthday',
    message:
      'Another year, another lap! May every new chapter bring you closer to your dreams. Happy Birthday!',
  },
  {
    name: 'Team Birthday',
    message:
      'Another year, another lap! May every new chapter bring you closer to your dreams. Happy Birthday!',
  },
  {
    name: 'Team Birthday',
    message:
      'Another year, another lap! May every new chapter bring you closer to your dreams. Happy Birthday!',
  },
  {
    name: 'Team Birthday',
    message:
      'Another year, another lap! May every new chapter bring you closer to your dreams. Happy Birthday!',
  },
  {
    name: 'Team Birthday',
    message:
      'Another year, another lap! May every new chapter bring you closer to your dreams. Happy Birthday!',
  },
];

export default function SectionWishes() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [wishes, setWishes] = useState<Wish[]>(initialWishes);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const trimmedName = name.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName || !trimmedMessage) return;

    setWishes((current) => [
      { name: trimmedName, message: trimmedMessage },
      ...current,
    ]);
    setName('');
    setMessage('');
    setSubmitted(true);

    window.setTimeout(() => setSubmitted(false), 2500);
  }

  return (
    <section
      id="contact"
      className="relative isolate flex min-h-[100svh] flex-col justify-center overflow-hidden bg-[#08213D] px-5 py-8 text-white sm:px-10 lg:px-16"
    >
      {/* Racing background */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, transparent 0px, transparent 35px, #FFFFFF 36px, transparent 37px)',
        }}
      />
      <div className="absolute -top-20 -left-20 -z-10 h-80 w-80 rounded-full bg-[#FF3939]/15 blur-[100px]" />
      <div className="absolute right-0 bottom-0 -z-10 h-80 w-80 rounded-full bg-[#08B8F0]/10 blur-[100px]" />

      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-5">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-[#FF3939]" />
            <p className="text-xs font-black tracking-[0.25em] text-[#FFD447] uppercase">
              Leave Your Mark
            </p>
          </div>

          <h2 className="text-4xl leading-[0.95] font-black uppercase italic sm:text-5xl lg:text-6xl">
            Birthday
            <span className="mt-2 block text-[#FF3939]">
              Wishes<span className="text-[#FFD447]">.</span>
            </span>
          </h2>

          <p className="mt-5 max-w-lg text-sm leading-7 text-white/60">
            Every great journey is made special by the people along the way.
            Leave a message for Ryuiichi on his special day!
          </p>
        </div>

        <div className="grid gap-5 lg:h-[min(52vh,440px)] lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          {/* Wish form */}
          <div className="flex flex-col rounded-2xl border border-white/10 bg-[#0B2742]/80 p-5 sm:p-6">
            <div className="mb-7 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-black tracking-[0.2em] text-[#FFD447] uppercase">
                  Pit Stop
                </p>
                <h3 className="mt-2 text-2xl font-black uppercase italic">
                  Send a Wish
                </h3>
              </div>
              <span className="text-4xl">🏁</span>
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex flex-1 flex-col space-y-4"
            >
              <div>
                <label
                  htmlFor="wish-name"
                  className="mb-2 block text-xs font-bold tracking-widest text-white/70 uppercase"
                >
                  Your Name
                </label>
                <input
                  id="wish-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  maxLength={60}
                  required
                  placeholder="Enter your name..."
                  className="w-full rounded-lg border border-white/10 bg-[#08213D] px-4 py-3 text-sm text-white transition outline-none placeholder:text-white/30 focus:border-[#08B8F0]"
                />
              </div>

              <div>
                <label
                  htmlFor="wish-message"
                  className="mb-2 block text-xs font-bold tracking-widest text-white/70 uppercase"
                >
                  Your Message
                </label>
                <textarea
                  id="wish-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  maxLength={500}
                  required
                  rows={3}
                  placeholder="Write something special..."
                  className="w-full resize-y rounded-lg border border-white/10 bg-[#08213D] px-4 py-3 text-sm leading-6 text-white transition outline-none placeholder:text-white/30 focus:border-[#08B8F0]"
                />
                <p className="mt-2 text-right text-[10px] text-white/40">
                  {message.length}/500
                </p>
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-lg bg-[#FF3939] px-5 py-3 text-xs font-black tracking-widest uppercase transition hover:bg-[#E92727] active:scale-[0.98]"
              >
                Send Birthday Wish <span>↗</span>
              </button>

              {submitted && (
                <p
                  role="status"
                  className="text-center text-sm font-bold text-[#FFD447]"
                >
                  Your wish has crossed the finish line! 🏆
                </p>
              )}
            </form>
          </div>

          {/* Wish list */}
          <div className="flex min-h-0 flex-col lg:h-full">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-black tracking-[0.2em] text-[#FFD447] uppercase">
                  The Cheer Squad
                </p>
                <h3 className="mt-2 text-2xl font-black uppercase italic">
                  Messages
                </h3>
              </div>
              <span className="rounded-full border border-[#08B8F0]/30 px-4 py-2 text-xs font-black text-[#08B8F0]">
                {wishes.length} WISHES
              </span>
            </div>

            <div className="max-h-[360px] space-y-3 overflow-y-auto pr-1 lg:max-h-none lg:min-h-0 lg:flex-1">
              {wishes.map((wish, index) => (
                <article
                  key={`${wish.name}-${index}`}
                  className="group rounded-xl border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:border-[#08B8F0]/40 hover:bg-white/[0.05] sm:p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#FF3939]/15 text-lg font-black text-[#FF3939]">
                      {wish.name.charAt(0).toUpperCase()}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h4 className="font-black uppercase italic">
                          {wish.name}
                        </h4>
                        <span className="text-xs text-[#FFD447]">✦</span>
                      </div>
                      <p className="mt-3 text-sm leading-7 break-words text-white/65">
                        {wish.message}
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 h-px bg-gradient-to-r from-[#FF3939]/60 via-white/10 to-transparent" />
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-4 sm:flex-row">
          <p className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">
            Made with love for Ryuiichi Jovin Chen
          </p>
          <a
            href="#home"
            className="text-xs font-black tracking-widest text-[#FFD447] uppercase transition hover:text-white"
          >
            Back to Start ↑
          </a>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useEffect, useState, type FormEvent } from 'react';

type Wish = {
  id: number | string;
  name: string;
  message: string;
  created_at: string;
};

export default function SectionWishes() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    async function loadWishes() {
      try {
        const response = await fetch('/api/wishes', {
          method: 'GET',
          cache: 'no-store',
          signal: controller.signal,
        });

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result?.message || 'Gagal mengambil daftar ucapan.');
        }

        setWishes(Array.isArray(result.data) ? result.data : []);
      } catch (err) {
        if (controller.signal.aborted) return;

        console.error('Fetch wishes error:', err);

        setError(
          err instanceof Error
            ? err.message
            : 'Gagal memuat ucapan. Silakan coba lagi.'
        );
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    void loadWishes();

    return () => {
      controller.abort();
    };
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (isSubmitting) return;

    const trimmedName = name.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName || !trimmedMessage) {
      setError('Nama dan ucapan wajib diisi.');
      return;
    }

    if (trimmedName.length > 60 || trimmedMessage.length > 500) {
      setError('Nama maksimal 60 karakter dan ucapan maksimal 500 karakter.');
      return;
    }

    setError('');
    setSubmitted(false);
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/wishes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: trimmedName,
          message: trimmedMessage,
        }),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(
          result?.message || 'Gagal menyimpan ucapan. Silakan coba lagi.'
        );
      }

      if (result?.data) {
        setWishes((current) =>
          [
            result.data,
            ...current.filter((wish) => wish.id !== result.data.id),
          ].slice(0, 100)
        );
      } else {
        const refreshResponse = await fetch('/api/wishes', {
          cache: 'no-store',
        });

        const refreshResult = await refreshResponse.json();

        if (!refreshResponse.ok) {
          throw new Error(
            refreshResult?.message ||
              'Ucapan tersimpan, tetapi daftar gagal diperbarui.'
          );
        }

        setWishes(Array.isArray(refreshResult.data) ? refreshResult.data : []);
      }

      setName('');
      setMessage('');
      setSubmitted(true);
    } catch (err) {
      console.error('Submit wish error:', err);

      setError(
        err instanceof Error
          ? err.message
          : 'Terjadi kesalahan. Silakan coba lagi.'
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      id="contact"
      className="relative isolate flex min-h-[100svh] w-full flex-col justify-center overflow-hidden bg-[#07182B] px-4 py-8 text-white sm:px-8 sm:py-10 lg:px-16 lg:py-6"
    >
      {/* Racing background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-15"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, transparent 0px, transparent 35px, #FFFFFF 36px, transparent 37px)',
        }}
      />

      <div className="pointer-events-none absolute -top-20 -left-20 -z-10 h-72 w-72 rounded-full bg-[#FF3939]/15 blur-[100px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 -z-10 h-72 w-72 rounded-full bg-[#164D78]/30 blur-[100px]" />

      {/* Racing stripe */}
      <div className="absolute top-0 left-0 h-1 w-full bg-white/10">
        <div className="h-full w-1/3 bg-[#FF3939]" />
      </div>

      <div className="mx-auto w-full max-w-6xl">
        {/* Heading */}
        <div className="mb-5 sm:mb-6">
          <div className="mb-4 flex items-center gap-3 sm:mb-5">
            <span className="h-[2px] w-8 bg-[#FF3939] sm:w-10" />

            <p className="text-[10px] font-black tracking-[0.25em] text-[#FFD447] uppercase sm:text-xs">
              Leave Your Mark
            </p>

            <span className="ml-auto border border-white/20 px-2 py-1 text-[9px] font-bold tracking-widest text-white/60">
              RACE DAY
            </span>
          </div>

          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end sm:gap-6">
            <h2 className="text-3xl leading-[0.95] font-black uppercase italic sm:text-5xl lg:text-6xl">
              Birthday
              <span className="mt-1 block text-[#FF3939]">
                Wishes<span className="text-[#FFD447]">.</span>
              </span>
            </h2>

            <p className="max-w-lg text-xs leading-5 text-white/60 sm:text-sm sm:leading-6">
              Every great journey is made special by the people along the way.
              Leave a message for Ryuiichi on his special day!
            </p>
          </div>
        </div>

        <div className="grid gap-5 lg:h-[min(52vh,440px)] lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          {/* Wish form */}
          <div className="flex flex-col rounded-2xl border border-white/15 bg-[#0B2742]/85 p-4 shadow-xl shadow-black/10 backdrop-blur-sm sm:p-5">
            <div className="mb-5 flex items-center justify-between sm:mb-6">
              <div>
                <p className="text-[9px] font-black tracking-[0.2em] text-[#FFD447] uppercase sm:text-[10px]">
                  Pit Stop · 01
                </p>

                <h3 className="mt-2 text-xl font-black uppercase italic sm:text-2xl">
                  Send a Wish
                </h3>
              </div>

              <span className="text-3xl sm:text-4xl">🏁</span>
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex flex-1 flex-col gap-3 sm:gap-4"
            >
              <div>
                <label
                  htmlFor="wish-name"
                  className="mb-2 block text-[10px] font-bold tracking-widest text-white/70 uppercase sm:text-xs"
                >
                  Your Name
                </label>

                <input
                  id="wish-name"
                  type="text"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  maxLength={60}
                  required
                  placeholder="Enter your name..."
                  className="w-full rounded-lg border border-white/10 bg-[#07182B] px-4 py-3 text-sm text-white transition outline-none placeholder:text-white/30 focus:border-[#FFD447]"
                />
              </div>

              <div>
                <label
                  htmlFor="wish-message"
                  className="mb-2 block text-[10px] font-bold tracking-widest text-white/70 uppercase sm:text-xs"
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
                  className="w-full resize-none rounded-lg border border-white/10 bg-[#07182B] px-4 py-3 text-sm leading-6 text-white transition outline-none placeholder:text-white/30 focus:border-[#FFD447]"
                />

                <p className="mt-1 text-right text-[10px] text-white/40">
                  {message.length}/500
                </p>
              </div>

              {error && (
                <p
                  role="alert"
                  aria-live="polite"
                  className="text-xs leading-5 text-[#FF7777]"
                >
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="group mt-auto flex w-full items-center justify-center gap-3 bg-[#FF3939] px-4 py-3.5 text-xs font-black tracking-[0.15em] text-white uppercase transition hover:bg-[#FFD447] hover:text-[#07182B] focus-visible:ring-2 focus-visible:ring-[#FFD447] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B2742] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60"
              >
                <span>
                  {isSubmitting ? 'Sending...' : 'Send Birthday Wish'}
                </span>

                {!isSubmitting && <span>↗</span>}
              </button>

              {submitted && (
                <p
                  role="status"
                  aria-live="polite"
                  className="text-center text-xs font-bold text-[#FFD447]"
                >
                  Your wish has crossed the finish line! 🏆
                </p>
              )}
            </form>
          </div>

          {/* Wish list */}
          <div className="flex min-h-0 flex-col lg:h-full">
            <div className="mb-4 flex items-center justify-between sm:mb-5">
              <div>
                <p className="text-[9px] font-black tracking-[0.2em] text-[#FFD447] uppercase sm:text-[10px]">
                  The Cheer Squad · 02
                </p>

                <h3 className="mt-2 text-xl font-black uppercase italic sm:text-2xl">
                  Messages
                </h3>
              </div>

              <span className="border border-[#FF3939]/50 bg-[#FF3939]/10 px-3 py-2 text-[10px] font-black text-[#FFD447] sm:px-4 sm:text-xs">
                {wishes.length} WISHES
              </span>
            </div>

            <div
              aria-live="polite"
              className="max-h-[360px] space-y-3 overflow-y-auto pr-1 lg:max-h-none lg:min-h-0 lg:flex-1"
            >
              {isLoading ? (
                <div className="rounded-xl border border-white/10 bg-[#0B2742]/70 p-6 text-center text-sm text-white/50">
                  Loading birthday wishes...
                </div>
              ) : wishes.length === 0 ? (
                <div className="rounded-xl border border-white/10 bg-[#0B2742]/70 p-6 text-center">
                  <p className="text-sm font-bold text-white/70">
                    Be the first to leave a wish!
                  </p>
                  <p className="mt-2 text-xs leading-5 text-white/40">
                    Your message could make Ryuiichi&apos;s day extra special.
                  </p>
                </div>
              ) : (
                wishes.map((wish) => (
                  <article
                    key={wish.id}
                    className="group rounded-xl border border-white/10 bg-[#0B2742]/70 p-4 transition duration-300 hover:border-[#FF3939]/50 hover:bg-[#0B2742] sm:p-5"
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#FF3939]/30 bg-[#FF3939]/10 text-base font-black text-[#FF3939] sm:h-11 sm:w-11 sm:text-lg">
                        {wish.name.charAt(0).toUpperCase()}
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h4 className="text-sm font-black uppercase italic sm:text-base">
                            {wish.name}
                          </h4>

                          <span className="text-xs text-[#FFD447]">✦</span>
                        </div>

                        <p className="mt-2 text-xs leading-6 break-words whitespace-pre-wrap text-white/65 sm:text-sm sm:leading-7">
                          {wish.message}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 h-px bg-gradient-to-r from-[#FF3939]/60 via-white/10 to-transparent" />
                  </article>
                ))
              )}
            </div>

            {!isLoading && wishes.length > 0 && (
              <p className="mt-3 text-right text-[10px] text-white/35">
                Showing the latest {wishes.length} wishes
              </p>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-5 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-4 sm:mt-6 sm:flex-row">
          <p className="text-center text-[9px] font-bold tracking-[0.15em] text-white/40 uppercase sm:text-left sm:text-[10px] sm:tracking-[0.2em]">
            Made with love for Ryuiichi Jovin Chen
          </p>

          <a
            href="#home"
            className="text-[10px] font-black tracking-widest text-[#FFD447] uppercase transition hover:text-white sm:text-xs"
          >
            Back to Start ↑
          </a>
        </div>
      </div>
    </section>
  );
}

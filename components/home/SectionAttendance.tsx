'use client';

import { useState, type FormEvent } from 'react';

type AttendanceStatus = 'yes' | 'no';

export default function SectionAttendance() {
  const [name, setName] = useState('');
  const [status, setStatus] = useState<AttendanceStatus>('yes');
  const [guestCount, setGuestCount] = useState('1');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (isSubmitting) return;

    const trimmedName = name.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName) {
      setError('Nama lengkap wajib diisi.');
      return;
    }

    setError('');
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/attendance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: trimmedName,
          status,
          guestCount: status === 'yes' ? Number(guestCount) : 1,
          message: trimmedMessage,
        }),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(
          result?.message || 'Gagal menyimpan konfirmasi. Silakan coba lagi.'
        );
      }

      setError('');
      setSubmitted(true);
    } catch (err) {
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
      id="attendance"
      className="relative isolate flex min-h-[100svh] w-full flex-col justify-center overflow-hidden bg-[#07182B] px-4 py-7 text-white sm:px-8 sm:py-8 lg:px-16 lg:py-6"
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

      <div className="pointer-events-none absolute top-10 -right-20 -z-10 h-64 w-64 rounded-full bg-[#FF3939]/15 blur-[90px]" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 -z-10 h-64 w-64 rounded-full bg-[#164D78]/30 blur-[90px]" />

      {/* Racing stripe */}
      <div className="absolute top-0 left-0 h-1 w-full bg-white/10">
        <div className="h-full w-1/3 bg-[#FF3939]" />
      </div>

      <div className="mx-auto w-full max-w-5xl">
        {/* Header */}
        <div className="mb-5 flex items-center justify-between gap-3 sm:mb-6">
          <div className="flex items-center gap-2">
            <span className="h-5 w-1 bg-[#FF3939]" />
            <p className="text-[10px] font-black tracking-[0.2em] uppercase sm:text-xs">
              Driver Registration
            </p>
          </div>

          <p className="text-[9px] font-black tracking-[0.2em] text-[#FFD447] uppercase sm:text-xs">
            Pit Lane · 2026
          </p>
        </div>

        {/* Main content */}
        <div className="grid items-center gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          {/* Left: event context */}
          <div className="text-center lg:text-left">
            <div className="mb-3 flex items-center justify-center gap-3 lg:justify-start">
              <span className="h-px w-8 bg-[#FF3939]" />
              <p className="text-[9px] font-black tracking-[0.25em] text-[#FFD447] uppercase sm:text-[10px]">
                Birthday Grand Prix · Ryuiichi
              </p>
              <span className="h-px w-8 bg-[#FF3939] lg:hidden" />
            </div>

            <h2 className="text-4xl leading-[0.95] font-black tracking-tight uppercase italic sm:text-5xl lg:text-6xl xl:text-7xl">
              Will You
              <span className="mt-2 block text-[#FF3939]">Join the Race?</span>
            </h2>

            <p className="mx-auto mt-4 max-w-md text-xs leading-5 text-white/60 sm:text-sm sm:leading-6 lg:mx-0">
              Confirm your attendance at Ryuiichi’s Birthday Grand Prix! Be a
              part of this special day.
            </p>

            <div className="mt-6 flex items-center justify-center gap-3 border-y border-white/10 py-3 lg:justify-start">
              <div className="h-9 w-1 bg-[#FF3939]" />

              <div className="text-left">
                <p className="text-[9px] font-bold tracking-[0.2em] text-white/40 uppercase">
                  Race Day
                </p>
                <p className="text-sm font-black sm:text-base">
                  28 NOVEMBER 2026
                  <span className="mx-2 text-[#FF3939]">/</span>
                  11:30 - 13:30 WIB
                </p>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-center gap-2 text-[10px] font-bold tracking-[0.15em] text-white/40 uppercase lg:justify-start">
              <span className="text-[#FFD447]">01</span>
              <span className="h-px w-6 bg-white/20" />
              <span>Confirm your attendance</span>
            </div>
          </div>

          {/* Right: attendance form */}
          <div className="relative">
            <div className="absolute -top-1 left-0 z-10 flex h-1 w-full overflow-hidden">
              <span className="w-1/3 bg-[#FF3939]" />
              <span className="w-1/6 bg-[#FFD447]" />
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-4 border border-white/15 bg-[#0B2742]/80 p-4 backdrop-blur-sm sm:space-y-5 sm:p-6 lg:p-7"
            >
              {submitted ? (
                <div className="flex min-h-[300px] flex-col items-center justify-center py-8 text-center">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center border border-[#FFD447]/40 bg-[#FFD447]/10 text-2xl text-[#FFD447]">
                    ✓
                  </div>

                  <p className="text-[10px] font-black tracking-[0.25em] text-[#FFD447] uppercase">
                    Registration Complete
                  </p>

                  <h3 className="mt-3 text-2xl font-black uppercase italic sm:text-3xl">
                    You&apos;re on the Grid!
                  </h3>

                  <p className="mt-3 max-w-sm text-sm leading-6 text-white/60">
                    Thank You, {name.trim()}!
                    {status === 'yes'
                      ? ' See you at the Birthday Grand Prix!'
                      : ' Thank you for confirming.'}
                  </p>

                  <p className="mt-4 text-xs text-white/35">
                    Your confirmation has been successfully saved.
                  </p>
                </div>
              ) : (
                <>
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-sm font-black tracking-wider uppercase sm:text-base">
                      Registration Form
                    </h3>

                    <span className="text-[9px] font-bold tracking-widest text-white/35">
                      RJC / RSVP
                    </span>
                  </div>

                  <div className="h-px bg-white/10" />

                  {/* Name */}
                  <div>
                    <label
                      htmlFor="attendance-name"
                      className="mb-2 block text-xs font-bold tracking-wider text-white/70 uppercase"
                    >
                      Full Name
                      <span className="ml-1 text-[#FF3939]">*</span>
                    </label>

                    <input
                      id="attendance-name"
                      type="text"
                      autoComplete="name"
                      maxLength={100}
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                      className="w-full rounded-none border border-white/15 bg-[#07182B] px-3 py-3 text-sm text-white transition outline-none placeholder:text-white/30 focus:border-[#FF3939] focus:ring-1 focus:ring-[#FF3939]/30"
                    />
                  </div>

                  {/* Attendance status */}
                  <fieldset>
                    <legend className="mb-2 text-xs font-bold tracking-wider text-white/70 uppercase">
                      Will you be there?
                    </legend>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        aria-pressed={status === 'yes'}
                        onClick={() => {
                          setStatus('yes');
                          setError('');
                        }}
                        className={`border p-3 text-left transition ${
                          status === 'yes'
                            ? 'border-[#FF3939] bg-[#FF3939]/10'
                            : 'border-white/10 bg-[#07182B]/70 hover:border-white/30'
                        }`}
                      >
                        <span
                          className={`mb-2 block text-lg ${
                            status === 'yes'
                              ? 'text-[#FF3939]'
                              : 'text-white/40'
                          }`}
                        >
                          ✓
                        </span>
                        <span className="block text-xs font-black sm:text-sm">
                          I&apos;ll Be There!
                        </span>
                      </button>

                      <button
                        type="button"
                        aria-pressed={status === 'no'}
                        onClick={() => {
                          setStatus('no');
                          setError('');
                        }}
                        className={`border p-3 text-left transition ${
                          status === 'no'
                            ? 'border-[#FF3939] bg-[#FF3939]/10'
                            : 'border-white/10 bg-[#07182B]/70 hover:border-white/30'
                        }`}
                      >
                        <span
                          className={`mb-2 block text-lg ${
                            status === 'no' ? 'text-[#FF3939]' : 'text-white/40'
                          }`}
                        >
                          ×
                        </span>
                        <span className="block text-xs font-black sm:text-sm">
                          Can&apos;t Make It
                        </span>
                      </button>
                    </div>
                  </fieldset>

                  {/* Guest count */}
                  {status === 'yes' && (
                    <fieldset>
                      <legend className="mb-2 text-xs font-bold tracking-wider text-white/70 uppercase">
                        Number of attendees
                      </legend>

                      <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                        {[
                          { value: '1', label: '1 person (myself)' },
                          { value: '2', label: '2 person' },
                          { value: '3', label: '3 person' },
                          { value: '4', label: '4 or more people' },
                        ].map((option) => (
                          <label
                            key={option.value}
                            className="flex cursor-pointer items-center gap-2 text-xs text-white/75"
                          >
                            <input
                              type="radio"
                              name="guestCount"
                              value={option.value}
                              checked={guestCount === option.value}
                              onChange={(e) => setGuestCount(e.target.value)}
                              className="h-3.5 w-3.5 accent-[#FF3939]"
                            />
                            {option.label}
                          </label>
                        ))}
                      </div>
                    </fieldset>
                  )}

                  {/* Optional message */}
                  <div>
                    <label
                      htmlFor="attendance-message"
                      className="mb-2 block text-xs font-bold tracking-wider text-white/70 uppercase"
                    >
                      Additional message
                      <span className="ml-1 font-normal tracking-normal text-white/35 normal-case">
                        (optional)
                      </span>
                    </label>

                    <textarea
                      id="attendance-message"
                      rows={2}
                      maxLength={300}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Write a short message..."
                      className="w-full resize-none rounded-none border border-white/15 bg-[#07182B] px-3 py-2.5 text-sm text-white transition outline-none placeholder:text-white/30 focus:border-[#FF3939] focus:ring-1 focus:ring-[#FF3939]/30"
                    />

                    <p className="mt-1 text-right text-[10px] text-white/30">
                      {message.length}/300
                    </p>
                  </div>

                  {error && (
                    <p
                      role="alert"
                      aria-live="polite"
                      className="text-xs text-[#FF7777]"
                    >
                      {error}
                    </p>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group flex w-full items-center justify-center gap-3 bg-[#FF3939] px-4 py-3.5 text-xs font-black tracking-[0.15em] text-white uppercase transition hover:bg-[#FFD447] hover:text-[#07182B] focus-visible:ring-2 focus-visible:ring-[#FFD447] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B2742] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    <span>
                      {isSubmitting ? 'Submitting...' : 'Confirm Attendance'}
                    </span>
                    {!isSubmitting && (
                      <span className="transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    )}
                  </button>
                </>
              )}
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-4 flex flex-col items-center justify-between gap-2 sm:flex-row">
          <p className="text-center text-[9px] font-black tracking-[0.15em] text-white/35 uppercase sm:text-left sm:text-[10px] sm:tracking-[0.2em]">
            RJC Racing · Birthday Grand Prix · 2026
          </p>

          <a
            href="#contact"
            className="text-[10px] font-bold tracking-wider text-white/45 uppercase transition hover:text-[#FFD447]"
          >
            Leave a birthday wish ↓
          </a>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useSearchParams } from 'next/navigation';

export default function InviteGreeting() {
  const searchParams = useSearchParams();
  const recipient = searchParams.get('to')?.trim();

  const guestName =
    recipient && recipient.length <= 100 ? recipient : 'Family & Friends';

  return <span className="break-words text-[#FFE16A]">{guestName}</span>;
}

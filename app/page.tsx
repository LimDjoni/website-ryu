'use client';

import { useState } from 'react';
import RacingIntro from '@/components/RacingIntro';
import HomeContent from '@/components/HomeContent';

export default function HomePage() {
  const [showHome, setShowHome] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const handleIntroComplete = () => {
    setShowHome(true);

    // Mulai fade-out setelah konten utama siap
    requestAnimationFrame(() => {
      setIsExiting(true);
    });
  };

  return (
    <main>
      {showHome && (
        <div className="animate-[fadeIn_1s_ease-in-out]">
          <HomeContent />
        </div>
      )}

      <RacingIntro isExiting={isExiting} onComplete={handleIntroComplete} />
    </main>
  );
}

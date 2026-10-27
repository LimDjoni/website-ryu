import SectionHero from '@/components/home/SectionHero';
import SectionAbout from '@/components/home/SectionAbout';
import SectionGallery from '@/components/home/SectionGallery';
import SectionWishes from '@/components/home/SectionWishes';
import SectionEventDetails from '@/components/home/SectionEventDetails';
import SectionAttendance from '@/components/home/SectionAttendance';

export default function HomeContent() {
  return (
    <main className="bg-[#08213D] text-white">
      <SectionHero />
      <SectionAbout />
      <SectionGallery />
      <SectionEventDetails />
      <SectionAttendance />
      <SectionWishes />
    </main>
  );
}

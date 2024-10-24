import { Carousel } from "@/components/Carousel";
import { Header } from "@/components/Header";
import data from '@/data/data';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-black text-white pt-20">
        <div className="max-w-7xl mx-auto px-4">
          <section className="py-12">
            <h2 className="text-3xl font-bold mb-6">TV番組 TOP 10</h2>
            <Carousel items={data.tv_shows.overall} sectionId="tv" />
          </section>

          <section className="py-12">
            <h2 className="text-3xl font-bold mb-6">映画 TOP 10</h2>
            <Carousel items={data.movies.overall} sectionId="movies" />
          </section>
        </div>
      </main>
    </>
  );
}
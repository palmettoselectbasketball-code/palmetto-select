import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function MissionPage() {
  return (
    <main className="bg-[#021B4E] min-h-screen text-white">

      <Navbar />

      {/* Mission Section */}
      <section className="px-6 py-20">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <div>

            <h1 className="text-5xl md:text-7xl font-black uppercase mb-10">
              Our Mission
            </h1>

            <p className="text-xl md:text-2xl leading-loose text-blue-100">
              Our organization is dedicated to enriching the lives of youth
              through basketball programs that foster academic achievement,
              sportsmanship, leadership, respect, and positive community
              engagement, while developing well-rounded student-athletes who
              succeed both on and off the court.
            </p>

          </div>

          {/* Right Side Image */}
          <div className="flex justify-center">

            <Image
              src="/mission-image.png"
              alt="Palmetto Select Mission"
              width={700}
              height={900}
              priority
              className="rounded-3xl shadow-2xl border border-blue-300"
            />

          </div>

        </div>

      </section>

      <Footer />

    </main>
  )
}
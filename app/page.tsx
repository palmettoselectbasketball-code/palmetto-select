import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <main className="bg-[#021B4E] min-h-screen text-white">

      <Navbar />

      {/* Hero Section */}
      <section className="px-6 py-20">

        <div className="max-w-5xl mx-auto text-center">

          {/* Logo */}
          <div className="flex justify-center mb-12">
            <Image
              src="/logo.png"
              alt="Palmetto Select Logo"
              width={500}
              height={500}
              priority
              className="drop-shadow-2xl"
            />
          </div>

          {/* Mission */}
          <div className="bg-[#032B75] border border-blue-300 rounded-3xl p-10 shadow-2xl">

            <h1 className="text-4xl md:text-5xl font-black uppercase mb-8">
              Our Mission
            </h1>

            <p className="text-xl md:text-2xl leading-relaxed text-blue-100">
              Our organization is dedicated to enriching the lives of youth
              through basketball programs that foster academic achievement,
              sportsmanship, leadership, respect, and positive community
              engagement, while developing well-rounded student-athletes who
              succeed both on and off the court.
            </p>

          </div>

        </div>

      </section>

      <Footer />

    </main>
  )
}
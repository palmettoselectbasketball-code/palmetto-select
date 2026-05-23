import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function RegistrationPage() {
  return (
    <main className="bg-[#021B4E] min-h-screen text-white">

      <Navbar />

      <section className="px-6 py-24">

        <div className="max-w-4xl mx-auto text-center">

          <h1 className="text-5xl md:text-7xl font-black uppercase mb-10">
            Registration
          </h1>

          <div className="bg-[#032B75] border border-blue-300 rounded-3xl p-12 shadow-2xl">

            <h2 className="text-3xl md:text-4xl font-black uppercase mb-8">
              Coming Winter 2026
            </h2>

            <p className="text-xl md:text-2xl leading-relaxed text-blue-100">
              Registration and tryout information for Palmetto Select Basketball
              will be available in Winter 2026.
            </p>

            <p className="text-lg text-blue-200 mt-8">
              Please check back soon for updates regarding teams, schedules,
              and player evaluations.
            </p>

          </div>

        </div>

      </section>

      <Footer />

    </main>
  )
}
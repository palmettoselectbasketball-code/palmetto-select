import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function ContactPage() {
  return (
    <main className="bg-[#021B4E] min-h-screen text-white">

      <Navbar />

      <section className="px-6 py-24">

        <div className="max-w-4xl mx-auto text-center">

          <h1 className="text-5xl md:text-7xl font-black uppercase mb-10">
            Contact Us
          </h1>

          <div className="bg-[#032B75] border border-blue-300 rounded-3xl p-12 shadow-2xl">

            <h2 className="text-3xl md:text-4xl font-black uppercase mb-8">
              Get In Touch
            </h2>

            <p className="text-xl md:text-2xl leading-relaxed text-blue-100 mb-10">
              For questions about Palmetto Select Basketball, upcoming
              programs, or future registration opportunities, please contact us
              by email.
            </p>

            <div className="mb-10">

              <a
                href="mailto:PalmettoSelectBasketball@gmail.com"
                className="inline-block bg-white text-[#021B4E] font-bold px-6 py-3 rounded-2xl text-base md:text-lg break-all hover:scale-105 transition"
              >
                PalmettoSelectBasketball@gmail.com
              </a>

            </div>

            <div className="mt-8">

              <p className="text-blue-200 text-lg mb-4">
                Fort Mill, South Carolina
              </p>

              <a
                href="https://www.instagram.com/palmettoselectbasketball/"
                target="_blank"
                className="inline-block text-blue-100 hover:text-white text-xl font-semibold"
              >
                @palmettoselectbasketball
              </a>

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </main>
  )
}
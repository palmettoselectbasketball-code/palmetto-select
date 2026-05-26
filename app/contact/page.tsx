export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#021B4E] text-white px-4 py-10">

      <div className="max-w-4xl mx-auto">

        {/* PAGE TITLE */}
        <h1 className="text-4xl md:text-6xl font-extrabold uppercase text-center mb-10">
          Contact Us
        </h1>

        {/* CONTACT CARD */}
        <div className="bg-[#0B2E84] border border-blue-300 rounded-2xl p-6 md:p-10 shadow-lg text-center">

          <p className="text-xl md:text-3xl leading-relaxed mb-8">
            For questions regarding teams, events, partnerships,
            or player development opportunities, please contact us at:
          </p>

          <a
            href="mailto:info@palmettoselectbasketball.com"
            className="text-2xl md:text-4xl font-bold text-blue-300 hover:text-white transition break-words"
          >
            info@palmettoselectbasketball.com
          </a>

        </div>

      </div>

    </main>
  );
}
export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#021B4E] text-white px-4 py-10">

      <div className="max-w-4xl mx-auto">

        {/* PAGE TITLE */}
        <h1 className="text-4xl md:text-6xl font-extrabold uppercase text-center mb-10">
          Contact Us
        </h1>

        {/* CONTACT CARD */}
        <div className="bg-[#0B2E84] border border-blue-300 rounded-2xl p-6 md:p-10 shadow-lg">

          <p className="text-lg md:text-2xl text-center leading-relaxed mb-10">
            We would love to hear from you. Please reach out with any
            questions regarding teams, tryouts, camps, partnerships,
            or player development opportunities.
          </p>

          {/* CONTACT FORM */}
          <form className="flex flex-col gap-6">

            <input
              type="text"
              placeholder="Your Name"
              className="p-4 rounded-lg text-black"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="p-4 rounded-lg text-black"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="p-4 rounded-lg text-black"
            />

            <textarea
              placeholder="Your Message"
              rows={6}
              className="p-4 rounded-lg text-black"
            />

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 transition text-white font-bold py-4 rounded-lg"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

    </main>
  );
}
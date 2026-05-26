export default function RegistrationPage() {
  return (
    <main className="min-h-screen bg-[#021B4E] text-white px-4 py-10">

      <div className="max-w-4xl mx-auto">

        {/* PAGE TITLE */}
        <h1 className="text-4xl md:text-6xl font-extrabold uppercase text-center mb-10">
          Registration
        </h1>

        {/* REGISTRATION CARD */}
        <div className="bg-[#0B2E84] border border-blue-300 rounded-2xl p-6 md:p-10 shadow-lg">

          <p className="text-lg md:text-2xl text-center leading-relaxed mb-8">
            Thank you for your interest in Palmetto Select Basketball.
            Registration information for upcoming teams, tryouts,
            camps, and events will be posted here.
          </p>

          {/* SAMPLE FORM */}
          <form className="flex flex-col gap-6">

            <input
              type="text"
              placeholder="Player Name"
              className="p-4 rounded-lg text-black"
            />

            <input
              type="text"
              placeholder="Parent / Guardian Name"
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
              placeholder="Additional Information"
              rows={5}
              className="p-4 rounded-lg text-black"
            />

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 transition text-white font-bold py-4 rounded-lg"
            >
              Submit Registration
            </button>

          </form>

        </div>

      </div>

    </main>
  );
}
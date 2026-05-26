import Image from "next/image"

export default function MissionPage() {
  return (
    <main className="min-h-screen bg-[#021B4E] text-white px-4 py-10">
      <div className="max-w-5xl mx-auto">

        {/* Image First */}
        <div className="flex justify-center mb-8">
          <Image
            src="/mission-image.png"
            alt="Palmetto Select Mission"
            width={500}
            height={500}
            className="rounded-2xl border border-blue-300 shadow-lg w-full max-w-md h-auto"
            priority
          />
        </div>

        {/* Mission Content */}
        <div className="bg-[#0A2C78] border border-blue-300 rounded-2xl p-6 md:p-10 shadow-lg">

          <h1 className="text-4xl md:text-6xl font-extrabold uppercase text-center mb-8">
            Our Mission
          </h1>

          <p className="text-lg md:text-2xl leading-relaxed text-center">
            Our organization is dedicated to enriching the lives of youth
            through basketball programs that foster academic achievement,
            sportsmanship, leadership, respect, and positive community
            engagement, while developing well-rounded student-athletes who
            succeed both on and off the court.
          </p>

        </div>
      </div>
    </main>
  )
}
import Image from "next/image";

export default function MissionPage() {
  return (
    <main className="min-h-screen bg-[#021B4E] text-white">

      {/* PAGE CONTAINER */}
      <div className="max-w-6xl mx-auto px-4 py-10">

        {/* MOBILE IMAGE FIRST */}
        <div className="flex flex-col items-center gap-8">

          {/* IMAGE */}
          <div className="w-full max-w-md">
            <Image
              src="/mission-image.png"
              alt="Palmetto Select Mission"
              width={500}
              height={500}
              className="rounded-2xl border border-blue-300 w-full h-auto"
              priority
            />
          </div>

          {/* MISSION CARD */}
          <div className="bg-[#0B2E84] border border-blue-300 rounded-2xl p-6 md:p-10 shadow-lg w-full max-w-3xl">

            <h1 className="text-4xl md:text-6xl font-extrabold uppercase text-center mb-8">
              Our Mission
            </h1>

            <p className="text-lg md:text-2xl leading-10 text-center">
              Our organization is dedicated to enriching the lives of youth
              through basketball programs that foster academic achievement,
              sportsmanship, leadership, respect, and positive community
              engagement, while developing well-rounded student-athletes who
              succeed both on and off the court.
            </p>

          </div>

        </div>

      </div>

    </main>
  );
}
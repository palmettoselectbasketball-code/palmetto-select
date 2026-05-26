import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#021B4E] text-white flex flex-col items-center justify-center px-4 py-10">

      {/* MAIN LOGO */}
      <Image
        src="/logo.png"
        alt="Palmetto Select Basketball"
        width={500}
        height={500}
        className="w-full max-w-md h-auto mb-10"
        priority
      />

      {/* MISSION STATEMENT */}
      <div className="max-w-4xl text-center">

        <h1 className="text-4xl md:text-6xl font-extrabold uppercase mb-8">
          Our Mission
        </h1>

        <p className="text-lg md:text-2xl leading-relaxed">
          Our organization is dedicated to enriching the lives of youth
          through basketball programs that foster academic achievement,
          sportsmanship, leadership, respect, and positive community
          engagement, while developing well-rounded student-athletes who
          succeed both on and off the court.
        </p>

      </div>

    </main>
  );
}
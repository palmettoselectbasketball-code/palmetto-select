import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="bg-[#021B4E] border-b border-blue-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="Palmetto Select Logo"
            width={90}
            height={90}
            priority
          />
        </div>

        <div className="flex gap-8 text-white font-bold uppercase tracking-wide text-lg">
          <Link href="/" className="hover:text-blue-300 transition">
            Home
          </Link>

          <Link href="/mission" className="hover:text-blue-300 transition">
            Mission
          </Link>

          <Link href="/registration" className="hover:text-blue-300 transition">
            Registration
          </Link>

          <Link href="/contact" className="hover:text-blue-300 transition">
            Contact Us
          </Link>
        </div>

      </div>
    </nav>
  )
}
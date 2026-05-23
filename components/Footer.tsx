export default function Footer() {
  return (
    <footer className="bg-[#021B4E] border-t border-blue-300 text-white mt-20">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-10 text-center">

          {/* Location */}
          <div>
            <h3 className="text-2xl font-black uppercase mb-4 text-blue-300">
              Location
            </h3>

            <p className="text-lg">
              📍 Fort Mill, South Carolina
            </p>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-2xl font-black uppercase mb-4 text-blue-300">
              Socials
            </h3>

            <a
              href="https://instagram.com/palmettoselectbasketball"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:text-blue-300 transition"
            >
              @palmettoselectbasketball
            </a>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-2xl font-black uppercase mb-4 text-blue-300">
              Contact Us
            </h3>

            <a
              href="mailto:PalmettoSelectBasketball@gmail.com"
              className="text-lg hover:text-blue-300 transition"
            >
              PalmettoSelectBasketball@gmail.com
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-400 mt-10 pt-6 text-center text-sm text-blue-200">
          © 2025 Palmetto Select Basketball. All Rights Reserved.
        </div>

      </div>
    </footer>
  )
}
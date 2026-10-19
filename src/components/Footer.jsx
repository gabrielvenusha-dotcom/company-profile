import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-gray-200">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <h3 className="mb-2 text-lg font-bold text-white">
            Nusa<span className="text-accent">Studio</span>
          </h3>
          <p className="text-sm">
            Studio digital yang membantu bisnis tampil profesional lewat website,
            aplikasi, dan desain brand.
          </p>
        </div>
        <div>
          <h4 className="mb-2 font-semibold text-white">Menu</h4>
          <ul className="space-y-1 text-sm">
            <li><Link to="/tentang" className="hover:text-accent">Tentang Kami</Link></li>
            <li><Link to="/layanan" className="hover:text-accent">Layanan</Link></li>
            <li><Link to="/portofolio" className="hover:text-accent">Portofolio</Link></li>
            <li><Link to="/kontak" className="hover:text-accent">Kontak</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-2 font-semibold text-white">Kontak</h4>
          <p className="text-sm">Jl. Merdeka No. 10, Bandung</p>
          <p className="text-sm">halo@nusastudio.id</p>
        </div>
      </div>
      <p className="border-t border-white/10 py-4 text-center text-xs">
        &copy; 2026 Nusa Studio. untuk untuk tugas React &amp; Tailwind CSS.
      </p>
    </footer>
  );
}

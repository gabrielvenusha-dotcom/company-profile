import { Link } from "react-router-dom";
import Card from "../components/Card";
import services from "../data/services.json";

export default function Home() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-dark to-brand px-6 py-24 text-center text-white md:py-32">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-sm tracking-widest text-accent">STUDIO DIGITAL BANDUNG</p>
          <h1 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-6xl">
            Wujudkan Bisnis Anda di Dunia Digital
          </h1>
          <p className="mb-8 text-base text-blue-100 md:text-lg">
            Kami membuat website, aplikasi, dan identitas brand yang rapi, cepat, dan siap tumbuh bersama bisnis Anda.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Link to="/kontak" className="rounded-full bg-accent px-6 py-3 font-semibold text-gray-900 transition hover:bg-yellow-400">
              Konsultasi Gratis
            </Link>
            <Link to="/portofolio" className="rounded-full border border-white px-6 py-3 transition hover:bg-white/10">
              Lihat Portofolio
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <h2 className="mb-3 text-2xl font-bold text-brand-dark md:text-3xl">Tentang Nusa Studio</h2>
        <p className="text-gray-600">
          Berdiri sejak 2019, Nusa Studio sudah membantu puluhan UMKM dan organisasi membangun kehadiran digital
          yang profesional. Kami percaya teknologi harus sederhana, terjangkau, dan benar-benar berguna.
        </p>
      </section>

      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-center text-2xl font-bold text-brand-dark md:text-3xl">Layanan Unggulan</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 3).map((s) => (
              <Card key={s.id} icon={s.icon} title={s.title}>
                {s.description}
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/layanan" className="font-semibold text-brand hover:underline">
              Lihat semua layanan &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import Card from "../components/Card";
import team from "../data/team.json";

const misi = [
  "Menyediakan solusi digital yang sesuai kebutuhan klien.",
  "Menjaga kualitas kode dan desain di setiap project.",
  "Membangun hubungan jangka panjang yang jujur dan transparan.",
];

export default function About() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="mb-10 text-center text-3xl font-bold text-brand-dark">Tentang Kami</h1>

      <section className="mb-14">
        <h2 className="mb-3 text-xl font-semibold">Sejarah Singkat</h2>
        <p className="text-gray-600">
          Nusa Studio berawal dari tiga teman kuliah yang membantu usaha keluarga membuat website pada 2019.
          Dari satu project kecil, kini kami melayani klien dari berbagai bidang: kuliner, kesehatan, fesyen,
          hingga pendidikan.
        </p>
      </section>

      <section className="mb-14 grid gap-6 md:grid-cols-2">
        <Card title="Visi">
          Menjadi mitra digital terpercaya bagi bisnis lokal di seluruh Indonesia.
        </Card>
        <Card title="Misi">
          <ul className="list-disc space-y-1 pl-5">
            {misi.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </Card>
      </section>

      <section>
        <h2 className="mb-6 text-xl font-semibold">Profil Tim</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((t) => (
            <Card key={t.id} badge={t.role} title={t.name}>
              {t.bio}
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

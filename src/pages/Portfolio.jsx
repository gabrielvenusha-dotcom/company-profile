import Card from "../components/Card";
import portfolio from "../data/portfolio.json";
import clients from "../data/clients.json";

export default function Portfolio() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="mb-10 text-center text-3xl font-bold text-brand-dark">Portofolio</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {portfolio.map((p) => (
          <Card key={p.id} badge={p.category} title={p.title} subtitle={`${p.client} · ${p.year}`}>
            {p.description}
          </Card>
        ))}
      </div>

      <section className="mt-16 text-center">
        <h2 className="mb-6 text-xl font-semibold">Klien Kami</h2>
        <ul className="flex flex-wrap justify-center gap-3">
          {clients.map((c) => (
            <li key={c} className="rounded-full bg-gray-100 px-5 py-2 text-sm">
              {c}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

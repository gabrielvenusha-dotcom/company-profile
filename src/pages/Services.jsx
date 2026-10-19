import Card from "../components/Card";
import services from "../data/services.json";

export default function Services() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="mb-3 text-center text-3xl font-bold text-brand-dark">Layanan Kami</h1>
      <p className="mx-auto mb-10 max-w-xl text-center text-gray-600">
        Dari ide sampai rilis, kami bantu di setiap tahap.
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <Card key={s.id} icon={s.icon} title={s.title}>
            {s.description}
          </Card>
        ))}
      </div>
    </div>
  );
}

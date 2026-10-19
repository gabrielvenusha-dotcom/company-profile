import { useState } from "react";

const emptyForm = { nama: "", email: "", pesan: "" };

function validate(form) {
  const errors = {};
  if (!form.nama.trim()) errors.nama = "Nama wajib diisi.";
  if (!form.email.trim()) errors.email = "Email wajib diisi.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
    errors.email = "Format email tidak valid.";
  if (form.pesan.trim().length < 10) errors.pesan = "Pesan minimal 10 karakter.";
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSent(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = validate(form);
    setErrors(result);
    if (Object.keys(result).length === 0) {
      setSent(true);
      setForm(emptyForm);
    }
  };

  const inputClass = (name) =>
    `w-full rounded-lg border px-4 py-2 outline-none focus:ring-2 focus:ring-brand ${
      errors[name] ? "border-red-500" : "border-gray-300"
    }`;

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="mb-10 text-center text-3xl font-bold text-brand-dark">Hubungi Kami</h1>

      <div className="grid gap-10 md:grid-cols-2">
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          <div>
            <label htmlFor="nama" className="mb-1 block text-sm font-medium">Nama</label>
            <input id="nama" name="nama" value={form.nama} onChange={handleChange} className={inputClass("nama")} />
            {errors.nama && <p className="mt-1 text-sm text-red-600">{errors.nama}</p>}
          </div>
          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium">Email</label>
            <input id="email" name="email" type="email" value={form.email} onChange={handleChange} className={inputClass("email")} />
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="pesan" className="mb-1 block text-sm font-medium">Pesan</label>
            <textarea id="pesan" name="pesan" rows="5" value={form.pesan} onChange={handleChange} className={inputClass("pesan")} />
            {errors.pesan && <p className="mt-1 text-sm text-red-600">{errors.pesan}</p>}
          </div>
          <button type="submit" className="w-full rounded-full bg-brand px-6 py-3 font-semibold text-white transition hover:bg-brand-dark sm:w-auto">
            Kirim Pesan
          </button>
          {sent && (
            <p className="rounded-lg bg-green-100 px-4 py-3 text-sm text-green-800">
              Terima kasih! Pesan Anda sudah terkirim.
            </p>
          )}
        </form>

        <div className="space-y-6 text-gray-700">
          <div>
            <h2 className="mb-1 font-semibold">Alamat</h2>
            <p className="text-sm">Jl. Merdeka No. 10, Bandung, Jawa Barat</p>
          </div>
          <div>
            <h2 className="mb-1 font-semibold">Email &amp; Telepon</h2>
            <p className="text-sm">halo@nusastudio.id</p>
            <p className="text-sm">0812-3456-7890</p>
          </div>
          <div>
            <h2 className="mb-1 font-semibold">Media Sosial</h2>
            <ul className="space-y-1 text-sm">
              <li>Instagram: @nusastudio.id</li>
              <li>LinkedIn: Nusa Studio</li>
              <li>GitHub: nusa-studio</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

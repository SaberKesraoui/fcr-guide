export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
      <section className="max-w-2xl text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-400 mb-4">
          Tunisie · Diaspora · FCR
        </p>

        <h1 className="text-5xl font-bold mb-6">
          FCR Guide
        </h1>

        <p className="text-lg text-slate-300 mb-8">
          Votre assistant pour comprendre, calculer et préparer votre parcours FCR.
        </p>

        <button className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300 transition">
          Commencer
        </button>
      </section>
    </main>
  );
}
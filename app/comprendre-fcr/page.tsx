export default function ComprendreFcrPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-12">
      <section className="mx-auto max-w-3xl">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
          Guide FCR
        </p>

        <h1 className="mb-6 text-4xl font-bold">
          Comprendre le FCR
        </h1>

        <p className="mb-4 text-lg text-slate-300">
          Le FCR est un avantage accordé aux Tunisiens résidant à l’étranger sous certaines conditions.
        </p>

        <p className="mb-4 text-slate-300">
          L’objectif de FCR Guide est d’aider l’utilisateur à comprendre les règles, calculer ses périodes de séjour et préparer son projet d’importation de véhicule.
        </p>

        <a
          href="/"
          className="mt-8 inline-block rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300 transition"
        >
          Retour à l’accueil
        </a>
      </section>
    </main>
  );
}
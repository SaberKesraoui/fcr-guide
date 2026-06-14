"use client";

import { useState } from "react";

function addYears(date: Date, years: number) {
  const newDate = new Date(date);
  newDate.setFullYear(newDate.getFullYear() + years);
  return newDate;
}

function formatDate(date: Date) {
  return date.toLocaleDateString("fr-FR");
}

export default function EligibilitePage() {
  const [birthDate, setBirthDate] = useState("");
  const [result, setResult] = useState<string | null>(null);

  function checkAge() {
    if (!birthDate) {
      setResult("Veuillez renseigner votre date de naissance.");
      return;
    }

    const today = new Date();
    const birth = new Date(birthDate);
    const eighteenthBirthday = addYears(birth, 18);

    if (today >= eighteenthBirthday) {
      setResult("✅ Vous remplissez la condition d’âge minimum de 18 ans.");
    } else {
      setResult(
        `❌ Vous ne remplissez pas encore la condition d’âge minimum. Vous serez éligible à partir du ${formatDate(
          eighteenthBirthday
        )}.`
      );
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-12">
      <section className="mx-auto max-w-2xl">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
          Étape 1 sur 7
        </p>

        <h1 className="mb-6 text-4xl font-bold">
          Vérifier mon éligibilité FCR
        </h1>

        <p className="mb-8 text-slate-300">
          Commençons par vérifier la condition d’âge minimum du bénéficiaire.
        </p>

        <label className="mb-3 block text-sm font-medium text-slate-200">
          Date de naissance
        </label>

        <input
          type="date"
          value={birthDate}
          onChange={(event) => setBirthDate(event.target.value)}
          className="mb-8 w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white"
        />

        <button
          onClick={checkAge}
          className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300 transition"
        >
          Vérifier
        </button>

        {result && (
          <div className="mt-8 rounded-2xl border border-slate-700 bg-slate-900 p-6 text-slate-200">
            {result}
          </div>
        )}
      </section>
    </main>
  );
}
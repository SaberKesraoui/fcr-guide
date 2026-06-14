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
  const [step, setStep] = useState(1);
  const [birthDate, setBirthDate] = useState("");
  const [ageResult, setAgeResult] = useState<string | null>(null);
  const [isAdult, setIsAdult] = useState<boolean | null>(null);
  const [eligibilityDate, setEligibilityDate] = useState("");
  const [residencyStartDate, setResidencyStartDate] = useState("");
  const [residencyResult, setResidencyResult] = useState<string | null>(null);
  const [hasTwoYearsResidency, setHasTwoYearsResidency] = useState<boolean | null>(null);

  function checkAge() {
  if (!birthDate) {
    setAgeResult("Veuillez renseigner votre date de naissance.");
    setIsAdult(null);
    setEligibilityDate("");
    return;
  }

  const today = new Date();
  const birth = new Date(birthDate);
  const eighteenthBirthday = addYears(birth, 18);

  if (today >= eighteenthBirthday) {
    setIsAdult(true);
    setEligibilityDate(today.toISOString().split("T")[0]);
    setAgeResult("✅ Vous remplissez la condition d’âge minimum de 18 ans.");
  } else {
    setIsAdult(false);
    setEligibilityDate(eighteenthBirthday.toISOString().split("T")[0]);
    setAgeResult(
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
          Étape {step} sur 7
        </p>

        {step === 1 && (
          <>
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

            {ageResult && (
              <div className="mt-8 rounded-2xl border border-slate-700 bg-slate-900 p-6 text-slate-200">
                <p>{ageResult}</p>

                <button
                    onClick={() => setStep(2)}
                    className="mt-6 rounded-full bg-white px-6 py-3 font-semibold text-slate-950 hover:bg-slate-200 transition"
                >
                    {isAdult
                        ? "Continuer"
                        : "Continuer la simulation avec cette date"}
                </button>
              </div>
            )}
          </>
        )}

        {step === 2 && (
          <>
            <h1 className="mb-6 text-4xl font-bold">
              Résidence à l’étranger
            </h1>

            <p className="mb-8 text-slate-300">
              Indiquez depuis quelle date vous résidez à l’étranger.
            </p>

            <label className="mb-3 block text-sm font-medium text-slate-200">
              Date d’installation à l’étranger
            </label>

            <input
                type="date"
                value={residencyStartDate}
                onChange={(event) => setResidencyStartDate(event.target.value)}
                className="mb-8 w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white"
            />

            <div className="flex gap-4">
              <button
                onClick={() => setStep(1)}
                className="rounded-full border border-slate-600 px-6 py-3 font-semibold text-white hover:bg-slate-800 transition"
              >
                Retour
              </button>

              <button
                onClick={checkResidency}
                className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300 transition"
                >
                    Vérifier
                </button>
                {residencyResult && (
                    <div className="mt-8 rounded-2xl border border-slate-700 bg-slate-900 p-6 text-slate-200">
                         <p>{residencyResult}</p>

                    <button
                        onClick={() => setStep(3)}
                        className="mt-6 rounded-full bg-white px-6 py-3 font-semibold text-slate-950 hover:bg-slate-200 transition"
                                                >
                        {hasTwoYearsResidency
                        ? "Continuer"
        : "Continuer la simulation avec cette date"}
    </button>
  </div>
)}
                </div>
            </>
        )}
      </section>
    </main>
  );
}

function checkResidency() {
  if (!residencyStartDate) {
    setResidencyResult("Veuillez renseigner votre date d’installation à l’étranger.");
    setHasTwoYearsResidency(null);
    return;
  }

  const referenceDate = eligibilityDate ? new Date(eligibilityDate) : new Date();
  const residencyStart = new Date(residencyStartDate);
  const residencyEligibilityDate = addYears(residencyStart, 2);

  if (referenceDate >= residencyEligibilityDate) {
    setHasTwoYearsResidency(true);
    setResidencyResult("✅ Vous remplissez la condition de résidence minimale de 2 ans à l’étranger.");
  } else {
    setHasTwoYearsResidency(false);
    setEligibilityDate(residencyEligibilityDate.toISOString().split("T")[0]);
    setResidencyResult(
      `❌ Vous ne remplissez pas encore la condition de résidence minimale. Vous serez potentiellement éligible à partir du ${formatDate(
        residencyEligibilityDate
      )}.`
    );
  }
}
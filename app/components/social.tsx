"use client";

import { useRouter } from "next/navigation";

export default function Social() {
  const router = useRouter();

  return (
    <main className="flex items-center justify-center h-10  text-white w-70">
      <div className="flex gap-4">
        <button
          onClick={() => router.push("/sign-up")}
          className="bg-red-800 text-white font-medium px-6 py-2 rounded-md hover:bg-red-950"
        >
          Registrar
        </button>
        <button
          onClick={() => router.push("/sign-in")}
          className="border border-white text-white font-medium px-6 py-2 rounded-md hover:bg-red-950"
        >
          Entrar
        </button>
      </div>
    </main>
  );
}
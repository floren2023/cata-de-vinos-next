"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signUp } from "@/lib/auth-client";

export default function SignUpPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const formData = new FormData(e.currentTarget);

    const res = await signUp.email({
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    });

    if (res.error) {
      setError(res.error.message || "Something went wrong.");
    } else {
      router.push("/dashboard");
    }
  }

  return (
    <main className="bg-[#FAF8F5] text-stone-800">
          <div className="max-w-md mx-auto p-6 space-y-4 text-white">
      <h1 className="text-2xl font-bold">Sign Up</h1>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <label htmlFor="name" className="text-red-800 text-md mb-2">Name</label>
        <input
          name="name"
          placeholder="Full Name"
          required
          className="w-full rounded-md bg-neutral-100 border border-neutral-300 px-3 py-2 text-gray-500"
        />
        <label htmlFor="email" className="text-red-800 text-md mb-2">Email</label>
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          className="w-full rounded-md bg-neutral-100 border border-neutral-300 px-3 py-2 text-gray-500"
        />
        <label htmlFor="password" className="text-red-800 text-md mb-2">Contraseña</label>
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          minLength={8} 
          className="w-full rounded-md bg-neutral-100 border border-neutral-300 px-3 py-2 text-gray-500"
        />
        <button
          type="submit"
          className="w-full mb-20 bg-red-800 text-white font-medium rounded-md px-4 py-2 hover:bg-red-900"
        >
        
          Crear Cuenta
        </button>
      </form>
    </div>
    </main>
    
  );
}
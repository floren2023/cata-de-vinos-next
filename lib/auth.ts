// lib/auth.ts
import { prisma } from "../prisma/prisma";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";


export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql", // Cambia a "mysql", "sqlite" o "mongodb" según tu base de datos
  }),
  emailAndPassword: {
    enabled: true,
  },
   socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    },
  },
  // Puedes añadir más plugins aquí (ej. social logins, MFA, etc.)
   trustedOrigins: ["http://localhost:3000"], 
});

"use client";

import LoginForm from "../components/LoginForm";

export default function Home() {
  console.log("Page index rendue (app router)");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md">
        <h1 className="text-2xl mb-4 text-center">Connexion</h1>
        <LoginForm />
      </div>
    </div>
  );
}

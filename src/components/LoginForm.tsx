import React, { useState, useEffect } from "react";
import { TurnstileWidget } from "./TurnstileWidget";

const LoginForm = () => {
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log("LoginForm monté");
    return () => console.log("LoginForm démonté");
  }, []);

  const handleTurnstileSuccess = (token: string) => {
    setTurnstileToken(token);
    setError(null);
  };

  const handleTurnstileError = () => {
    console.log("Turnstile validation failed");
    setTurnstileToken(null);
    setError("La vérification a échoué. Veuillez réessayer.");
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    if (!turnstileToken) {
      setError("Veuillez valider le Turnstile d'abord");
      return;
    }

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.get("email"),
          password: formData.get("password"),
          turnstileToken: turnstileToken,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Une erreur est survenue");
        setTurnstileToken(null);
      }
    } catch (err) {
      setError("Erreur de connexion");
      setTurnstileToken(null);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      {error && <div>Erreur: Composant LoginForm</div>}
      {error && <div className="text-red-500 bg-red-100 p-2 rounded">{error}</div>}

      <div className="mb-4">
        {process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ? (
          <TurnstileWidget
            siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
            onSuccess={handleTurnstileSuccess}
            onError={handleTurnstileError}
          />
        ) : (
          <div className="text-red-500">Clé Turnstile non trouvée</div>
        )}
      </div>

      {turnstileToken && (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md">
          <div>
            <label htmlFor="email" className="block mb-2">
              Email
            </label>
            <input type="email" id="email" name="email" required className="w-full p-2 border rounded" />
          </div>

          <div>
            <label htmlFor="password" className="block mb-2">
              Mot de passe
            </label>
            <input type="password" id="password" name="password" required className="w-full p-2 border rounded" />
          </div>

          <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Se connecter
          </button>
        </form>
      )}
    </div>
  );
};

export default LoginForm;

"use client";

export default function Debug() {
  return (
    <div className="p-4">
      <h1>Debug Variables Environnement</h1>
      <pre>
        {JSON.stringify(
          {
            NEXT_PUBLIC_TURNSTILE_SITE_KEY: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY,
            NODE_ENV: process.env.NODE_ENV,
          },
          null,
          2
        )}
      </pre>
    </div>
  );
}

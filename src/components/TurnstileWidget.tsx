import { useEffect, useRef, useState } from "react";

interface TurnstileWidgetProps {
  siteKey: string;
  onSuccess: (token: string) => void;
  onError?: () => void;
}

export const TurnstileWidget = ({ siteKey, onSuccess, onError }: TurnstileWidgetProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const widgetIdRef = useRef<string>();

  useEffect(() => {
    // Éviter les chargements multiples
    if (!window.turnstile) {
      const script = document.createElement("script");
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
      script.async = true;
      script.defer = true;

      script.onload = () => {
        setIsLoaded(true);
      };

      document.head.appendChild(script);
    } else {
      setIsLoaded(true);
    }

    return () => {
      if (widgetIdRef.current) {
        window.turnstile?.remove(widgetIdRef.current);
        widgetIdRef.current = undefined;
      }
    };
  }, []);

  useEffect(() => {
    if (isLoaded && containerRef.current && !widgetIdRef.current) {
      if (!window.turnstile) {
        console.error("Turnstile not loaded");
        onError?.();
        return;
      }

      try {
        widgetIdRef.current = window.turnstile.render(containerRef.current, {
          sitekey: siteKey,
          callback: onSuccess,
          "error-callback": onError,
          theme: "light",
          appearance: "always",
        });
      } catch (error) {
        console.error("Error initializing Turnstile:", error);
        onError?.();
      }
    }
  }, [isLoaded, siteKey, onSuccess, onError]);

  return (
    <div>
      <div ref={containerRef} className="turnstile-container" />
      <style jsx>{`
        .turnstile-container {
          min-height: 65px;
          margin: 10px 0;
        }
      `}</style>
    </div>
  );
};

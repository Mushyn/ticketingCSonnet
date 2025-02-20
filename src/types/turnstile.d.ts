interface TurnstileObject {
  render: (
    container: HTMLElement,
    options: {
      sitekey: string;
      callback: (token: string) => void;
      "error-callback"?: () => void;
      theme?: "light" | "dark";
      appearance?: "always" | "execute" | "interaction-only";
    }
  ) => string;
  remove: (widgetId: string) => void;
}

declare global {
  interface Window {
    turnstile?: TurnstileObject;
    onTurnstileLoad?: () => void;
  }
}

export {};

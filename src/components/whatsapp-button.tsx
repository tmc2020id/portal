import styles from "./whatsapp-button.module.css";

// Sales and WhatsApp number shown in the company details (+963 965 445 580).
const WHATSAPP_NUMBER = "963965445580";

type WhatsAppButtonProps = {
  label: string;
  // Prefilled first message, so the team knows the chat started on the website.
  message: string;
};

// Clicks are counted as "whatsapp_click" by instrumentation-client.ts.
export function WhatsAppButton({ label, message }: WhatsAppButtonProps) {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <a
      className={styles.button}
      href={href}
      target="_blank"
      rel="noopener"
      aria-label={label}
      title={label}
      data-track-placement="floating"
    >
      <svg aria-hidden="true" viewBox="0 0 32 32" className={styles.icon}>
        <path d="M16.02 3C8.84 3 3 8.83 3 16c0 2.29.6 4.53 1.74 6.5L3 29l6.68-1.75A12.98 12.98 0 0 0 16.02 29C23.19 29 29 23.17 29 16S23.19 3 16.02 3zm0 23.8c-2.02 0-4-.54-5.72-1.57l-.41-.24-3.96 1.04 1.06-3.86-.27-.4A10.73 10.73 0 0 1 5.2 16c0-5.96 4.85-10.8 10.82-10.8 5.96 0 10.8 4.84 10.8 10.8 0 5.96-4.84 10.8-10.8 10.8zm5.93-8.09c-.33-.16-1.93-.95-2.23-1.06-.3-.11-.52-.16-.73.16-.22.33-.84 1.06-1.03 1.27-.19.22-.38.25-.71.08-.33-.16-1.38-.51-2.63-1.62-.97-.87-1.63-1.93-1.82-2.26-.19-.33-.02-.5.14-.67.15-.15.33-.38.49-.57.16-.19.22-.33.33-.54.11-.22.05-.41-.03-.57-.08-.16-.73-1.77-1-2.42-.27-.64-.54-.55-.73-.56h-.62c-.22 0-.57.08-.87.41-.3.33-1.14 1.11-1.14 2.71 0 1.6 1.17 3.14 1.33 3.36.16.22 2.3 3.5 5.56 4.91.78.34 1.38.54 1.86.69.78.25 1.49.21 2.05.13.63-.09 1.93-.79 2.2-1.55.27-.76.27-1.41.19-1.55-.08-.14-.3-.22-.63-.38z" />
      </svg>
    </a>
  );
}

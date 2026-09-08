/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GOOGLE_SHEET_URL: string;
  readonly VITE_EMAIL_API: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

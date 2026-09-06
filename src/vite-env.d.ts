/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_LAB_SUPABASE_URL: string;
  readonly VITE_LAB_SUPABASE_ANON_KEY: string;
  readonly VITE_LAB_DEMO_LOGIN?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

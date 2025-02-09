import { createClient } from "@supabase/supabase-js";

// For development, we'll use a mock client if env vars are not set
const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL || "https://mock.supabase.co";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "mock-key";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Log warning if using mock values
if (
  !import.meta.env.VITE_SUPABASE_URL ||
  !import.meta.env.VITE_SUPABASE_ANON_KEY
) {
  console.warn(
    "Supabase credentials not found. Using mock values for development.",
  );
}

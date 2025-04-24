import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jpkomdvhoupaxacixpei.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impwa29tZHZob3VwYXhhY2l4cGVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUyMTY5MDYsImV4cCI6MjA2MDc5MjkwNn0.uBXDaF5ie6FpddWmV5iFXaMf7L9T2EQvsxv5_HnTV0E';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
console.log("Supabase client initialized", supabase);

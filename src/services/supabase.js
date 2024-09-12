import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zkgzazgzzbxwilangvpk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InprZ3phemd6emJ4d2lsYW5ndnBrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYxNDgyMDMsImV4cCI6MjA0MTcyNDIwM30.fDk49mNpimcqlUAAvY7zK991-5wJq4krMJEQkATZWHU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

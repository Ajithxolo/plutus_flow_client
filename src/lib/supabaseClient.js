// src/lib/supabaseClient.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient("https://bzvygkguqecddmbkpaxy.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ6dnlna2d1cWVjZGRtYmtwYXh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMwNzAzNzMsImV4cCI6MjA1ODY0NjM3M30.Q6fxBXWaX-LnVRYCf6cubI6jKsUYz9qKNoe3air3xR0");

export default supabase;
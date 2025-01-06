import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://dgmykjchkqruwtqvlrmc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRnbXlramNoa3FydXd0cXZscm1jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYxMjU3NjAsImV4cCI6MjA1MTcwMTc2MH0.6QsmJqNqon9pzdDzBOWjKZgXT94V4yMwAZ5C4Dg_GgU";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase
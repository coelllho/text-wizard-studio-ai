// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://tbvymumxisguybvxzcbf.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRidnltdW14aXNndXlidnh6Y2JmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA3NjUwOTUsImV4cCI6MjA2NjM0MTA5NX0.ptzX1F3cLiiocEQPW3ZsjOTByZo9e_M78EmMYBUiqGw";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://pydgylznyhzqkcbvfcpl.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB5ZGd5bHpueWh6cWtjYnZmY3BsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDczODY3MTYsImV4cCI6MjA2Mjk2MjcxNn0.tU76MyO1nETwTi-roZoe5r0O5Czv9jxd1CMTQDnRDjs';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

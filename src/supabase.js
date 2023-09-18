import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://tqdmywgvevlkngjvxkcy.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRxZG15d2d2ZXZsa25nanZ4a2N5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM4MTQ1ODgsImV4cCI6MjAwOTM5MDU4OH0.HNfaquToN5syGbz7m17-rf1FfYDeH7pquYexmGySt00';
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;
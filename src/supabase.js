import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://haqfhdjzvotveqhuioyh.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhhcWZoZGp6dm90dmVxaHVpb3loIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUwMTk3MDEsImV4cCI6MjAxMDU5NTcwMX0.rQMcPyPuixH6lH2blttKpb9kHUzantnTYaveJFfCCIE';
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;
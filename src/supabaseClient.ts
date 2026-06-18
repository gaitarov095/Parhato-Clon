import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'данный URL неккоректный';
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY || 'данный ключ неккоректный';

export const supabase = createClient(supabaseUrl, supabaseKey)

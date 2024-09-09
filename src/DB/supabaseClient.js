import {createClient} from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.PUBLIC_DB_URL
const supabaseAnonKey = import.meta.env.PUBLIC_DB_APIKEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

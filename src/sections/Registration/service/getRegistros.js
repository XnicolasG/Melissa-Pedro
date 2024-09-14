import { createClient } from "@supabase/supabase-js"

const supabaserUrl = import.meta.env.PUBLIC_DB_URL
const supabaseKey = import.meta.env.PUBLIC_DB_APIKEY
const supabase = createClient(supabaserUrl, supabaseKey)

export async function getRegistros() {
    const { data, error } = await supabase
        .from('TRegistrations')
        .select(`
        *,
        TMeals(
        vegetarian_count,
        meat_count
        )
        `);
        if (error) {
            console.log('Error al traer registros:', error);
            return []  
        }        
        return data
}
import { createClient } from "@supabase/supabase-js"


const supabaserUrl = import.meta.env.PUBLIC_DB_URL
const supabaseKey = import.meta.env.PUBLIC_DB_APIKEY
const supabase = createClient(supabaserUrl, supabaseKey)

export async function insertRegistro({
    registration_type,
    number_of_people,
    names,
    description,
    attending,
    vegetarian_count,
    meat_count,
}) {
    const { data: registrationData, error: registrationError } = await supabase
    .from('TRegistrations')
    .insert([
        {
            registration_type,
            number_of_people,
            names,
            description,
            attending,
            created_at: new Date()
        }
    ])
    .select(); 
if (registrationError) {
    console.error('Error al insertar registro:');
    return;
}

const registration_id = registrationData[0].id; // Obtenemos el id generado

const { data: mealsData, error: mealsError } = await supabase
    .from('TMeals')
    .insert([
        {
            registration_id,
            vegetarian_count,
            meat_count
        }
    ]);

    if (mealsError) {
        console.log('Error al insertar los platos:');

    } else {
        console.log('Registro insertado correctamente:', 'registration:', registrationData, 'mealsData:', mealsData);
    }
}
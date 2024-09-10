import React from 'react'
import { Minus } from '../../../components/icons/Minus'
import { Plus } from '../../../components/icons/Plus'

export const MealSelector = ({ meatCount, vegetarianCount, incrementMeal, decrementMeal }) => {
  return (
    <section className="flex gap-x-6 items-center" >
    <div className='flex flex-col items-center '>
        <p>Carne / Pollo</p>
        <div className='flex'>
            <button
                className='mealButton'
                type="button"
                onClick={() => decrementMeal('meatCount')}
            >
                <Minus />
            </button>
            <input
                value={meatCount}
                type="number"
                className='w-12 px-2 text-center rounded outline-none border border-emerald-700' />
            <button
                className='mealButton'
                type="button"
                onClick={() => incrementMeal('meatCount')}
            >
                <Plus />
            </button>
        </div>
    </div>
    <div className='flex flex-col items-center'>
        <p>Vegetariano</p>
        <div className='flex'>
            <button
                className='mealButton'
                type="button"
                onClick={() => decrementMeal('vegetarianCount')}

            >
                <Minus />
            </button>
            <input
                value={vegetarianCount}
                type="number"
                className='w-12 px-2 text-center rounded outline-none border border-emerald-700' />
            <button
                className='mealButton'
                type="button"
                onClick={() => incrementMeal('vegetarianCount')}
            >
                <Plus />
            </button>
        </div>
    </div>

</section>
  )
}

import React, { useCallback } from 'react'

export const useMealCounter = (state, setState, maxLimit) => {

  const totalPlates = state.meatCount + state.vegetarianCount
  
    const incrementMeal = useCallback((type) => {
      setState((prevState) => {
        if(prevState[type] < maxLimit && totalPlates < maxLimit){
          return {
            ...prevState,
            [type]: prevState[type] + 1
          }
        }
        return prevState;
      })
    }, [setState, maxLimit])

    const decrementMeal = useCallback((type) => {
      setState((prevState) => {
        if (prevState[type] > 0) {
          return {
            ...prevState,
            [type]: prevState[type] - 1
          }
        }
        return prevState;
      })
    }, [setState])

  return {incrementMeal, decrementMeal, totalPlates}
}

import React, { useCallback } from 'react'

export const useMealCounter = (state, setState, maxLimit) => {
    const incrementMeal = useCallback((type) => {
      setState((prevState) => {
        const total = prevState.meatCount + prevState.vegetarianCount;
        if(prevState[type] < maxLimit && total < maxLimit){
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
  return {incrementMeal, decrementMeal}
}

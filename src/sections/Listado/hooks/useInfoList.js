import React, { useEffect, useState } from 'react'

export const useInfoList = ({list,setDisplayList}) => {
    const [isAttending, setIsAttending] = useState([])
    const [meal, setMeal] = useState({
        meat: 0,
        veggie: 0
    })
    useEffect(() => {
        if (list.length > 0 ) {
            setDisplayList(list);

            setIsAttending(
                list
                    .filter(it => it.attending !== false)
                    .reduce((acc, item) => acc + item.number_of_people, 0)
            );

            setMeal((prevState) => {
                return {
                    ...prevState,
                    meat: list
                        .filter(it => it.attending !== false)
                        .reduce((acc, item) => {
                            return acc + item.TMeals.reduce((acc, meal) => acc + meal.meat_count, 0);
                        }, 0),
                    veggie: list
                    .filter(it => it.attending !== false)
                    .reduce((acc, item) => {
                        return acc + item.TMeals.reduce((acc, meal) => acc + meal.vegetarian_count, 0);
                    }, 0),
                };
            });
        }
    }, [list])
  return {
    isAttending,meal
  }
}

import React, { useCallback, useState } from 'react'

export const useHandleErrors = (isAttending,totalPlates,totalMembers) => {
    const [state, setState] = useState({
        attendanceError: false,
        platesError: false
    })
    const missingAttendance = useCallback(() => {
        return isAttending === null;
    }, [isAttending])

    const validatePlates = useCallback(() => {
        return totalPlates < totalMembers
    },[])
    return { 
        missingAttendance,
        validatePlates,
        state, 
        setState 
    }
}

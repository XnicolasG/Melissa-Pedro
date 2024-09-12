import React, { useState } from 'react'

export const useManageMembers = () => {
    const minLimit = 3;
    const [totalMembers, setTotalMembers] = useState(minLimit)

    const incrementMembers = () => {
        if (totalMembers < 10) {
            setTotalMembers(totalMembers => totalMembers + 1);
        }
    }

    const decrementMembers = () => {
        if (totalMembers > minLimit) {
            setTotalMembers(totalMembers => totalMembers - 1);
        }
    }
  return {incrementMembers,decrementMembers,totalMembers }
}

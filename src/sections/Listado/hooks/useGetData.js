import React, { useEffect, useState } from 'react'
import { getRegistros } from '../../Registration/service/getRegistros';

export const useGetData = () => {
    const [list, setList] = useState([]);
      
    useEffect(() => {
      async function fetchData() {
        try {
          const data = await getRegistros();
          setList(data);        
        } catch (err) {
          console.log('error en useGetData:', err);
          
        }
      }
      fetchData();
    }, []);
    return {list}
}

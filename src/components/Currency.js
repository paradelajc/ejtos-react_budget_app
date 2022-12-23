import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const { dispatch } = useContext(AppContext)
  const [currency, setCurrency] = useState("£")
  // const handleOnChange = (e) => {
    // setCurrency(e.target.value)
    // dispatch({
    //   type: 'CHG_CURRENCY',
    //   payload: currency
    // })
  // }
  useEffect(() => {
    dispatch({
      type: 'CHG_CURRENCY',
      payload: currency
    })
  }, [currency, dispatch])

  return (
    <div className='alert alert-secondary'>
      <span>Currency:
        <select onChange={(e) => setCurrency(e.target.value)}>
          <option  value="£" name="pound" defaultValue>£ Pound</option>
          <option value="$">$ Dollar</option>
          <option value="€" name="euro">€ Euro</option>
          <option value="₹" name="ruppee">₹ Ruppee</option>
        </select>
      </span>
    </div>
  )
}

export default Currency
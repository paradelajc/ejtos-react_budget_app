import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
	const { dispatch, expenses, currency } = useContext(AppContext);
  const [budget, setBudget] = useState(2000)
  const totalExpenses = expenses.reduce((total, item) => {
		return (total += item.cost);
	}, 0);
  // console.log(remaining)
  // const handleChange = event => {
  // console.log(remaining)
  //   setBudget(parseInt(event.target.value))
  // if (budget > 20000) {
  //   alert("Budget cannot exceed 20000")
  //   // setBudget(remaining)
  // }
  // if (remaining < 0) {
  //   alert("You cannot reduce the budget value lower then the spending")
  //   // setBudget(remaining)
  // }

  useEffect(() => {
    if (budget > 20000) {
      alert("Budget cannot exceed 20000")
      setBudget(20000)
    }
    if (budget < totalExpenses) {
      alert("You cannot reduce the budget value lower then the spending")
      setBudget(totalExpenses)
    }
    dispatch({
      type: 'SET_BUDGET',
      payload: budget
    })
  }, [budget, dispatch, totalExpenses])

  //   if (budget <= remaining) {
  //     alert("You cannot reduce the budget value lower then the spending")
  //     // setBudget(remaining)
  //   }
    // dispatch({
    //   type: 'SET_BUDGET',
    //   payload: budget
    // })


	return (
		<div className='alert alert-secondary'>
			<span>Budget: {currency}<input
        required='required'
        type='number'
        id='budget'
        value={budget}
        step='10'
        onChange={(e) => setBudget(parseInt(e.target.value))}>
      </input></span>
		</div>
	);
};

export default Budget;

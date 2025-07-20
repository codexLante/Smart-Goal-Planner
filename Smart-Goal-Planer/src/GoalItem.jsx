
import { useState } from 'react';

const GoalItem = ({ goal, updateGoal, deleteGoal }) => {
  const [savedAmount, setSavedAmount] = useState(goal.savedAmount);

  const handleDeposit = () => {
    const newSavedAmount = savedAmount + parseFloat(prompt("Enter deposit amount:"));
    updateGoal(goal.id, { ...goal, savedAmount: newSavedAmount });
    setSavedAmount(newSavedAmount);
  };

  return (
    <div className="goal-item">
      <h3>{goal.name}</h3>
      <p>Target: Ksh {goal.targetAmount} | Saved: Ksh {savedAmount}</p>
      <button onClick={handleDeposit}>Deposit</button>
      <button onClick={() => deleteGoal(goal.id)}>Delete</button>
    </div>
  );
};

export default GoalItem;

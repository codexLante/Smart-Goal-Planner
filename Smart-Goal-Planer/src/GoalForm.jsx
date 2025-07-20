
import { useState } from 'react';

const GoalForm = ({ addGoal }) => {

  const [name, setName] = useState('');
  const [targetAmount, setTargetAmount] = useState('');
  const [category, setCategory] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new goal object
    const newGoal = {
      name,
      targetAmount: parseFloat(targetAmount), // Ensure it's a number
      savedAmount: 0,
      category,
      deadline,
      createdAt: new Date().toISOString(),
    };


    addGoal(newGoal); // Call the addGoal function with the new goal

    // Use a string to reset the string 
    setName('');
    setTargetAmount('');
    setCategory('');
    setDeadline('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Goal Name"
        required
      />
      <input
        type="number"
        value={targetAmount}
        onChange={(e) => setTargetAmount(e.target.value)}
        placeholder="Target Amount"
        required
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
        required
      />
      <input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
        required
      />
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default GoalForm;

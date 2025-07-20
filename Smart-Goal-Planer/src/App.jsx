
import { useEffect, useState } from 'react';
import GoalList from './GoalList';
import GoalForm from './GoalForm';
import Overview from './Overview';
import './App.css'; 

const App = () => {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetchGoals();
  }, []);

  const fetchGoals = async () => {
    const response = await fetch('http://localhost:3000/goals');
    const data = await response.json();
    setGoals(data);
  };

  const addGoal = async (goal) => {
    const response = await fetch('http://localhost:3000/goals', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(goal),
    });
    const newGoal = await response.json();

    setGoals([...goals, newGoal]); // Update the state with the new goal

  };

  const updateGoal = async (id, updatedGoal) => {
    await fetch(`http://localhost:3000/goals/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedGoal),
    });
    setGoals(goals.map(goal => (goal.id === id ? updatedGoal : goal)));
  };

  const deleteGoal = async (id) => {
    await fetch(`http://localhost:3000/goals/${id}`, {
      method: 'DELETE',
    });
    setGoals(goals.filter(goal => goal.id !== id));
  };

  return (
    <div>
      <h1>Smart Goal Planner</h1>
      <GoalForm addGoal={addGoal} />
      <GoalList goals={goals} updateGoal={updateGoal} deleteGoal={deleteGoal} />
      <Overview goals={goals} />
    </div>
  );
};

export default App;


const Overview = ({ goals }) => {

  const totalGoals = goals.length;
  const totalSaved = goals.reduce((acc, goal) => acc + goal.savedAmount, 0);
  const completedGoals = goals.filter(goal => goal.savedAmount >= goal.targetAmount).length;

  const currentDate = new Date();
  const goalDetails = goals.map(goal => {
    const deadlineDate = new Date(goal.deadline);
    const timeLeft = Math.ceil((deadlineDate - currentDate) / (1000 * 60 * 60 * 24)); // Days left
    const isOverdue = timeLeft < 0 && goal.savedAmount < goal.targetAmount;
    const isWarning = timeLeft <= 30 && timeLeft >= 0 && goal.savedAmount < goal.targetAmount;

    return {
      ...goal,
      timeLeft,
      isOverdue,
      isWarning,
    };
  });

  return (
    <div className="overview">
      <h2>Overview</h2>
      <p>Total Goals: {totalGoals}</p>
      <p>Total Saved: KSH {totalSaved}</p>
      <p>Completed Goals: {completedGoals}</p>
      <h3>Goal Details:</h3>
      <ul>
        {goalDetails.map(goal => (
          <li key={goal.id}>
            <strong>{goal.name}</strong>: 
            {goal.isOverdue ? (
              <span style={{ color: 'red' }}> Overdue!</span>
            ) : goal.isWarning ? (
              <span style={{ color: 'orange' }}> {goal.timeLeft} days left!</span>
            ) : (
              <span> {goal.timeLeft} days left</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Overview;

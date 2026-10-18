export default function DashboardStats({
  totalMembers,
  totalContributions,
  activeMembers,
  averageContribution,
}) {
  return (
    <div className="dashboard-stats">
      <div className="stat-card">
        <h3>Total Members</h3>
        <p>{totalMembers}</p>
      </div>

      <div className="stat-card">
        <h3>Total Contributions</h3>
        <p>₦{totalContributions.toLocaleString()}</p>
      </div>

      <div className="stat-card">
        <h3>Active Members</h3>
        <p>{activeMembers}</p>
      </div>

      <div className="stat-card">
        <h3>Average Contribution</h3>
        <p>₦{averageContribution.toLocaleString()}</p>
      </div>
    </div>
  );
}

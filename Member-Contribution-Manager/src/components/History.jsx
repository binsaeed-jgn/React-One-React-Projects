export default function History({ member }) {
  return (
    <div className="history">
      <h3>{member.name}</h3>

      <p>
        <strong>Current Contribution:</strong> ₦
        {member.contribution.toLocaleString()}
      </p>

      <h3>Transaction History</h3>

      {member.history.length === 0 ? (
        <p className="no-history">
          No transactions yet.
        </p>
      ) : (
        <ul className="history-list">
          {member.history.map((transaction) => (
            <li
              key={transaction.id}
              className={`transaction ${transaction.type}`}
            >
              <div>
                <strong>
                  {transaction.type === "credit"
                    ? "Credit"
                    : "Debit"}
                </strong>
              </div>
              <p>{transaction.date}</p>

              <strong>
                {transaction.type === "credit"
                  ? "+"
                  : "-"}
                ₦{transaction.amount.toLocaleString()}
              </strong>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

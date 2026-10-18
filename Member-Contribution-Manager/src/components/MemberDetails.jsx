import { useState } from "react";
export default function MemberDetails({
  member,
  onUpdateContribution,
  onShowHistory,
  showHistory,
}) {
  const [credit, setCredit] = useState(0);
  const [debit, setDebit] = useState(0);

  function handleUpdate(e) {
    e.preventDefault();

    if (credit < 0 || debit < 0) {
      alert("Amount cannot be negative.");
      return;
    }

    if (credit > 0 && debit > 0) {
      alert(
        "Please enter either a credit or a debit, not both."
      );
      return;
    }

    if (credit === 0 && debit === 0) {
      alert("Please enter an amount.");
      return;
    }

    if (debit > member.contribution) {
      alert(
        "Debit amount cannot be greater than the current contribution."
      );
      return;
    }

    onUpdateContribution(
      member.id,
      credit,
      debit
    );

    setCredit(0);
    setDebit(0);
  }

  return (
    <div className="member-details">
      <h2>Member Details</h2>

      <img
        src={member.image}
        alt={member.name}
        className="details-image"
      />

      <h3>{member.name}</h3>

      <div className="details-info">
        <p>
          <strong>Contribution:</strong> ₦
          {member.contribution.toLocaleString()}
        </p>

        <p>
          <strong>Phone:</strong> {member.phone}
        </p>

        <p>
          <strong>Joined Date:</strong> {member.joinedDate}
        </p>

        <p>
          <strong>Status:</strong> {member.status}
        </p>
      </div>

      <form
        className="contribution-form"
        onSubmit={handleUpdate}
      >
        <h3>Update Contribution</h3>

        <label htmlFor="credit">
          Credit
        </label>
        <input
          type="number"
          id="credit"
          min="0"
          value={credit}
          onChange={(e) =>
            setCredit(Number(e.target.value))
          }
        />

        <label htmlFor="debit">
          Debit
        </label>
        <input
          type="number"
          id="debit"
          min="0"
          value={debit}
          onChange={(e) =>
            setDebit(Number(e.target.value))
          }
        />

        <button
          className="button"
          type="submit"
        >
          Update Contribution
        </button>
      </form>
      <button
        className="button history-button"
        type="button"
        onClick={onShowHistory}
      > 
        {showHistory ? "Hide History" : "View History"}
      </button>
    </div>
  );
}

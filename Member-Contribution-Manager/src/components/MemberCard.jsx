export default function MemberCard({
  member,
  onViewDetails,
  selectedMemberId,
  onDeleteMember,
}) {
  const isSelected = selectedMemberId === member.id;

  return (
    <li
      className={`member-card ${
        isSelected ? "selected" : ""
      }`}
    >
      <img
        src={member.image}
        alt={member.name}
        className="member-image"
      />

      <div className="member-info">
        <h3>{member.name}</h3>

        <p className="contribution">
          Contribution: ₦
          {member.contribution.toLocaleString()}
        </p>

        <p>Phone: {member.phone}</p>
        <p>Joined: {member.joinedDate}</p>

        <p>
          Status:{" "}
          <span className={`status ${member.status}`}>
            {member.status}
          </span>
        </p>
      </div>

      <div className="member-actions">
        <button
          type="button"
          className="details-button"
          onClick={() => onViewDetails(member.id)}
        >
          {isSelected ? "Hide Details" : "View Details"}
        </button>

        <button
          type="button"
          className="delete-button"
          onClick={() => onDeleteMember(member.id)}
        >
          Delete Member
        </button>
      </div>
    </li>
  );
}

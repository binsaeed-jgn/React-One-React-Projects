import MemberCard from "./MemberCard";

export default function MemberList({
  members,
  onViewDetails,
  selectedMemberId,
  onDeleteMember,
}) {
  if (members.length === 0) {
    return (
      <p className="no-results">
        No members found. Try another search.
      </p>
    );
  }

  return (
    <ul className="member-list">
      {members.map((member) => (
        <MemberCard
          key={member.id}
          member={member}
          onViewDetails={onViewDetails}
          selectedMemberId={selectedMemberId}
          onDeleteMember={onDeleteMember}
        />
      ))}
    </ul>
  );
}

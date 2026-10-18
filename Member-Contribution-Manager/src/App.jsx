import { useState } from "react";
import Dashboard from "./components/Dashboard"
import SearchBar from "./components/SearchBar";
import MemberList from "./components/MemberList";
import AddMember from "./components/AddMember";
import MemberDetails from "./components/MemberDetails";
import History from "./components/History"
import "./App.css";

const initialMembers = [
  {
    id: 1,
    name: "Aisha Bello",
    image: "https://i.pravatar.cc/150?u=118836",
    contribution: 25000,
    phone: "08031234567",
    joinedDate: "2026-01-15",
    status: "active",
     history: [],
  },
  {
    id: 2,
    name: "Chidi Okafor",
    image: "https://i.pravatar.cc/150?u=933372",
    contribution: 18500,
    phone: "08123456789",
    joinedDate: "2026-02-10",
    status: "active",
    history: [],
  },
  {
    id: 3,
    name: "Babajide Olusegun",
    image: "https://i.pravatar.cc/150?u=499476",
    contribution: 42000,
    phone: "09055566677",
    joinedDate: "2025-11-05",
    status: "inactive",
    history: [],
  },
];

function App() {
  const [memberList, setMemberList] = useState(initialMembers);
  const [showAddMember, setShowAddMember] = useState(false);
  const [selectedMemberId, setSelectedMemberId] = useState(null);
  const [showHistory, setShowHistory] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const filteredMembers = memberList.filter((member) =>
    member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    member.phone.includes(searchQuery)
  );
  const selectedMember = memberList.find(
    (member) => member.id === selectedMemberId
  );
  const totalMembers = memberList.length;
  const totalContributions = memberList.reduce(
    (total, member) => total + member.contribution,
    0
  );
  const activeMembers = memberList.filter(
    (member) => member.status === "active"
  ).length;
  const averageContribution =
    totalMembers === 0
      ? 0
      : Math.round(totalContributions / totalMembers);

  function handleAddMember(newMember) {
    setMemberList((prevMembers) => [
      ...prevMembers,
      newMember,
    ]);
    setShowAddMember(false);
  }

  function handleShowAddMember() {
    setShowAddMember((prevState) => !prevState);
  }

  function handleViewDetails(id) {
    setSelectedMemberId((currentId) => {
      const newId = currentId === id ? null : id;
      setShowHistory(false);
      return newId;
    });
}

  function handleShowHistory() {
  setShowHistory((prev) => !prev);
}

function handleUpdateContribution(
  memberId,
  credit,
  debit
) {
  setMemberList((prevMembers) =>
    prevMembers.map((member) => {
      if (member.id === memberId) {
        const newContribution =
          member.contribution + credit - debit;

        if (newContribution < 0) {
          alert("Contribution cannot be negative.");
          return member;
        }

        let newTransaction = null;

        if (credit > 0) {
          newTransaction = {
            id: crypto.randomUUID(),
            type: "credit",
            amount: credit,
            date: new Date().toLocaleString(),
          };
        }

        if (debit > 0) {
          newTransaction = {
            id: crypto.randomUUID(),
            type: "debit",
            amount: debit,
            date: new Date().toLocaleString(),
          };
        }

        return {
          ...member,
          contribution: newContribution,
          history: [
            ...member.history,
            newTransaction,
          ],
        };
      }

      return member;
    })
  );
}

function handleDeleteMember(id) {
  const confirmed = window.confirm(
    "Are you sure you want to delete this member?"
  );

  if (!confirmed) return;

  setMemberList((prevMembers) =>
    prevMembers.filter((member) => member.id !== id)
  );

  if (selectedMemberId === id) {
    setSelectedMemberId(null);
    setShowHistory(false);
  }
}


  return (
    <div className="app">
      <h1>Contribution Manager</h1>
      <Dashboard
        totalMembers={totalMembers}
        totalContributions={totalContributions}
        activeMembers={activeMembers}
        averageContribution={averageContribution}
      />
      
      

      <div className="container">
        <div className="side-bar">
          <button
            className="button add-member"
            onClick={handleShowAddMember}>
            {showAddMember ? "Close" : "Add Member"}
          </button>

          {showAddMember && (
            <AddMember onAddMember={handleAddMember} />
          )}
          <SearchBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
          <MemberList
            members={filteredMembers}
            onViewDetails={handleViewDetails}
            selectedMemberId={selectedMemberId}
            onDeleteMember={handleDeleteMember}
          />
        </div>

        <div className="details-container">
          {selectedMember ? (
            <>
              <MemberDetails
                member={selectedMember}
                onUpdateContribution={handleUpdateContribution}
                onShowHistory={handleShowHistory}
                showHistory={showHistory}
              />

              {showHistory && (
                <History member={selectedMember} />
              )}
            </>
          ) : (
            <div className="empty-details">
              <h2>Member Details</h2>
              <p>
                Select a member to view their details and
                manage their contribution.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

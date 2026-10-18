import { useState } from "react";

export default function AddMember({ onAddMember }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState(
    "https://i.pravatar.cc/150?u=new-member"
  );
  const [contribution, setContribution] = useState(0);
  const [phone, setPhone] = useState("");
  const [joinedDate, setJoinedDate] = useState("");
  const [status, setStatus] = useState("active");

  function handleSubmit(e) {
    e.preventDefault();

    if (
      !name.trim() ||
      !phone.trim() ||
      !joinedDate
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    if (contribution < 0) {
      alert("Contribution cannot be negative.");
      return;
    }

    const newMember = {
      id: crypto.randomUUID(),
      name: name
        .trim()
        .split(/\s+/)
        .map(
          (word) =>
            word.charAt(0).toUpperCase() +
            word.slice(1).toLowerCase()
        )
        .join(" "),
      image: image.trim(),
      contribution,
      phone: phone.trim(),
      joinedDate,
      status,
      history: [],
    };

    onAddMember(newMember);

    // Reset form
    setName("");
    setImage(
      "https://i.pravatar.cc/150?u=new-member"
    );
    setContribution(0);
    setPhone("");
    setJoinedDate("");
    setStatus("active");
  }

  return (
    <div className="add-member-container">
      <h2>Add New Member</h2>

      <form
        className="add-member-form"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">
          Member Name
        </label>

        <input
          type="text"
          id="name"
          placeholder="Enter member name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <label htmlFor="image">
          Image URL
        </label>

        <input
          type="url"
          id="image"
          placeholder="Enter image URL"
          value={image}
          onChange={(e) =>
            setImage(e.target.value)
          }
        />

        <label htmlFor="contribution">
          Initial Contribution
        </label>

        <input
          type="number"
          id="contribution"
          min="0"
          placeholder="Enter contribution"
          value={contribution}
          onChange={(e) =>
            setContribution(
              Number(e.target.value)
            )
          }
        />

        <label htmlFor="phone">
          Phone Number
        </label>

        <input
          type="tel"
          id="phone"
          placeholder="Enter phone number"
          value={phone}
          onChange={(e) =>
            setPhone(e.target.value)
          }
        />

        <label htmlFor="joinedDate">
          Joined Date
        </label>

        <input
          type="date"
          id="joinedDate"
          value={joinedDate}
          onChange={(e) =>
            setJoinedDate(e.target.value)
          }
        />

        <label htmlFor="status">
          Status
        </label>

        <select
          id="status"
          value={status}
          onChange={(e) =>
            setStatus(e.target.value)
          }
        >
          <option value="active">
            Active
          </option>

          <option value="inactive">
            Inactive
          </option>
        </select>

        <button
          className="button"
          type="submit"
        >
          Add Member
        </button>
      </form>
    </div>
  );
}

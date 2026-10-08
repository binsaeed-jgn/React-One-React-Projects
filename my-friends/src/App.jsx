  import {useState} from 'react'
import FriendList from "./components/FriendList"
import FriendForm from "./components/FriendForm"
import FormSplitBill from "./components/FormSplitBill"
import Button from "./components/Button"
import "./App.css"

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];
function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friend, setFriend] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);
  function handleShowFriend(){
    setShowAddFriend((showFriend)=>!showFriend)
  }

  function handleAddFriend(newFriend){
    setFriend((friend)=>[...friend, newFriend])
    setShowAddFriend(false)
  }
  function handleSelectFriend(friend){
    setSelectedFriend((cur)=> cur?.id === friend.id ? null : friend)
    selectedFriend && setShowAddFriend(false)
  }
  function handleSplitBill(value){
    setFriend((friend)=> friend.map((f)=>
      f.id === selectedFriend.id ?
     {...f, balance: f.balance + value}
      : f))
    setSelectedFriend(null)
  }
  return (
    <div className="app">
      <div className="sidebar">
          <FriendList
           friends = {friend}
           onSelectFriend={handleSelectFriend}
           selectedFriend={selectedFriend}
        
          />

          {showAddFriend && (<FriendForm
               onAddFriend={handleAddFriend}
          />)}
 
          <Button onClick={handleShowFriend}>{showAddFriend ? "Close": "Add Friend"}</Button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    
    </div>
  )
}

export default App


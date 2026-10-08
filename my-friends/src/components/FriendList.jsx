import Friend from "./Friend"




export default function FriendList({friends, onSelectFriend, selectedFriend}){

  return(
    <div className="">
      <ul>
        {friends.map((friend)=>(
          <Friend 
            friend = {friend} 
            key={friend.id} 
            onSelectFriend={onSelectFriend}
            selectedFriend={selectedFriend} 
          />
        ))}

      </ul>

    </div>

  )
}


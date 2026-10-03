
export default function Stats({items}){
  if(!items.length) return(
    <p className="stats">
      <em>Start adding some items to package list</em>
    </p>
  );

  const numItems = items.length;
  const numPacked = items.filter((item)=> item.packed).length;
  const numPercent = Math.round((numPacked/numItems) * 100)
  return(
    <footer className="stats">
      <em>
        
        {numPercent === 100 ? 
        `You packed Everythings`:
        `You have ${numItems} Items in your list, and you already pack ${numPacked} (${numPercent})`
          
      }

      </em>
    </footer>
  )
}

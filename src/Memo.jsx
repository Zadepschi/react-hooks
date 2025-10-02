import { useMemo, useState } from "react";

const fruits = [
    {id: "1", item: "Peach" },
    {id: "2", item: "Apple" },
    {id: "3", item: "Banana" },
    {id: "4", item: "Pineapple" },
    {id: "5", item: "Plum" },
    {id: "6", item: "Lemon" }
]
function Memo() {
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");


  const handleText = (e) => {
    setText(e.target.value)
  }

  const handleSearch = () => {
    setSearch(text)
  }

  //const filteredFruits = fruits.filter((fruit) => {
  //console.log("Filtering")
  //  return  fruit.item.toLowerCase().includes(search.toLowerCase())
  //})

const filteredFruits = useMemo(() =>  fruits.filter((fruit) => {
    console.log("Filtering")
    return  fruit.item.toLowerCase().includes(search.toLowerCase())
}), [search])


    return (
        <div className="memo">
    <h2>Memo Filtering</h2>
    <input type="text" onChange={handleText}/>
    <button type="button" onClick={handleSearch}>Search</button>
    <div> 
       { filteredFruits.map((filteredFruit) => (  
      <p key={filteredFruit.id}> {filteredFruit.item} </p>
       ))}
          
   </div>
        </div>
    )
}

export default Memo;
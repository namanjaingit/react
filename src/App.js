import { useState, useEffect } from "react";
import "./App.css";
import SearchBox from "./components/search-box/search-box.component";
import CardList from "./components/card-list/card-list.component";

const App = () => {
  console.log('rendered')
  const [monsters, setMonsters] = useState([]);
  const [filteredMonster, setFilteredMonster] = useState(monsters);
  const [searchString , setSearchString] = useState('');

  // it will run only once as it has no dependency for re rendering
  useEffect(() => {
    const monsterUrl = "https://jsonplaceholder.typicode.com/users";
    fetch(monsterUrl)
      .then((response) => response.json())
      .then((users) => {
        setMonsters(() => users);
    });
  }, [])  

  const onSearchStringChange = (event) => {
    const searchFieldValue =  event.target.value.toLowerCase()
    setSearchString(searchFieldValue);
  };

  // it will run as and when monsters and search string states changes
  useEffect(() => {
    const filterMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchString);
    });
    setFilteredMonster(filterMonsters); 
  }, [monsters, searchString])
  

  return (
    <div className="App">
      <h1 className="app-title">Monster Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchStringChange}
        classes="monster_input"
        id="monster_input"
        placeholder="Search Monster"
      ></SearchBox> 

      {filteredMonster.length ? (
        <CardList data={filteredMonster}></CardList>
      ) : (
        <h1>No Monster Found</h1>
      )}
    </div>
  );
};

export default App;

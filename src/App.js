import "./App.css";
// import { Component } from "react";
import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
    const [searchField, setSearchField] = useState("");
    const [monsters, setMonsters] = useState([]);
    const [filteredMonsters, setFilteredMonsters] = useState(monsters);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((users) => setMonsters(users));
    }, []); // We only want this fetch to happen once unless the data changes

    const onSearchChange = (event) => {
        const searchFieldString = event.target.value.toLowerCase();
        setSearchField(searchFieldString);
    };

    useEffect(() => {
        const newFilteredMonsters = monsters.filter((monster) => {
            return monster.name.toLowerCase().includes(searchField);
        });
        setFilteredMonsters(newFilteredMonsters);
    }, [monsters, searchField]);

    return (
        <div className="App">
            <h1 className="app-title">React Monster Rolodex</h1>

            <SearchBox
                className="monsters-search-box"
                onChangeHandler={onSearchChange}
                placeholder={"search monsters"}
            />
            <CardList monsters={filteredMonsters} />
        </div>
    );
};

export default App;

// class App extends Component {
//     constructor() {
//         super();
//         this.state = {
//             monsters: [],
//             searchField: "",
//         };
//         //console.log("Life cycle method: 1-component");
//     }

// componentDidMount() {
//     //console.log("Life cycle method: 3-componentDidMount");
//     fetch("https://jsonplaceholder.typicode.com/users")
//         .then((response) => response.json())
//         .then((users) =>
//             this.setState(
//                 () => {
//                     return { monsters: users };
//                 },
//                     () => {
//                         console.log(this.state);
//                     }
//                 )
//             );
//     }

// onSearchChange = (event) => {
//     const searchField = event.target.value.toLowerCase();
//     this.setState(() => {
//         return { searchField };
//     });
// };

//     render() {
//         // console.log("Life cycle method: 2-render");
//         const { monsters, searchField } = this.state;
//         const { onSearchChange } = this;

//         const filteredMonsters = monsters.filter((monster) => {
//             return monster.name.toLowerCase().includes(searchField);
//         });

//         return (
//             <div className="App">
//                 <h1 className="app-title">React Monster Rolodex</h1>

//                 <SearchBox
//                     className="monsters-search-box"
//                     onChangeHandler={onSearchChange}
//                     placeholder={"search monsters"}
//                 />
//                 <CardList monsters={filteredMonsters} />
//             </div>
//         );
//     }
// }

// export default App;

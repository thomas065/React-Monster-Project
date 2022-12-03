
import "./App.css";
import { Component } from "react";

class App extends Component {
    constructor() {
        super();
        this.state = {
          monsters: [],
          searchField: ''
        };
        console.log("Life cycle method: 1-constructor");
    }

    // First time component is rendered
  
    componentDidMount() {
        console.log("Life cycle method: 3-componentDidMount");
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((users) =>
                this.setState(
                    () => {
                        return { monsters: users };
                    },
                    () => {
                        console.log(this.state);
                    }
                )
            );
    }

    render() {
      console.log("Life cycle method: 2-render");

      const filteredMonsters = this.state.monsters.filter((monster) => {
          return monster.name.toLowerCase().includes(this.state.searchField);
      });

        return (
            <div className="App">
                <input
                    className="search-box"
                    type="search"
                    placeholder="Search Monsters"
                    onChange={(event) => {
                        const searchField = event.target.value.toLowerCase();
                        this.setState(() => {
                            return { searchField };
                        });
                    }}
                />
                {filteredMonsters.map((monster) => {
                    return (
                        <div key={monster.id}>
                            <h1>{monster.name}</h1>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default App;

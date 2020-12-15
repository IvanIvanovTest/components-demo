import React, {Component} from "react";
import Person from "./Person/Person";
import './App.css';


class App extends Component {
    state = {
        people: [
            {name: 'Dmitrii', age: 28, about: "Hobby: Video Games"},
            {name: 'John', age: 30, about: "Likes drinking alone"}
        ]
    };

    changeName = () => {
        const people = [...this.state.people];
        const person = {...people[1]};
        person.name = 'John Doe';
        people[1] = person;
        this.setState({people});
    };

    increaseAge = () => {
        const people = this.state.people.map((person) => {
            return {
                ...person,
                age: person.age + 1
            };
        });
        this.setState({people});
    };

    render() {
        return (
            <div className="App">
                <Person name={this.state.people[0].name} age={this.state.people[0].age}>
                    {this.state.people[0].about}
                </Person>
                <Person name={this.state.people[1].name} age={this.state.people[1].age}>
                    {this.state.people[1].about}
                </Person>
                <div><button onClick={this.changeName}>Change name</button></div>
                <div><button onClick={this.increaseAge}>Increase Age</button></div>
            </div>
        );
    }
}

export default App;

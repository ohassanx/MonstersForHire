import React, {Component}  from 'react';
import './App.css';
import {CardList } from './components/card-list/card-list';
import {SearchBox} from './components/searchBox/searchBox';
class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters:[],
      searchField: ''
    };
  }
  componentWillMount(){
    fetch('https://jsonplaceholder.typicode.com/users') 
    .then(response => response.json ())
    .then(users => this.setState({monsters: users}))
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value});
  }
  render () {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
       
    return( 
    <div className="App">
      <h1>Monsters For Hire</h1>
        <SearchBox 
        placeholder = 'search monsters'
        handleChange={this.handleChange}
        />
    <CardList monsters= {filteredMonsters}>
    </CardList>
  </div>
);
  }
    
}

export default App;

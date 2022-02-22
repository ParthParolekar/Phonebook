import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import Input from "./components/Input";
import SearchResults from "./components/SearchResults";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [nameSearch, setNameSearch] = useState("");
  const [searchResults, setSearchResults] = useState(persons);

  const filteredItems = (array, searchTerm) => {
    // return array.filter(el => el.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1)
    return array.filter(
      (el) =>
        el.name.slice(0, searchTerm.length).toLowerCase() ===
        searchTerm.toLowerCase()
    );
  };

  const searchHandler = (event) => {
    setNameSearch(event.target.value);
    const results = filteredItems(persons, event.target.value);
    setSearchResults(results);
  };

  const nameChangeHandler = (event) => {
    setNewName(event.target.value);
  };

  const numberChangeHandler = (event) => {
    setNewNumber(event.target.value);
  };

  const addName = (event) => {
    event.preventDefault();
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} already exists`);
    } else if (persons.some((person) => person.number === newNumber)) {
      alert(`${newNumber} already exists`);
    } else {
      const newNameObj = [{ name: newName, number: newNumber }];
      setPersons(persons.concat(newNameObj));
      setSearchResults(searchResults.concat(newNameObj));
      setNewName("");
      setNewNumber("");
    }
  };

  return (
    <div>
      <h1>Phonebook</h1>

      <Input
        inputName="Search by name:"
        inputType="text"
        inputValue={nameSearch}
        inputHandler={searchHandler}
      ></Input>

      <h2>Add a new number</h2>

      <Form
        addName={addName}
        newName={newName}
        nameChangeHandler={nameChangeHandler}
        newNumber={newNumber}
        numberChangeHandler={numberChangeHandler}
      ></Form>

      <h2>Numbers</h2>

      <SearchResults searchResults={searchResults}></SearchResults>
    </div>
  );
};

export default App;

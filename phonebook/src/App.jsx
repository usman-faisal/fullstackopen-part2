import {useEffect, useState} from 'react'
import PersonForm from "./components/PersonForm.jsx";
import Filter from "./components/Filter.jsx";
import Persons from "./components/Persons.jsx";
import personService from "./services/persons.js"
const App = () => {
    const [persons, setPersons] = useState([])

    const [filter,setFilter] = useState("")

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    }
    useEffect(() => {
        personService
            .getAll()
            .then(newPerson => {
                setPersons(persons.concat(newPerson))
            })
    }, []);

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter filter={filter} handleFilterChange={handleFilterChange}/>
            <h2>Add a new</h2>
            <PersonForm persons={persons} setPersons={setPersons}/>
            <h2>Numbers</h2>
            <Persons setPersons={setPersons} filter={filter} persons={persons}/>
        </div>
    )
}

export default App
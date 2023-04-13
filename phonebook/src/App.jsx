import {useEffect, useState} from 'react'
import PersonForm from "./components/PersonForm.jsx";
import Filter from "./components/Filter.jsx";
import Persons from "./components/Persons.jsx";
import axios from "axios";

const App = () => {
    const [persons, setPersons] = useState([])

    const [filter,setFilter] = useState("")

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    }
    useEffect(() => {
        axios.get("http://localhost:3001/persons")
            .then(response => {
                setPersons(response.data)
            })
    }, []);

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter filter={filter} handleFilterChange={handleFilterChange}/>
            <h2>Add a new</h2>
            <PersonForm persons={persons} setPersons={setPersons}/>
            <h2>Numbers</h2>
            <Persons filter={filter} persons={persons}/>
        </div>
    )
}

export default App
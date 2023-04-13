import {useEffect, useState} from 'react'
import PersonForm from "./components/PersonForm.jsx";
import Filter from "./components/Filter.jsx";
import Persons from "./components/Persons.jsx";
import personService from "./services/persons.js"
import Notification from "./components/Notification.jsx";
const App = () => {
    const [persons, setPersons] = useState([])
    const [message,setMessage] = useState({
        text: "",
        type: null,
    });
    const [filter,setFilter] = useState("")
    const showNotification = (text,type) => {
        setMessage({
            text,
            type
        })
        setTimeout(() => {
            setMessage({
                text: null,
                type: null
            })
        },2000)
    }
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
            <Notification message={message} />
            <Filter filter={filter} handleFilterChange={handleFilterChange}/>
            <h2>Add a new</h2>
            <PersonForm showNotification={showNotification} persons={persons} setPersons={setPersons}/>
            <h2>Numbers</h2>
            <Persons showNotification={showNotification} setPersons={setPersons} filter={filter} persons={persons}/>
        </div>
    )
}

export default App
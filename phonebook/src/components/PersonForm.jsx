import React, {useState} from 'react';
import personService from "../services/persons.js";
const PersonForm = ({setPersons,persons,showNotification}) => {
    const [newName, setNewName] = useState('')
    const [newNumber,setNewNumber] = useState('')

    const clearInputState = () => {
        setNewName("");
        setNewNumber("");
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const existingPerson = persons.find(person => person.name === newName);
        if(existingPerson){
            const confirm = window.confirm(`${newName} is already added to your phonebook replace the old with a new one?`);
            if(!confirm) return;
            const updatedPerson = {
                ...existingPerson,
                number: newNumber,
            }
            personService.update(existingPerson.id,updatedPerson)
                .then(res => {
                    setPersons(persons.map(person => person.name === res.name ? res : person ))
                    clearInputState();
                    showNotification(`Updated ${res.name}`,"message")
                })
                .catch(err => {
                    showNotification(`Information of ${existingPerson.name} has already removed from the server.`,"error")
                    setPersons(persons.filter(person => person.name !== existingPerson.name ))
                })
            return;
        }
        const newPerson = {
            name: newName,
            number: newNumber,
        }
        personService.create(newPerson)
            .then(newPerson => {
                setPersons(persons.concat(newPerson))
                clearInputState();
                showNotification(`Added ${newPerson.name}`,"message")
            })
    }
    const handleNameChange = (e) => {
        setNewName(e.target.value)
    }
    const handleNumberChange = (e) => {
        setNewNumber(e.target.value);
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                name: <input value={newName} onChange={handleNameChange}/>
            </div>
            <div>number: <input value={newNumber} onChange={handleNumberChange}/></div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    );
};

export default PersonForm;

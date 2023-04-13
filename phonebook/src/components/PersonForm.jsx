import React, {useState} from 'react';
import personService from "../services/persons.js";
const PersonForm = ({setPersons,persons}) => {
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
                    setPersons(persons.map(person => person.name === existingPerson.name ? res : person ))
                    clearInputState();
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
            })
        clearInputState();
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

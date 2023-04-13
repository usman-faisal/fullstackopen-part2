import React, {useState} from 'react';

const PersonForm = ({setPersons,persons}) => {
    const [newName, setNewName] = useState('')
    const [newNumber,setNewNumber] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        const isNotUnique = persons.find(person => person.name === newName);
        if(isNotUnique) return alert(`${newName} is already added to your phonebook`);
        const newPerson = {
            name: newName,
            number: newNumber,
            id: persons.length + 1
        }
        setPersons(persons.concat(newPerson))
        setNewName("");
        setNewNumber("")
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

import React from 'react';
import Person from "./Person.jsx";
import personService from "../services/persons.js"
const Persons = ({filter,persons,setPersons,showNotification}) => {
    const handleDeleteClick = (id) => {
        const person = persons.find(person => person.id === id)
        const confirm = window.confirm(`Delete ${person.name}?`)
        if(!confirm) return;
        personService.remove(id)
            .then(data => {
                setPersons(persons.filter(person => person.id !== id));
                showNotification(`Deleted ${person.name}`,"message")
            })
    }
    return (
            <ul>
                {persons.filter(person => person.name.includes(filter))
                    .map(person =>
                            <Person handleDeleteClick={handleDeleteClick} key={person.id} person={person}/>
                )}
            </ul>
    );
};

export default Persons;

import React from 'react';
import Person from "./Person.jsx";
import personService from "../services/persons.js"
const Persons = ({filter,persons,setPersons}) => {
    const handleDeleteClick = (id) => {
        const confirm = window.confirm(`Delete ${persons.find(person => person.id === id).name}?`)
        if(!confirm) return;
        personService.remove(id).then(data => console.log(data));
        setPersons(persons.filter(person => person.id !== id));
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

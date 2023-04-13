import React from 'react';
import Person from "./Person.jsx";

const Persons = ({filter,persons}) => {
    return (
            <ul>
                {persons.filter(person => person.name.includes(filter))
                    .map(person => <Person key={person.id} person={person}/>
                )}
            </ul>
    );
};

export default Persons;

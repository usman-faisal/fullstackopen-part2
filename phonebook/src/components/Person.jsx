import React from 'react';

const Person = ({person,handleDeleteClick}) =>
            <li>
                {person.name} {person.number}
                <button onClick={() => handleDeleteClick(person.id)}>Delete</button>
            </li>

export default Person;

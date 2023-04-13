import React from 'react';
import Header from "./Header.jsx";
import Content from "./Content.jsx";
import Total from "./Total.jsx";

const Course = ({course}) => {
    const {parts,name} = course;
    const total = parts.reduce((a,b) => {
        return a + b.exercises
    },0)
    return (
        <div>
            <Header course={name}/>
            <Content parts={parts}/>
            <Total  sum={total} />
        </div>
    );
};

export default Course;

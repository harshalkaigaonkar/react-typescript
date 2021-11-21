import React from 'react';

interface Person {
    fname: string
    lname: string
}
interface Props {
    text: string
    fn: (bob: string) => string
    para?: number
    person?: Person
}

export const TextField: React.FC<Props> = ({fn, text}) => {
    const func = (num1: number, num2: number): number => num1+num2
    const name: Person = {fname: "H", lname: "K"}
    return(
        <div>
            <input type="text" value={text} />
            <p>{name.fname}</p>
            <p>{name.lname}</p>
            <button value={fn('Hello')+func(3, 2)}>Submit</button>
        </div>
    )
}
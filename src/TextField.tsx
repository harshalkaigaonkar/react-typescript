import React from 'react';

interface Props {
    text: string
    fn: (bob: string) => string
}

export const TextField: React.FC<Props> = ({fn, text}) => {
    return(
        <div>
            <input type="text" value={text} />
            <button value={fn('Hello')}>Submit</button>
        </div>
    )
}
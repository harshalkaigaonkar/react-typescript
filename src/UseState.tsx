import React, { useRef, useState } from 'react';

interface Props {
    handleChange?: () => void
}

const UseState: React.FC<Props> = ({handleChange}) => {
    const [Name, setName] = useState<number | null | undefined>(null)
    const inputRef = useRef<HTMLInputElement>(null)
    const divRef = useRef<HTMLDivElement>(null)
    return (
        <div ref={divRef}>
            <p>UseState</p>
            <p>{Name}</p>
            <input onChange={(e: any): void => setName(e.target.value)} />
            <input ref={inputRef} onChange={handleChange} />
        </div>
    )
}

export default UseState;
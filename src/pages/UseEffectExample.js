import React, {useEffect, useState} from "react";

export default function UseEffectExample(props) {
    const [name, setName] = useState('Naveed');
    const changeName = e => setName(e.target.value);

    useEffect(() => {
        console.log('mounted');
        return () => {
            console.log('unmounted');
        }
    }, []);

    useEffect(() => {
        console.log('name is changed');
    }, [name]);

    useEffect(() => {
        console.log('mounted or something has changed');
    });

    return (
        <div>
            <p>{name}</p>
            <p><input type="text" value={name} onChange={changeName}/></p>
        </div>
    )
}

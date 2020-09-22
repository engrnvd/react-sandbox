import React, {useRef} from "react";

export default function RefsExample(props) {
    const inputElement = useRef();

    function focus() {
        inputElement.current.focus();
    }

    return (
        <div>
            <input type="text" ref={inputElement}/>
            <button onClick={focus}>Focus!!</button>
        </div>
    );
}

import React from "react";

function withRequest(WrappedComponent, extraParams) {
    return (props) => {
        console.log('extraParams', extraParams);
        return <WrappedComponent
            superCharged="yes"
            {...extraParams}
            {...props}
        />
    }
}

function Comp1(props) {
    return (
        <div>Comp 1: {JSON.stringify(props)}</div>
    );
}

function Comp2(props) {
    return (
        <div>{props.name}: {JSON.stringify(props)}</div>
    );
}

const Comp1WithRequest = withRequest(Comp1, {name: 'Comp1'});
const Comp2WithRequest = withRequest(Comp2, {name: 'Comp2'});

export default function HOCExample(props) {
    return (
        <div>
            <Comp1WithRequest/>
            <Comp2WithRequest name="Comp-2"/>
        </div>
    )
}

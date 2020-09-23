import React from "react";

class Cat extends React.Component {
    render() {
        const mouse = this.props.mouseState;
        return (
            <img src='/images/tom.png' style={
                {
                    position: 'absolute',
                    left: mouse.x + 32,
                    top: mouse.y,
                    width: '5rem',
                }
            }/>
        );
    }
}

class Mouse extends React.Component {
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = {x: 0, y: 0};
    }

    handleMouseMove(event) {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    }

    render() {
        return (
            <div style={{
                height: '100vh',
                cursor: `url(/images/jerry.png), auto`
            }} onMouseMove={this.handleMouseMove}>
                {this.props.render(this.state)}
            </div>
        );
    }
}

export default class MouseTracker extends React.Component {
    render() {
        return (
            <>
                <h1>Move the mouse around!</h1>
                <Mouse render={
                    mouseState => <Cat mouseState={mouseState}/>
                }/>
            </>
        );
    }
}

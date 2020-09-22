import React, {useContext, useState} from "react";

// create a context / store
const ThemeContext = React.createContext();
const ThemeProvider = function (props) {
    let [theme, setTheme] = useState('light');

    let context = {
        theme,
        toggle() {
            setTheme(theme => theme === 'light' ? 'dark' : 'light');
        }
    }

    return (
        <ThemeContext.Provider value={context}>
            {props.children}
        </ThemeContext.Provider>
    );
}

// create a second context / store
const UserContext = React.createContext();
const UserProvider = function (props) {
    let [name, setName] = useState('Naveed');

    let context = {
        name,
        setName
    }

    return (
        <UserContext.Provider value={context}>
            {props.children}
        </UserContext.Provider>
    );
}

// reading the context data in function component
function ChildComp1() {
    let theme = useContext(ThemeContext);
    let user = useContext(UserContext);
    return (
        <div>
            <h3>Child 1 {theme.theme}</h3>
            <h3>Current User is: {user.name}</h3>
        </div>
    );
}

// reading the context data in class component
class ChildComp2 extends React.Component {
    static contextType = ThemeContext;

    render() {
        return (
            <h3>Child 2 {this.context.theme}</h3>
        );
    }
}

// modifying the context data
function Toggler() {
    return (
        <ThemeContext.Consumer>
            {theme => (<button onClick={theme.toggle}>Toggle Theme</button>)}
        </ThemeContext.Consumer>
    )
}

function NameChanger(props) {
    return (
        <UserContext.Consumer>
            {
                user => {
                    function update(e) {
                        user.setName(e.target.value)
                    }

                    return (
                        <div>
                            <input type="text" onChange={update} value={user.name}/>
                        </div>
                    )
                }
            }
        </UserContext.Consumer>
    )
}

export default function ContextExample() {
    return (
        <ThemeProvider>
            <UserProvider>
                <h1>Context Example</h1>
                <Toggler/>
                <ChildComp1/>
                <ChildComp2/>
                <NameChanger/>
            </UserProvider>
        </ThemeProvider>
    )
}

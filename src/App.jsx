import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <header className="App-header">
                <img src={reactLogo} className="App-logo" alt="reactLogo"/>
                <img src={viteLogo} className="App-logo" alt="viteLogo"/>
                <p>
                    Edit <code>App.jsx</code> and save to reload.
                </p>
            </header>
        </>
    )
}

export default App

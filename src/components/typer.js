import { useState } from "react"

const Typer = () => {
    const [text,setText] = useState('WrItE S0mEtHiNg Br0')

    const Writing = (event) => {
        const value = event.target.value
        setText(value)
    }

    return (
        <div className="typer">
            <form onChange={Writing}>
                <input type="text" placeholder="Type text bro"></input>
            </form>
            <h3>{text}</h3>
        </div>
    )
}

export default Typer
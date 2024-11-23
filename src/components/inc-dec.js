import React,{useState} from 'react'

function CountNum(){
    const [num,setnum] = useState(1)

    const Inc = () => {
        setnum(num+1);
    }
    const Dec = () => {
        setnum(num-1);
    }

    return (
        <div>
            <div className='box'>
                <button onClick={Inc}>+</button>
                <h1>{num}</h1>
                <button onClick={Dec}>-</button>
            </div>
        </div>
    )
}

export default CountNum
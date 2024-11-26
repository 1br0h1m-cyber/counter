import React,{useState} from 'react'

function CountNum(){
    const [num,setNum] = useState(1)

    const sum = 24000

    const Inc = () => {
        setNum(num+1);
    }
    const Dec = () => {
        if (num > 0) {
            setNum(num - 1);
        }
    }

    return (
        <div className='count'>
            <div className='box'>
                <button onClick={Inc}>+</button>
                <h2> {num} </h2>
                <button onClick={Dec}>-</button>
            </div>
            <div className='sum'>
                <h1 className='total'>🌮 {sum*num} 💵</h1>
            </div>
        </div>
    )
}

export default CountNum
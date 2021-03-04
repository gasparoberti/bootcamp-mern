import { useState } from 'react'

export const ContadorDoble = () => {
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)

    // const [counters, setCounters] = useState({
    //     left : 0,
    //     right : 0
    // })

    // const handleClickLeft = () => {
    //     setCounters({
    //         left : counters.left + 1,
    //         right : counters.right
    //     })
    // }
    
    // const handleClickRight = () => {
    //     setCounters({
    //         left : counters.left,
    //         right : counters.right + 1
    //     })
    // }

    return (
        <div>
            {/* {counters.left} */}
            {left}
            {/* <button onClick={handleClickLeft} */}
            <button onClick={() => setLeft(left + 1)}
            >
                Left
            </button>
            {/* <button onClick={handleClickRight} */}
            <button onClick={() => setRight(right + 1)}
            >
                Right
            </button>
            {/* {counters.right} */}
            {right}
        </div>
    )
}

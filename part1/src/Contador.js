import {useState} from "react"

export const Contador = () => {
    const [contador, setContador] = useState(1)

    const handlClick = () => {
        // setContador(contador + 1)
        // setContador(prevContador => prevContador + 1)
        setContador((prevContador) => {return (prevContador + 1)})
    }
    
    const handlClickReset = () => {
        setContador(1)
    }

    const isEven = contador % 2 === 0
    return (
        <div>
            <h1>{contador}</h1>
            <button onClick={handlClick}
            >
                Incrementar
            </button>        
            <button onClick={handlClickReset}
            >
                Reset
            </button>        

            <p> {isEven ? 'Es par' : 'Es impar'}</p>    {/* renderizado condicional */}
        </div>
    )
}


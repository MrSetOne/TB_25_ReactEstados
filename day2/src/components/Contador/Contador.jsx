import React, { useState, useEffect } from 'react'

function Contador({step, initialValue}) {

    let [contador, setContador] = useState(initialValue)
    let [interruptor, setInterruptor] = useState(true)

    const increment = () => setContador(contador + step);
    const decrement = () => setContador(contador - step);
    const reset = () => {
        setContador(contador = initialValue);
        setInterruptor(interruptor = true)
    }
   
    const deleter = () => {
        setInterruptor(interruptor = false)
    }

    useEffect(() => {
      console.log(`Se ha creado un contador que inicia en ${initialValue} y tiene saltos de ${step}`);
    }, []);

    useEffect(() => {
        interruptor ? console.log(`Se ha modificado el contador`) : console.log('El contador no existe');
    },[contador])
    
    useEffect(() => {  
      return () => {
        !interruptor ? console.log('Se ha eliminado el contador') : console.log('está vivo');
      }
    },[interruptor])

    return (
        <div className='Contador'>
            {interruptor ? <h2>{contador}</h2> : <h2>Te has cargado el contador</h2> }            
            <div>
                <button onClick={increment} >Incrementar</button>
                <button onClick={decrement} >Disminuir</button>
                <button onClick={reset}>Resetear</button>
                <button onClick={deleter}>Eliminar</button>
            </div>
        </div>
    )
}

export default Contador
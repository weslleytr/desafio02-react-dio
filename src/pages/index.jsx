import { useState, useEffect } from "react"

const Teste = () => {

  const [name, setName] = useState('Weslley');

  const handleChangeName = () => {
    setName(prev => prev === 'Weslley' ? 'José' : 'Weslley')
  }


  useEffect(()=>{
    alert('renderizei')
  },[])


  return (
    <div>
        <p>{name}</p>
        <button onClick={handleChangeName}>Alterar</button>
    </div>
  )
}

export { Teste }
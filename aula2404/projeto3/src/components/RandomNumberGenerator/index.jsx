import { useState } from 'react'
import './style.css'

export default function RandomNumberGenerator(){
    const [numero, setNumero] = useState(0)

    const gerarNumero = () => {
        const novoNumero = Math.floor(Math.random() * 100) + 1
        setNumero(novoNumero)
    }

    return(
        <div className='random-container'>
            <h2>Número da Sorte:</h2>
            <h1>
                {numero}
            </h1>
            <button onClick={gerarNumero}> 
                Gerar Número
            </button>
        </div>
    )
}


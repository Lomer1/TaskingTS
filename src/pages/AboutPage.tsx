import React from 'react'
import { useNavigate} from 'react-router-dom'

export const AboutPage: React.FC = () => {
    const history =  useNavigate()
    return( 
    <>
        <h1>BYajhvf</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus qui doloremque saepe similique quo, perspiciatis atque hic iste itaque voluptas ipsum sint et, ea error aspernatur nobis eligendi reprehenderit porro.</p>
        <button className='btn' onClick={() => history('/')}>К списку дел</button>
    </>
    )
}
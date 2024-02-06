import React from 'react'
import {useLoaderData} from '@remix-run/react'
import {getGuitarras} from '~/models/guitarras.server.js'
import Guitarra from '~/components/guitarra';
import styles from '~/styles/guitarras.css'

export function meta()
{
  return[{
    title:'GuitarLa-Tienda de Guitarras',
    description:'Nuestra Colecicon de Guitarras'
  }
]}

export function links()
{

  return [
    {
      rel:'stylesheet',
      href:styles
    }
  ]
}


export async function  loader()
{

  const guitarras=await getGuitarras();
  
  return guitarras.data;
}

function Tienda() {

  const guitarras=useLoaderData();
  
  return (
    <main className="contenedor">
      <h2 className="heading">Nuestra coleccion</h2>
      {guitarras.length && ( <div className='guitarras-grid'>
        {guitarras.map(guitarra=>(
          <Guitarra guitarra={guitarra?.attributes}
                    key={guitarra?.id}
          />
        ))}
      </div> )}
    </main>
  )
}

export default Tienda

import { useLoaderData } from '@remix-run/react';
import React from 'react'
import { getGuitarra } from '~/models/guitarras.server';
import styles from '~/styles/guitarras.css';

export function links()
{
  return[
    {

  rel:'stylesheet',
  href:styles
  
}]
}

export function meta({data})
{

  if(!data)
  {
    return{
      title:`Guitarra no encontrada`,
    description:`Guitarra no encontrada`
    }
  }
  return [{
    title:`GuitarLa- ${data.data[0].attributes.nombre}`,
    description:`Guittara- ${data.data[0].attributes.nombre}`
  }]
}

export async function loader({params})
{
    const {guitarraUrl}=params;
    
    const guitarra=await getGuitarra(guitarraUrl);
    
    if(guitarra.data.length === 0 )
    {
      throw new Response('',{
        status:404,
        statusText:'Guitarra no encontrada'
      })
    }

    return guitarra;


}
const Guitarras = () => {

  const guitarra=useLoaderData();
  console.log(guitarra.data[0].attributes);
  const {nombre,descripcion,imagen,precio}=guitarra.data[0].attributes;

  const descripcionTexto = descripcion.map((desc) => 
    desc.children.map((child) => child.text).join('')
  ).join(' ');
  return (
   <main className="contenedor guitarra">

    <img src={imagen.data.attributes.url} alt={nombre}  />
    <div className="contenido">
      <h1>{nombre}</h1>
      <p className="texto">
      {descripcionTexto}
      </p>
      <p className="precio">${precio}</p>
    </div>
   </main>
  )
}

export default Guitarras

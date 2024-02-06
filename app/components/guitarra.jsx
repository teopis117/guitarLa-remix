import React from 'react'
import {Link}  from '@remix-run/react'

function Guitarra({guitarra}) {
  
  const {descripcion,nombre,precio,imagen,url}=guitarra;
  
    return (
      <div className="guitarra">
        <div className="contenido">
        <img src={imagen.data.attributes.formats.medium.url} alt={`imagen guitarra ${nombre}`} />
        </div>
        <div className="contenido">
            <h3>{nombre}</h3>
            <p className='descripcion'>{descripcion[0].children[0].text}</p>
            <p className='precio'>${precio}</p>
            <Link className='enlace' to={`/guitarras/${url}`}>Ver Producto</Link>
        </div>
      </div>
    
  )
}

export default Guitarra

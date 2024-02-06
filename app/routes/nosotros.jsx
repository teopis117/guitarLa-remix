import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'

export function links()
{
  return[
    {
      rel:'stylesheet',
      href:styles
    }
  ]
}

export function meta()
{
  return[{
    title:'Guitar-La Sobre Nosotrss',
    descripcion:'venta de guitarras,blog de musica'
  },
  {
    rel:'preload',
    href:imagen,
    as:'image'
  }
]
}





function Nosotros() {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>
      <div className="contenido">
        <img src={imagen} alt="imagen sobre nosotros" />
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, perferendis facere necessitatibus dolorem eos blanditiis veritatis sequi iste at corrupti autem. Rem veniam eligendi, culpa asperiores sapiente voluptatem saepe voluptate?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, perferendis facere necessitatibus dolorem eos blanditiis veritatis sequi iste at corrupti autem. Rem veniam eligendi, culpa asperiores sapiente voluptatem saepe voluptate?</p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros

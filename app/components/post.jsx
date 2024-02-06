import { Link } from "@remix-run/react";
import { formatearFecha } from "~/utils/helpers";
function Post({post}) {
    const {Titulo,Contenido,Imagen,url,publishedAt}=post; 
    const descripcionTexto = Contenido.map((desc) => 
    desc.children.map((child) => child.text).join('')
  ).join(' ');
  return (
    <article className="post">
        <img src={Imagen.data.attributes.formats.small.url} alt={`imagen ${Titulo}`} className="imagen" />
       <div className="contenido">
       <h3>{Titulo}</h3>
        <p className="fecha">{formatearFecha(publishedAt)}</p>
        <p className="resumen">{descripcionTexto}</p>
        <Link className="enlace" to={`/posts/${url}`}>Leer Post</Link>
       </div>
    </article>  )
}

export default Post

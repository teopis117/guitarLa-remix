export async function getPosts()
{

    const respuesta= await fetch(`${process.env.API_URL}/posts?populate=*`)
    console.log(respuesta);
    return await respuesta.json();
}

export async function getPost(url)
{

    const respuesta=await fetch(`${process.env.API_URL}/post?filters[url]=${url}&populate=*`)
    console.log(respuesta);

    return await respuesta.json();
}
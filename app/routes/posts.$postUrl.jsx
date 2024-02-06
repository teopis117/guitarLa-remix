import { useLoaderData } from "@remix-run/react";
import { getPost } from "~/models/posts.server";


export async function loader({params})
{
  console.log(params)
    const{postUrl}=params;
    const post= await getPost(postUrl);
    return 'post';
}

function Post() {


    const post=useLoaderData();
  return (
    <div>
      desde aca
    </div>
  )
}

export default Post

import { useEffect, useState } from "react";

function App(){
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [posts, setPosts] = useState([]);

  async function fetchPosts(){
    console.log("Inside useEffect, after first render/ onMount")

    try{
      setLoading(true);
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      console.log("Response: ", response)
      if(response.ok === false){
        throw new Error("Failed to load posts"); // Custom Error
      }
      const jsonData = await response.json();

      setPosts(jsonData);
    }catch(error){
      setError(error.message)
    }finally{
      setLoading(false)
    }
  }

  useEffect(()=>{
    fetchPosts()
  }, [])

  if(loading){
    console.log("Hello")
    return (
      <p>Posts are Loading....</p>
    )
  }

  if(error){
    return(
      <p className="text-red-600">Error: {error}</p>
    )
  }


  if(posts.length === 0){
    console.log(posts)
    return(
      <p>No Posts found...</p>
    )
  }

  return(
    <div>
      <p>Posts:</p>
      {
        posts.map((post, index)=>(
          <article key={post.id ||index}>
            <h3 className="font-semibold text-lg text-red-400">{post.title}</h3>
            <p>{post.body}</p>
            <hr />
          </article>
        ))
      }
    </div>
  )
}

export default App;
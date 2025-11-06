import useFetch from "../hooks/useFetch";

function PostsPage() {

  const {postsLoading, postsError, postsData} = useFetch("https://jsonplaceholder.typicode.com/posts")

  if (postsLoading) {
    console.log("Hello")
    return (
      <p>data are Loading....</p>
    )
  }

  if (postsError) {
    return (
      <p className="text-red-600">Error: {postsError}</p>
    )
  }


  if (postsData.length === 0) {
    console.log(postsData)
    return (
      <p>No postsData found...</p>
    )
  }

  return (
    <div>
      <p>postsData:</p>
      {
        postsData.map((post, index) => (
          <article key={post.id || index}>
            <h3 className="font-semibold text-lg text-red-400">{post.title}</h3>
            <p>{post.body}</p>
            <hr />
          </article>
        ))
      }
    </div>
  )
}

export default PostsPage;
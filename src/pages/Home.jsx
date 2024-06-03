import ListPost from "../components/ListPost"

const Home = () => {
  return (
    <main>
      <div className="container">
        <h2 className="title-page">Pet noticias</h2>
      </div>
      <ListPost url={"/posts"} />
    </main>
  )
}

export default Home

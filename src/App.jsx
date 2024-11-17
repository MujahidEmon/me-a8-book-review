import BookCard from "./Components/BookCard/BookCard"
import Hero from "./Components/Hero/Hero"
import NavBar from "./Components/NavBar/NavBar"



function App() {


  return (
    <div className="lg:max-w-6xl mx-auto work-sans">
      <NavBar></NavBar>
      <Hero></Hero>
      <BookCard></BookCard>
    </div>
  )
}

export default App

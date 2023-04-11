import "./App.css"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Favorites from "./pages/Favorites"
import Navbar from "./components/Navbar"
import { MyContext } from "./context/Mycontext"
import { useEffect, useState } from "react"

function App() {
  const [photos, setPhotos] = useState([])

  const getPhotos = async () => {
    fetch(
      "https://api.pexels.com/v1/search?query=cloud&orientation=square&per_page=20",
      {
        headers: {
          Authorization:
            "c7tfgPgM5ls0bKSJYsQfLFWm8QlQY4GysBvkdYlYRB8gncRUqlbosGLs",
        },
      }
    )
      .then((resp) => {
        return resp.json()
      })
      .then((data) => {
        setPhotos(data.photos)
      })
  }
  useEffect(() => {
    getPhotos(setPhotos)
  }, [])
  return (
    <div className="App">
      <Navbar />
      <MyContext.Provider value={{ photos, setPhotos }}>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Favorites" element={<Favorites />} />
        </Routes>
      </MyContext.Provider>
    </div>
  )
}

export default App

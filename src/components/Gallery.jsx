import React, { useContext } from "react"
import { MyContext } from "../context/Mycontext"
import Liked from "./Liked"

const Gallery = () => {
  const { photos, setPhotos } = useContext(MyContext)

  const handleSubmit = (id) => {
    const photoId = photos.findIndex((f) => f.id === id)
    photos[photoId].liked = !photos[photoId].liked
    setPhotos([...photos])
  }
  return (
    <div>
      <div className="photoGrid">
        {photos.map((photo) => (
          <div
            onClick={() => handleSubmit(photo.id)}
            key={photo.id}
            className="photo"
            style={{ backgroundImage: `url(${photo.src.medium})` }}
          >
            <Liked filled={photo.liked} />
          </div>
        ))}
      </div>
    </div>
  )
}
export default Gallery

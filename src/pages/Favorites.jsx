import React, { useContext } from "react"
import { MyContext } from "../context/Mycontext"
import Liked from "../components/Liked"

function Favorites() {
  const { photos, setPhotos } = useContext(MyContext)

  return (
    <div>
      <div className="photoGrid">
        {photos.map(
          (photo) =>
            photo.liked && (
              <div
                onClick={() => handleSubmit(photo.id)}
                key={photo.id}
                className="photo"
                style={{ backgroundImage: `url(${photo.src.medium})` }}
              >
                <Liked filled={photo.liked} />
              </div>
            )
        )}
      </div>
    </div>
  )
}

export default Favorites

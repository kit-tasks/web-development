export function Images(props) {
  const { image: imageName, images } = props.planet
  return (
    <div className="images-flex">
      {images.map((image) => {
        const imagePath = `/images/${imageName}/${image}`
        return <img src={imagePath} alt="" />
      })}
    </div>
  )
}

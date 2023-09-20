export function PlanetCard(props) {
  function handleClick() {
    props.hook(props.id)
  }

  const { image, name } = props.planet

  return (
    <button className="card" onClick={handleClick}>
      <img
        className="planet-img"
        src={`/images/${image}/main-256px.png`}
        alt=""
      />
      <div className="planet-name">{name}</div>
    </button>
  )
}

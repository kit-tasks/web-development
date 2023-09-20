import { PlanetOptions } from './PlanetOptions'

export function PlanetInfo(props) {
  function handleClick() {
    props.hook(true)
  }

  const { text, image, name, options } = props.planet

  return (
    <div className="planet-info">
      <div className="info-description">{text}</div>
      <div className="planet-description">
        <img
          className="planet-common-img"
          src={`/images/${image}/main-256px.png`}
          alt=""
        />
        <div className="planet-name">{name}</div>
        <PlanetOptions options={options} />
        <button className="get-images" onClick={handleClick}>
          Больше фото
        </button>
      </div>
    </div>
  )
}

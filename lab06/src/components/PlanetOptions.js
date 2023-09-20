export function PlanetOptions(props) {
  const { weight, radius, averageTemp } = props.options
  return (
    <div>
      <div className="planet-option">
        <div className="key">{'Масса:'}</div>
        <div className="value">{weight}</div>
      </div>
      <div className="planet-option">
        <div className="key">{'Радиус:'}</div>
        <div className="value">{radius}</div>
      </div>
      <div className="planet-option">
        <div className="key">{'Ср. Температура:'}</div>
        <div className="value">{averageTemp}</div>
      </div>
    </div>
  )
}

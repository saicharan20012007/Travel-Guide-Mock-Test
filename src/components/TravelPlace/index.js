import './index.css'

const TravelPlace = props => {
  const {data} = props
  const {name, description, imageUrl} = data
  return (
    <li className="travel-item">
      <img src={imageUrl} alt={name} className="image" />
      <h1 className="place-title">{name}</h1>
      <p className="place-des">{description}</p>
    </li>
  )
}

export default TravelPlace

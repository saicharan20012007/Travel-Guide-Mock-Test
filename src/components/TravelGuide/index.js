import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'
import TravelPlace from '../TravelPlace'

class TravelGuide extends Component {
  state = {travelData: [], isLoading: true}

  componentDidMount() {
    this.getApiData()
  }

  getApiData = async () => {
    const response = await fetch('https://apis.ccbp.in/tg/packages')
    const data = await response.json()

    const formattedData = data.packages.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      imageUrl: eachItem.image_url,
      description: eachItem.description,
    }))
    this.setState({travelData: formattedData})
    this.setState({isLoading: false})
  }

  render() {
    const {travelData, isLoading} = this.state
    console.log(travelData)
    return (
      <div className="background-container">
        <h1 className="main-title"> Travel Guide</h1>
        <div className="results-container">
          {isLoading ? (
            <div data-testid="loader">
              <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
            </div>
          ) : (
            <ul className="un-ol">
              {travelData.map(each => (
                <TravelPlace data={each} key={each.id} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default TravelGuide

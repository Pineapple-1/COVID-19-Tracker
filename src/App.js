import React from 'react';
import {Cards,Charts,CountryPicker} from './Components'
import {FetchData} from './api/index'
import Styles from'./App.module.css';
import coronaImage  from './Images/image.png'


class App extends React.Component {
  state={
    data:{},
    country:''
  }
  async  componentDidMount(){
   let FetchedData = await FetchData()
    this.setState({data:FetchedData})
   
  }
  handleCountryChange= async (countries) => {
    let FetchedData = await FetchData(countries)
    this.setState({data:FetchedData,country:countries})
  }
  render()
  {
    const { data ,country}=this.state
    return(
      <div className={Styles.container}>
        <img className={Styles.image} src={coronaImage} alt="COVID-19"/>
        <Cards Data={data}/>
        <CountryPicker Picker={this.handleCountryChange}/> 
        <Charts Data={data} Country={country}/>
        
      </div>
    )
  }
}

export default App;

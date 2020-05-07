import React, { Component} from 'react';
import Form from'./components/Form';
import Illustration from'./components/Illustration';
import Result from'./components/Result';
import GeneralInfo from'./components/GeneralInfos';
//import coSvg from './img/coSvg.svg'
import './App.css';


  class App extends Component {
    state = {
      value: ["1"],
      loading:true,
      NewConfirmed: undefined,
      TotalConfirmed:  undefined,
      NewDeaths:  undefined,
      TotalDeaths:  undefined,
      NewRecovered:  undefined,
      TotalRecovered:  undefined,
      Flag :undefined
    }
    handleChange = (e) =>{
      
      this.setState({value: e.target.value })
    }
    handleSubmit = async(e) => {
      e.preventDefault();
      const valueOption = [this.state.value];
      console.log(valueOption);
      
      const apiCall = await fetch(`https://corona-virus-stats.herokuapp.com/api/v1/cases/countries-search`);
      const data = await apiCall.json();
      this.setState({
        loading:false,// si c'est à true c'est que ça charge encore mais ici ça a trouvé...
         NewConfirmed: data.data.rows[valueOption].new_cases,
         TotalConfirmed: data.data.rows[valueOption].total_cases,
         NewDeaths: data.data.rows[valueOption].new_deaths,
         TotalDeaths: data.data.rows[valueOption].total_deaths,
         TotalRecovered:data.data.rows[valueOption].total_recovered,
        Flag : data.data.rows[valueOption].flag

      })
    
    }
 
  render() {
    return (
      <div className='App'>
        <div className='cont'>
          <div className="left">
          <Illustration />
          </div>
          <div className="right bg-dark">
            <GeneralInfo/>
            <Form handleChange={this.handleChange} handleSubmit={this.handleSubmit} bla={this.valueOption}/>
            <Result
             loading={this.state.loading}
             newConfirmed={this.state.newConfirmed}
             TotalConfirmed={this.state.TotalConfirmed}  
             NewDeaths={this.state.NewDeaths} 
             TotalDeaths={this.state.TotalDeaths}  
             NewRecovered={this.state.NewRecovered}  
             TotalRecovered={this.state.TotalRecovered}
             Flag={this.state.Flag}
            />         

          </div>
        </div>
      </div>
    )
  }
}


export default App;

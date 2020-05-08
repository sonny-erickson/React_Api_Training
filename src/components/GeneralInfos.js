import React, {Component} from 'react';
import coro from '../img/coro.svg'

class generalInfos extends Component {
    state = {
        loading:true,// à true
        NewConfirmed: null,
        TotalConfirmed: null,
        NewDeaths: null,
        TotalDeaths: null,
        TotalRecovered:null,
        LastMaj:null
    }
    componentDidMount = async() => {

        const url = "https://corona-virus-stats.herokuapp.com/api/v1/cases/countries-search";
        const response = await fetch(url);
        const dataG = await response.json();

        this.setState({
           loading:false,// si c'est à true c'est que ça charge encore mais ici ça a trouvé...
            LastMaj : dataG.data.last_update,
            NewConfirmed: dataG.data.rows[0].new_cases,
            TotalConfirmed: dataG.data.rows[0].total_cases,
            NewDeaths: dataG.data.rows[0].new_deaths,
            TotalDeaths: dataG.data.rows[0].total_deaths,
            TotalRecovered:dataG.data.rows[0].total_recovered

         })
      }

    render(){
        return (
            <div>
                <h2>General Informations of the world</h2>
                <div className="pG">
                    {this.state.loading || !this.state.NewConfirmed || !this.state.TotalConfirmed ?
                    (<div><p>Loading ....</p></div>) :
                    (
                    <div className='text-center mt-5'>
                        <p>New confirmed: <span>{this.state.NewConfirmed}</span></p>
                        <p>Total confirmed: <span>{this.state.TotalConfirmed}</span></p>
                        <p>New deaths: <span>{this.state.NewDeaths}</span></p>
                        <p>Total deaths:<span> {this.state.TotalDeaths}</span></p>
                        <p>Total recovered: <span>{this.state.TotalRecovered}</span></p>
                        <p>Last update :<span>{this.state.LastMaj}</span></p>

                    </div>

                    )}
                    <img src={coro} alt='logo' className="app-logo"></img>

                </div>






            </div>
        );

    }

};

export default generalInfos;
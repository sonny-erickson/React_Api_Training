import React from 'react';

const result = (props) => {
    return (
        <div className="mt-5">
            {props.loading ?
                (<div><p></p></div>) :
                (
                <div className='d-flex row mb-3'>
                    <div className='countryInfo col-lg-6 col-md-8 col-sm-12 mt-1'>
                    {props.TotalConfirmed && <p>Total confirmed <span>{props.TotalConfirmed}</span></p>}
                    {props.NewDeaths && <p>New deaths: <span>{props.NewDeaths}</span></p>}
                    {props.TotalDeaths && <p>Total deaths: <span>{props.TotalDeaths}</span></p>}
                    {props.TotalRecovered && <p>Total recovered: <span>{props.TotalRecovered}</span></p>}  
                    </div>
                    <div className='flag col-lg-6 col-md-3 col-sm-12 mt-1'>
                        {props.Flag && <img src={props.Flag} alt='flag'></img>}
                    </div>
                </div>
            )}
        </div>
    );
};

export default result;
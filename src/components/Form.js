import React from 'react';

//https://www.youtube.com/watch?v=17AwVXg5lHk -> Styled-components button
const form = (props) => {
    
    return (
        <div >
            <h2 className="mb-2">Your country</h2> 
            <form  className="container mt-3"  onSubmit={props.handleSubmit}>
                <h3>Select your country</h3>
                <div className="formm ">
                    <div className="row mx-3 my-4">
                        <select className="form-control col-sm-12 col-md-6" value={props.value} onChange={props.handleChange}>
                            <option name="country" value='1'>USA</option>
                            <option name="country" value='2'>Spain</option>
                            <option name="country" value='3'>Russia</option>
                            <option name="country" value='4'>UK</option>
                            <option name="country" value='5'>Italy</option>
                            <option name="country" value='6'>Brazil</option>
                            <option name="country" value='7'>France</option>
                            <option name="country" value='8'>Germany</option>
                            <option name="country" value='9'>Turkey</option>
                        </select> 
                    
                        <button className="btn btn-danger col-sm-12 col-md-4 offset-md-2">Submit</button>

                    </div>
                </div>
            </form>
                
                   
                
                
                
            
        </div>
    );
};

export default form;
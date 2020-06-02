import React from 'react';
import Button from '../styled/Button';
//https://www.youtube.com/watch?v=17AwVXg5lHk -> Styled-components button
const form = (props) => {
    
    return (
        <div >
            <h2 className="mb-2">Your country</h2> 
            <form  className="container mt-5"  onSubmit={props.handleSubmit}>
                <div className="formm ">
                    <div className="selectForm d-flex justify-content-center flex-column ">
                       <label htmlFor="exampleFormControlSelect1" >Select your country</label>
                        <select className="select form-control " value={props.value} onChange={props.handleChange}>
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
                    </div>
                    <Button>Submit</Button>
                </div>
            </form>
                
                   
                
                
                
            
        </div>
    );
};

export default form;
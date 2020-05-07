import React from 'react';

const form = (props) => {
    return (
        <div >
            <h2 className="mb-2">Your country</h2> 
            <form  className="container"  onSubmit={props.handleSubmit}>
                <div className="formm ">
                    <div className="selectForm d-flex justify-content-center flex-column ">
                       <label htmlFor="exampleFormControlSelect1" >Select your country</label>
                        <select className="select form-control " value={props.value} onChange={props.handleChange}>
                            <option name="country" value='1'>USA</option>
                            <option name="country" value='2'>Spain</option>
                            <option name="country" value='3'>Italy</option>
                            <option name="country" value='4'>UK</option>
                            <option name="country" value='5'>Russia</option>
                            <option name="country" value='6'>France</option>
                            <option name="country" value='7'>Germany</option>
                            <option name="country" value='8'>Turkey</option>
                            <option name="country" value='9'>Brazil</option>
                            
                        </select> 
                    </div>
                    
                    <button className='btn btn-danger btn-md'>Submit</button>
                </div>
            </form>
                
                   
                
                
                
            
        </div>
    );
};

export default form;
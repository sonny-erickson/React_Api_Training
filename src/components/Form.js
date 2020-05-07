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
                            <option name="country" value='5'>France</option>
                            <option name="country" value='3'>Italy</option>
                            <option name="country" value='2'>Spain</option>
                            <option name="country" value='6'>Germany</option>
                            <option name="country" value='4'>UK</option>
                        </select> 
                    </div>
                    
                    <button className='btn btn-danger btn-md'>Submit</button>
                </div>
            </form>
                
                   
                
                
                
            
        </div>
    );
};

export default form;
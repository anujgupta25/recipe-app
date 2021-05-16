import React from 'react';
import '../App.css';
const Header = (props) =>{
    const {search, onInputChange, onSearch} = props;
    return (
        <div className="wrapper text-center" >
            <div className='container pt-5' >
                <p className='display-4 mb-3 text-white font-italic'>Quick Food recipe</p>
                <div class='form-group' style={{'display':'flex', 'justifyContent':'center'}}>
                    <div className='input-group' style={{'width':'75%'}}>
                        <input type='text' placeholder='Search Dishes' value= {search} onChange={onInputChange}  class='form-control form-control-sm' />
                        <div className='input-group-append'>
                            <button type='button' onClick = {onSearch} class='btn btn-sm btn-warning'>Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Header;
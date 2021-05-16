import React from 'react';
import '../App.css';
const Recipe = (props) =>{
    const {items , loading} = props;

    if(loading){
        return(
            <div className='spin mt-5 d-flex justify-content-center'>
                <div className='spinner-border'></div>
             </div>
        )
    }
    return(
        <div className='container recipe-container' >
            <div className='row card-column'>
            
                {
                    items.map((item, key) =>(
                        <div className='col-md-3 mt-4' key={key}>
                            <div className='card p-3'>
                                <img src ={item.recipe.image} style={{'width':'180px', 'margin':'0 auto'}} className='rounded-circle' alt='Dish' />
                                <p className='card-title'> {item.recipe.label}</p>
                                <ul  style={{'overflow-y':'scroll'}} className='list-group list-group-flush'>
                                    {
                                        item.recipe.ingredients.map(ing =>(
                                            <li className='list-group-item'>{ing.text}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    ))
                }
                                      
            </div>
        </div>
    )
}
export default Recipe;
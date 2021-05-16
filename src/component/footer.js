import React from 'react';
import '../App.css';

const Footer = () =>{
    return(
        <footer className='container-fluid mt-3 pt-2 text-white bg-dark' style={{'textAlign':'center', 'height':'80px', 'fontSize':'16px'}}>
            <p className='footer-text'>
                Hope, the recipes provided are helpful and easy to understand.
                <br />
            <span>Website by </span>
            <span className='font-italic dev-name'>Anuj Gupta</span>
            </p>
            
        </footer>
    )
}
export default Footer;
import React, {useState, useEffect} from 'react';
import Header from './component/Header';
import Recipe from './component/recipe';
import Footer from './component/footer';

function App(props) {
  const[search, setSearch] = useState('indian street');
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const api = async() =>{
    const APP_KEY ='97cd6fc4d3db5e7a8130c2f548353eb2';
    const APP_ID ='8a573ae6';
    const req = await fetch(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    setLoading(true);
    const result = await req.json();
    console.log(result.hits);
    setItems(result.hits);
    setLoading(false);
  }
  const onSearch = () =>{
    api();
  }

  useEffect(()=>{
    api();
  }, []);

  const onInputChange = (e) => {
    setSearch(e.target.value);
  }
  
  return (
    <>
    <Header search ={search} onInputChange={onInputChange} onSearch = {onSearch} />
    <Recipe items = {items} loading = {loading}  />
    <Footer />
    </>
  );
}

export default App;

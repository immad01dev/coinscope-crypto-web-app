import React, { useContext, useEffect, useState } from 'react'
import './Home.css'
import { CoinContext } from '../../context/CoinContext'
import { Link } from 'react-router-dom';

export default function Home() {


 const {currency, coins} = useContext(CoinContext);

 const [input,setInput] = useState('');
 const [displaycoin,setDisplayCoin] = useState([]);



 const inputHandler = (event)=>{

    setInput(event.target.value);

 }



 const searchHandler = (event)=>{

    event.preventDefault();


    const filteredCoins = coins.filter((item)=>{

        return (
            item.name.toLowerCase().includes(input.toLowerCase()) ||
            item.symbol.toLowerCase().includes(input.toLowerCase())
        );

    });


    setDisplayCoin(filteredCoins);

 }




 useEffect(()=>{

    setDisplayCoin(coins);

 },[coins]);




 return (
    <div className='home'>


        <div className="hero">

            <h1>
                Largest <br/> Crypto Marketplace
            </h1>


            <p>
                Welcome to the largest crypto marketplace.
                Sign up today and explore the future of digital trading.
            </p>


            <form onSubmit={searchHandler}>

                <input 
                    value={input}
                    onChange={inputHandler}
                    type="text" 
                    placeholder='Search Crypto...' 
                
                    list='coinlist'
                />
                <datalist id='coinlist'>
    {coins.map((item,index)=>(<option key={index}
    value={item.name}/>))}
                </datalist>




                <button type='submit'>
                    Search
                </button>

            </form>


        </div>





        <div className='crypto-table'>


            <div className="table-layout">

                <p>#</p>
                <p>Coins</p>
                <p>Price</p>
                <p style={{textAlign:'center'}}>
                    24H Change
                </p>
                <p className='market-cap'>
                    Market Cap
                </p>

            </div>





            {
            displaycoin.map((item,index)=>(


            <Link to={`/coin/${item.id}`} className="table-layout">

                <p>
                    {index + 1}
                </p>




                <div className="coin-name">

                    <img 
                    src={item.image} 
                    alt={item.name}
                    />


                    <p>
                        {item.name} - {item.symbol.toUpperCase()}
                    </p>


                </div>





                <p>
                    {currency.symbol}
                    {item.current_price.toLocaleString()}
                </p>





                <p 
                style={{textAlign:"center"}}
                className={
                    item.price_change_percentage_24h >= 0 
                    ? "green" 
                    : "red"
                }
                >

                    {item.price_change_percentage_24h.toFixed(2)}%

                </p>





                <p className="market-cap">

                    {currency.symbol}
                    {item.market_cap.toLocaleString()}

                </p>



          </Link>


            ))
            }



        </div>


    </div>
 )
}
import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CoinContext } from '../../context/CoinContext'
import './Coin.css'


export default function Coin() {


    const {coinId} = useParams();

    const {coins,currency} = useContext(CoinContext);


    const coin = coins.find((item)=> item.id === coinId);



    if(!coin){
        return (
            <div className="loading">
                Loading...
            </div>
        )
    }



  return (

    <div className="coin-page">


        <img 
        src={coin.image} 
        alt={coin.name}
        className="coin-image"
        />



        <h1>
            {coin.name} ({coin.symbol.toUpperCase()})
        </h1>



        <div className="coin-info">


            <div className="info-card">

                <h3>
                    Rank
                </h3>

                <p>
                    #{coin.market_cap_rank}
                </p>

            </div>




            <div className="info-card">

                <h3>
                    Current Price
                </h3>

                <p>
                    {currency.symbol}
                    {coin.current_price.toLocaleString()}
                </p>

            </div>





            <div className="info-card">

                <h3>
                    Market Cap
                </h3>

                <p>
                    {currency.symbol}
                    {coin.market_cap.toLocaleString()}
                </p>

            </div>



        </div>




        <div className="details">


            <h2>
                Market Details
            </h2>


            <p>
                24H High :
                <span>
                {currency.symbol}
                {coin.high_24h.toLocaleString()}
                </span>
            </p>


            <p>
                24H Low :
                <span>
                {currency.symbol}
                {coin.low_24h.toLocaleString()}
                </span>
            </p>


            <p>
                Total Volume :
                <span>
                {currency.symbol}
                {coin.total_volume.toLocaleString()}
                </span>
            </p>



            <p>
                Circulating Supply :
                <span>
                {coin.circulating_supply.toLocaleString()}
                </span>
            </p>




            <p>
                Total Supply :
                <span>
                {coin.total_supply.toLocaleString()}
                </span>
            </p>



            <p>
                All Time High :
                <span>
                {currency.symbol}
                {coin.ath.toLocaleString()}
                </span>
            </p>



        </div>



    </div>
  )
}
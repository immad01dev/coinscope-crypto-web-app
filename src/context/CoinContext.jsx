import { createContext, useEffect, useState } from "react";

export const CoinContext = createContext();


const CoinContextProvider = ({children}) => {

    const [coins, setCoins] = useState([]);

    const [currency, setCurrency] = useState({
        name:"usd",
        symbol:"$"
    });



    const fetchAllCoins = async () => {

        const options = {
            method:"GET",
            headers:{
                accept:"application/json",
                "x-cg-demo-api-key":"CG-9WrWgs2qeqjHYTVpLeTH5yxS"
            }
        };


        try {

            const response = await fetch(
                `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}&order=market_cap_desc&per_page=10&page=1`,
                options
            );


            if(!response.ok){
                throw new Error(`Status Code: ${response.status}`);
            }


            const data = await response.json();

            console.log("Currency:", currency.name);
            console.log(data);

            setCoins(data);


        } catch(error){

            console.log("API Error:", error.message);

        }

    };



    useEffect(()=>{

        fetchAllCoins();

    },[currency.name]);



    const contextValue = {
        coins,
        currency,
        setCurrency
    };


    return(
        <CoinContext.Provider value={contextValue}>
            {children}
        </CoinContext.Provider>
    )

}


export default CoinContextProvider;
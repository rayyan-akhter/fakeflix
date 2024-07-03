import axios from 'axios';
import React, { useEffect, useState } from 'react'

const StreamingAvailability = ({type,id}) => {
    const [data , setData] = useState(null);
const [error, setError] = useState(null);

    useEffect(()=>{
        const fetchdata = async()=>{
            const url = `https://streaming-availability.p.rapidapi.com/shows/${type}/${id}?apiKey=85acbe075cmsh0cf09b13a42446cp10458ejsne988b6a8786b`;
      console.log(`Fetching data from: ${url}`);
            try {
                const response = await axios.get(url);
                setData(response.data);
            } catch ( error){
                console.log('Error fetching data:', error)
                setError(error);
            }
        };
        fetchdata();
        console.log("this is the fetched data",data)
    },[type,id])
  return (
    <div>
         {error ? (
        <p>Error: {error.message}</p>
      ) : data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
};

export default StreamingAvailability;
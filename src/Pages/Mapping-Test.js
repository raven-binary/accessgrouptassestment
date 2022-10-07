import React, { useEffect, useState } from "react";
import axios from "axios";

const Test = () => 
{
    const [rawData, setRawData] = useState([
        {
          name: "",
          email: "",
        }
      ]);

      useEffect(() => {
        axios.get(`http://localhost:5000/`).then((res) => {
          setRawData(res.data);
        }, []);
      }, []);

      useEffect(() => {
        console.log(rawData);
      }, [rawData]);

    return (
        <div>
            <p>sdfd</p>
            {rawData.map((col,index) =>{
                return (<p>{col.Title}</p>)
            })}
            {/* <p>{rawData[0].Title}</p> */}
        </div>
    );
};

export default Test;
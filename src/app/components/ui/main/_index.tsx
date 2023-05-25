import React, { useState } from "react";
import getLocation from "@api/getLocation"; 
import Input from "@component/input";
import Dashboard from "@component/dashboard";
import Map from "@component/map";
import Data from "@interface/data";

//TODO: Add Context to managing Data obj [app?]

const Main = (): JSX.Element => {
    const initialData: Data = {
      ip: '192.212.174.101',
      city: 'Brooklyn',
      region: 'NY',
      postalcode: '10001',
      timezone: 'UTC -05:00',
      isp: 'SpaceX Starlink',
      coordinates: {
        lat: 2.304513941197036,
        lng: 111.86156048115464
      }
  };

  const [data, setData] = useState<Data>(initialData);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.defaultPrevented);
    const newData = await getLocation(e.target[0].value);
    console.log(newData);
    setData(newData);
  }

    return (
        <main className="is-flex has-columns">
            <Input handler={ handleSubmit } />
            <Dashboard data={ data }/>
            <Map coordinates={ data.coordinates } />
        </main>
    )
}

export default Main;
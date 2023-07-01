import axios, { AxiosResponse } from "axios";
import { fields, key } from "./constants";
import Data from '@interface/data';
import ipifyResponse from "@interface/ipifyResponse";

const getLocation = async (ipAddress: string): Promise<Data> => {
  try {
    console.log(`trying to get location for: ${ipAddress}`);
    !key && console.log(`using key: ${key}`);
    const response: AxiosResponse<ipifyResponse> = await axios.get(
      "https://geo.ipify.org/api/v2/country,city?",
      {
        params: {
          apiKey: `${key}`,
          ipAddress: ipAddress,
          fields: fields.join(','),
        },
      }
    );
    const { ip, location, isp } = response.data;
    const data: Data = {
      ip,
      city: location.city,
      region: location.region,
      postalcode: location.postalCode,
      timezone: location.timezone,
      isp,
      coordinates: {
        lat: location.lat,
        lng: location.lng,
      },
    }
    data && console.log(`location data: ${JSON.stringify(data)}`);
    return data;
  } catch (err) {
    console.error("error during geolocation request:", err);
    throw err;
  }
};

export default getLocation;

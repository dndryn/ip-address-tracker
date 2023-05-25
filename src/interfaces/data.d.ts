interface Data {
  ip: string;
  city: string;
  region: string;
  postalcode: string;
  timezone: string;
  isp: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export default Data;

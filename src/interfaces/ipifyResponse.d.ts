interface ipifyResponse {
  ip: string;
  location: {
    city: string;
    region: string;
    postalCode: string;
    timezone: string;
    lat: number;
    lng: number;
  };
  isp: string;
}

export default ipifyResponse;
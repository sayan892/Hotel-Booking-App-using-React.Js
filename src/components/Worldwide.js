import React,{useState,useEffect} from 'react'
import Map from './Map';
import {Link} from 'react-router-dom';
import './Worldwide.css';
import "leaflet/dist/leaflet.css";



import {
    MenuItem,
    FormControl,
    Select,
} from "@material-ui/core";

function Worldwide() {
  const [countries, setCountries] = useState([]);
  const [countryInfo, setCountryInfo] = useState({});
  const [country, setInputCountry] = useState("worldwide");
  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
  const [mapZoom, setMapZoom] = useState(3);
  
  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
      });
  }, []);


  useEffect(()=> {
      
    const getCountriesData = async () => {
      await fetch ("https://disease.sh/v3/covid-19/countries")
      .then((response)=> response.json())
      .then ((data)=> {
        const countries = data.map((country)=> ({
          name: country.country,
          value: country.countryInfo.iso2,
        }))
        setCountries(countries)
        
      })
    }
    getCountriesData();
  },[]);

  const onCountryChange = async (e) => {
    const countryCode = e.target.value;

    const url =
      countryCode === "worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setInputCountry(countryCode);
        setCountryInfo(data);
        setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
        setMapZoom(4);
      });
  };
  

    return (
        <div>
        <div className="app__header">
        <FormControl>
        <Select
        onChange={onCountryChange}
          value={country}>
         <MenuItem value="worldwide">Pinpoinx</MenuItem>
          
      {countries.map(country => (
          <MenuItem value={country.value}>{country.name}</MenuItem>
        ))
      }
        </Select>
      </FormControl>
        </div>
        <Map 
        center={mapCenter}
        zoom={mapZoom}
        />
         
        <br />

        <nav className="nav">
        <Link to="/home" className="nav__link">
            <i className="fas fa-home"  style={{fontSize:"15px"}}></i>
            <span className="nav__text">Home</span>
        </Link>
        <Link to="/maps" className="nav__link">
            <i className="fas fa-map-marker-alt"  style={{fontSize:"15px"}}></i>
            <span className="nav__text">Map</span>
        </Link>
        <Link to="/list" className="nav__link">
            <i className="fas fa-heart" style={{fontSize:"15px"}}></i>
            <span className="nav__text">Saved</span>
        </Link>
        <Link to="/profile" className="nav__link">
            <i className="fas fa-user"  style={{fontSize:"15px"}}></i>
            <span className="nav__text">Profile</span>
        </Link>
        </nav>

        </div>

        
    )
    
}

export default Worldwide;

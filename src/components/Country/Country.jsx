import { useState } from 'react';
import './Country.css'

const Country = ({country,handleVisitedCountries}) => {
const [visited, setVisited] = useState(false);


const handleVisited =()=>{

    // toggle style-1
//     if(visited){
//         setVisited(false)
//     }
//   else{
//     setVisited(true);
//   }


// toggle style-2
// setVisited(visited?false:true)


// toggle style-3
setVisited(!visited);
handleVisitedCountries(country)
}

    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            <p>Population : {country.population.population}</p>
            <p>Area: {country.area.area} {country.area.area >300000?"big country":"small country"}</p>
            <button onClick={handleVisited}>
                {
                visited ? "Visited":"Not Visited"
                }</button>
        </div>
    );
};

export default Country;
// import React, { useState, useEffect } from 'react'
// import TextField from '@material-ui/core/TextField';
// import Autocomplete from '@material-ui/lab/Autocomplete';

// const Search = () => {
//   const [myOptions, setMyOptions] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleInputChange = (e) => {
//     setSearchTerm(e.target.value);
//   }
//   const fetchData = () => {
//     console.log("Options Fetched from API");

//     fetch('http://127.0.0.1:8080/cars')
//     .then(response => response.json())
//     .then(res => {
//       console.log(res)
//       let options = res.map(car => car.brand)
//       setMyOptions(options)
//     })
//     .catch(error => {
//       console.error('Error fetching data: ', error)
//     })
// }

//   return (
//     <div style={{ marginLeft: '10%', marginTop: '80px' }}>
//       <Autocomplete
//         style={{ width: 500 }}
//         freeSolo
//         autoComplete
//         autoHighlight
//         options={myOptions}
//         renderInput={(params) => (
//           <TextField {...params}
//           onClick={fetchData}
//             variant="outlined"
//             label="Search Box"
//           />
//         )}
//       />
//      </div>
//   );
// }

// export default Search

import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const Search = () => {
  const [myOptions, setMyOptions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  }

  const getDataFromAPI = () => {
    fetch('http://127.0.0.1:8080/cars')
  .then(response => response.json())
  .then(res => {
    console.log(res)
    let options = res.map(car => car.brand)
    setMyOptions(options)
  })
  .catch(error => {
    console.error('Error fetching data: ', error)
  })
  }

  return (
    <div style={{ marginLeft: '35%', marginTop: '100px' }}>
      <Autocomplete
        style={{ width: 500 }}
        freeSolo
        autoComplete
        autoHighlight
        options={myOptions}
        inputValue={searchTerm}
        onInputChange={handleInputChange}
        onChange={getDataFromAPI}
        renderInput={(params) => (
          <TextField {...params}
            variant="outlined"
            label="Search Box"
          />
        )}
      />
      {
        myOptions
          .filter(brand => brand.toLowerCase().includes(searchTerm.toLowerCase()))
          .map(brand => (
            <p key={brand}>{brand}</p>
          ))
      }
    </div>
  );
}

export default Search;


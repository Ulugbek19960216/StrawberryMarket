import * as React from 'react';
import {TextField, Typography} from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';

// Define the data array before using it in the ComboBox component
const data = [
    {   
        id: 1,
        region: "Bukhara",
        districts: [
            "Bukhara shahar",
            "Kogon tuman",
            "Jondor tuman",
            "Olot tuman",
            "Shofirkon tuman",
            "Vobkent tuman",
            "Gijduvon tuman",
            "Romitan tuman",
            "Karakul tuman",
            "Galaosiyo tuman",
            "Peshku tuman",
            "Korovulbozor tuman"
        ]
    },
    { 
        id: 2,
        region: "Samarkand",
        districts: [
            "Samarkand shahar",
            "Urgut tuman",
            "Kattakurgan tuman",
            "Juma tuman",
            "Ishtikhon tuman",
            "Pastdargom tuman"
        ]
    },
];

export default function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={data.map(item => item.region)}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Region" />}
      renderOption={(option) => (
        <React.Fragment>
          <Typography variant="h6">{option}</Typography>
          <ol>
            {data.find(item => item.region === option).districts.map((district, index) => (
              <li key={index}>{district}</li>
            ))}
          </ol>
        </React.Fragment>
      )}
    />
  );
}

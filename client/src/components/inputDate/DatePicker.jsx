import * as React from 'react';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useTheme } from '../../context/themeContext';

export default function ControlledComponent({label}) {
  const [value, setValue] = React.useState(null);
  const {theme} = useTheme()
  return (
    <LocalizationProvider  dateAdapter={AdapterDayjs}>
      <DemoContainer  components={['DatePicker']}>
        <DatePicker 
          format='DD-MM-YYYY'
          label={label} 
          value={value} 
          onChange={(newValue) => setValue(newValue)} 
          sx={{
            width: '30px !important', // Ajuster la largeur de l'input
            "& .MuiInputLabel-root": {
              color: theme === "light" ? "var(--noirbeBorder)" : "var(--whiteKely)", 
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: theme === "light" ? "var(--noirbeBorder)" : "var(--whiteKely)",
                color: theme === "light" ? "var(--noirbeBorder)" : "var(--whiteKely)", 
              },
              "&:hover fieldset": {
                borderColor: theme === "light" ? "var(--noirbeBorder)" : "var(--whiteKely)", 
                color: theme === "light" ? "var(--noirbeBorder)" : "var(--whiteKely)",
              },
              "&.Mui-focused fieldset": {
                borderColor: theme === "light" ? "var(--noirbeBorder)" : "var(--whiteKely)", 
                color: theme === "light" ? "var(--noirbeBorder)" : "var(--whiteKely)",
              },
            },
          }}
          
          
          />
      </DemoContainer>
    </LocalizationProvider>
  );
}
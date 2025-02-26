// import * as React from 'react';

// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { useTheme } from '../../context/themeContext';

// export default function ControlledComponent({label}) {
//   const [value, setValue] = React.useState(null);
//   const {theme} = useTheme()
//   return (
//     <LocalizationProvider  dateAdapter={AdapterDayjs}>
//       <DemoContainer  components={['DatePicker']}>
//         <DatePicker  
//           format='DD-MM-YYYY'
//           label={label} 
//           value={value} 
//           onChange={(newValue) => setValue(newValue)} 
//           sx={{
//             width: '30px !important', // Ajuster la largeur de l'input
//             "& .MuiInputLabel-root": {
//               color: theme === "light" ? "var(--noirbeBorder)" : "var(--whiteKely)", 
//             },
//             "& .MuiOutlinedInput-root": {
//               "& fieldset": {
//                 borderColor: theme === "light" ? "var(--noirbeBorder)" : "var(--whiteKely)",
//                 color: theme === "light" ? "var(--noirbeBorder)" : "var(--whiteKely)", 
//               },
//               "&:hover fieldset": {
//                 borderColor: theme === "light" ? "var(--noirbeBorder)" : "var(--whiteKely)", 
//                 color: theme === "light" ? "var(--noirbeBorder)" : "var(--whiteKely)",
//               },
//               "&.Mui-focused fieldset": {
//                 borderColor: theme === "light" ? "var(--noirbeBorder)" : "var(--whiteKely)", 
//                 color: theme === "light" ? "var(--noirbeBorder)" : "var(--whiteKely)",
//               },
//             },
//           }}
          
          
//           />
//       </DemoContainer>
//     </LocalizationProvider>
//   );
// }

import * as React from 'react';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useTheme } from '../../context/themeContext';
export default function ControlledComponent({ label }) {
  const [value, setValue] = React.useState(null);
  const { theme } = useTheme();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker
          format="DD-MM-YYYY"
          label={label}
          value={value}
          onChange={(newValue) => setValue(newValue)}
          sx={{
            width: '200px', // Largeur ajustable
            "& .MuiInputBase-root": {
              height: '40px', // Hauteur ajustée
              minHeight: '40px', // Empêche les décalages
              padding: '0 14px', // Évite la surcharge interne
              display: 'flex',
              alignItems: 'center', // Centre le contenu verticalement
              overflow: 'hidden',
              lineHeight: '1.2', // Ajuste l’alignement du texte
              color: theme === "light" ? "var(--noirbeBorder)" : "var(--whiteKely)",
            },
            "& .MuiInputLabel-root": {
              fontSize: '0.96rem', // Ajuste la taille du label
              top: '-4px', // Remonte légèrement le label pour l'aligner
              color: theme === "light" ? "var(--noirbeBorder)" : "var(--whiteKely)",
            },
            "& .MuiOutlinedInput-root": {
              height: '40px', // Applique la même hauteur
              minHeight: '40px',
              "& fieldset": {
                borderColor: theme === "light" ? "var(--noirbeBorder)" : "var(--whiteKely)",
              },
              "&:hover fieldset": {
                borderColor: theme === "light" ? "var(--noirbeBorder)" : "var(--whiteKely)",
              },
              "&.Mui-focused fieldset": {
                borderColor: theme === "light" ? "var(--noirbeBorder)" : "var(--whiteKely)",
              },
            },
            "& .MuiSvgIcon-root": {
              fontSize: '20px', // Ajuste la taille de l’icône
              // Centre l’icône verticalement
            },
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}


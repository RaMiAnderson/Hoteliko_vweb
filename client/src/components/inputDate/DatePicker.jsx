import * as React from 'react';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function ControlledComponent({label}) {
  const [value, setValue] = React.useState(null);

  return (
    <LocalizationProvider  dateAdapter={AdapterDayjs}>
      <DemoContainer  components={['DatePicker']}>
        <DatePicker 
          format='DD-MM-YYYY'
          label={label} 
          value={value} 
          onChange={(newValue) => setValue(newValue)}
          sx={{
            width: '30px !important',  // Définir la largeur
          }}/>
      </DemoContainer>
    </LocalizationProvider>
  );
}
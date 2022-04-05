/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';

const TicketOptions = (): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box sx={{ minWidth: 120}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Loại vé</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={age}
          label="Loại vé"
          // onChange={handleChange}
          // autoWidth
          defaultValue={10}
        >
          <MenuItem value={10}>Hạng phổ thông đặc biệt</MenuItem>
          <MenuItem value={20}>Hạng phổ thông</MenuItem>
          <MenuItem value={30}>Hạng thương gia</MenuItem>
          <MenuItem value={40}>Hạng nhất</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default TicketOptions;

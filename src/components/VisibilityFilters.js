import React from 'react'
import { Box, Tabs, Tab, Typography } from '@mui/material'
import { VISIBILITY_FILTERS } from '../constants';
import { useDispatch } from 'react-redux';

const VisibilityFilters = () => {

  const [value, setValue] = React.useState(0);

  const dispatch = useDispatch();

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const handleFilterChange = (filter) => {
    dispatch({ type: 'SET_FILTER', payload: {filter} })
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          {Object.keys(VISIBILITY_FILTERS).map((filter, index) => {
            return (
              <Tab key={index} label={filter} {...a11yProps(index)} onClick={(e) => {handleFilterChange(filter)}} />
            )
          })}
        </Tabs>
      </Box>
    </Box>
  )
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default VisibilityFilters
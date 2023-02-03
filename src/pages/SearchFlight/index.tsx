import React, { useState } from 'react';
import { Tab, Tabs, Typography } from '@mui/material';
import { FlightSearch } from './components/FlightSearch';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      style={{
        display: 'flex',
        padding: '16px',
      }}
      {...other}
    >
      {value === index && children}
    </Typography>
  );
};

export const SearchFlight = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div style={{ display: 'flex' }}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        style={{ width: '200px', height: '100%' }}
      >
        <Tab label="Localizar Voo" />
        <Tab label="Informações dos passageiros" />
        <Tab label="Voucher Alimentação" />
        <Tab label="Voucher Transporte" />
        <Tab label="Hotel" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <FlightSearch />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Informações dos passageiros Content
      </TabPanel>
      <TabPanel value={value} index={2}>
        Voucher Alimentação Content
      </TabPanel>
      <TabPanel value={value} index={3}>
        Voucher Transporte Content
      </TabPanel>
      <TabPanel value={value} index={4}>
        Hotel Content
      </TabPanel>
    </div>
  );
};

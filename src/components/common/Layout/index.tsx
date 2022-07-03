import { useState, ReactNode, SyntheticEvent } from 'react';
import { Tabs, Tab, Typography, Box } from '@mui/material';

import { LayoutWrapper } from './styles';

interface TabPanelProps {
  children?: ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
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

const menuTabProps = (index: number) => ({
  id: `menu-tab-${index}`,
  'aria-controls': `menu-tabpanel-${index}`,
});

export default function LayoutComponent({
  children,
}: {
  header?: ReactNode;
  searchBar?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  slideSideNav?: ReactNode;
  sideMenu?: ReactNode;
}) {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <LayoutWrapper>
      <Box sx={{ width: '100%' }}>
        <Box
          sx={{ borderBottom: 1, borderColor: 'divider' }}
          className="layout-header"
        >
          <div className="logo" style={{ color: 'black' }}>
            LOGO
          </div>

          <Tabs value={value} onChange={handleChange} aria-label="Menu">
            <Tab label="Item One" {...menuTabProps(0)} />
            <Tab label="Item Two" {...menuTabProps(1)} />
            <Tab label="Item Three" {...menuTabProps(2)} />
          </Tabs>
        </Box>

        <div className="app-content">{children}</div>
      </Box>
    </LayoutWrapper>
  );
}

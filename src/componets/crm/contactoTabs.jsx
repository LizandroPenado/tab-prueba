import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Tab, Tabs } from '@mui/material';
import ContactoTable from './contacto/contactoTable'

function TabPanel(props) {
    const { children, value, index } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`contacto-tabpanel-${index}`}
            aria-labelledby={`contacto-tabpanel-${index}`}
        >
            {value === index && <Box>{children}</Box>}
        </div>
    )
}

TabPanel.protoTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    values: PropTypes.number.isRequired,
}

function tabProps(index) {
    return {
        id: `contacto-tabpanel-${index}`,
        'aria-controls': `contacto-tabpanel-${index}`,
    }
}

const ContactoTabs = () => {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <Box sx={{ maxWidth: '100' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                    aria-label='contacto tabs'
                    onChange={handleChange}
                    scrollButtons="auto"
                    value={value}
                    variant="scrollable"
                >
                    <Tab label="Contactos" {...tabProps(0)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <ContactoTable />
            </TabPanel>
        </Box>
    )
}

export default ContactoTabs;
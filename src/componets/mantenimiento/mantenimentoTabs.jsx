import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Tab, Tabs } from '@mui/material';
import MantenimientoSolicitud from './mantenimientoSolicitud';
import MantenimientoRevisionOp from './mantenimientoRevisionOp';
import MantenimientoRevisionCo from './mantenimientoRevisionCo';
import MantenimientoAsignacion from './mantenimientoAsignacion';
import MantenimientoBusqueda from './mantenimientoBusqueda';
import MantenimientoMecanico from './mantenimientoMecanico';

//import UnderConstrution from 'app/views/UnderConstruction';

function TabPanel(props) {
    const { children, value, index } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`mantenimiento-tabpanel-${index}`}
            aria-labelledby={`mantenimiento-tabpanel-${index}`}
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
        id: `mantenimiento-tabpanel-${index}`,
        'aria-controls': `mantenimiento-tabpanel-${index}`,
    }
}

const MantenimientoTabs = () => {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <Box sx={{ maxWidth: '100' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                    aria-label='mantenimiento tabs'
                    onChange={handleChange}
                    scrollButtons="auto"
                    value={value}
                    variant="scrollable"
                >
                    <Tab label="Búsqueda" {...tabProps(0)} />
                    <Tab label="Solicitud" {...tabProps(1)} />
                    <Tab label="Mecanico" {...tabProps(2)} />
                    <Tab label="Asignación" {...tabProps(3)} />
                    <Tab label="Revisión Op" {...tabProps(4)} />
                    <Tab label="Revisión Co" {...tabProps(5)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <MantenimientoBusqueda />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <MantenimientoSolicitud />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <MantenimientoMecanico />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <MantenimientoAsignacion />
            </TabPanel>
            <TabPanel value={value} index={4}>
                <MantenimientoRevisionOp />
            </TabPanel>
            <TabPanel value={value} index={5}>
                <MantenimientoRevisionCo />
            </TabPanel>
        </Box>
    )
}

export default MantenimientoTabs;
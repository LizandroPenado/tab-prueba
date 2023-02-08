import React from "react";
import { Box } from '@mui/material';
import { GridToolbarQuickFilter } from "@mui/x-data-grid";

const BusquedaToolbar = () => {
    return (
        <Box sx={{ p: 0.5, pb: 0 }}>
            <GridToolbarQuickFilter
                quickFilterParser={(searchInput) => {
                    searchInput.split(',').map((value) => value.trim()).filter((value) => value !== '')
                }} />
        </Box>
    )
}

export default BusquedaToolbar
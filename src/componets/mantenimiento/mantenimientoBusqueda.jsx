import React, { useState } from 'react';
import { createTheme, Grid, ThemeProvider, Button } from '@mui/material';
import { DataGrid, esES } from '@mui/x-data-grid';
import VisibilityIcon from '@mui/icons-material/Visibility';
import BuildIcon from '@mui/icons-material/Build';


const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'PROYECTO',
        headerName: 'PROYECTO',
        minWidth: 110,
    },
    {
        field: 'EQUIPO',
        headerName: 'EQUIPO',
        minWidth: 150,
    },
    {
        field: 'ACCIONES',
        headerName: 'ACCIONES',
        minWidth: 150,
        renderCell: () => (
            <>
                <Button
                    color='primary'
                    size='small'
                >
                    <VisibilityIcon />
                </Button>
                <Button
                    color='info'
                    size="small"
                >
                    <BuildIcon />
                </Button>
            </>
        ),
    }
];

const rows = [
    { id: 1, PROYECTO: 1, EQUIPO: 'Excavadora' },
    { id: 2, PROYECTO: 2, EQUIPO: 'Taladradora' },
    { id: 3, PROYECTO: 3, EQUIPO: 'Grua' },
    { id: 4, PROYECTO: 4, EQUIPO: 'Vehiculo' },
    { id: 5, PROYECTO: 5, EQUIPO: 'Camion' },
    { id: 6, PROYECTO: 6, EQUIPO: 'Trailer' },
    { id: 7, PROYECTO: 7, EQUIPO: 'Tapizadora' },
];

const theme = createTheme(
    {
        palette: {
            primary: { main: 'rgb(33, 50, 94)' },
            warning: { main: 'rgba(224, 183, 60,1)', contrastText: '#fff' },
        },
    },
    esES
);

const MantenimientoBusqueda = () => {
    const [pageSize, setPageSize] = useState(5);
    return (
        <ThemeProvider theme={theme}>

            <Grid container direction="row" sx={{ my: 1 }}>
                <Grid item xs={12} md={12} sx={{ minHeight: 300 }}>
                    <DataGrid
                        autoHeight
                        rows={rows}
                        columns={columns}
                        pageSize={pageSize}
                        onPageSizeChange={(newPageSize) => {
                            setPageSize(newPageSize)
                        }}
                        density="compact"
                        rowsPerPageOptions={[5, 10, 15, 20]}
                    />
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}

export default MantenimientoBusqueda;
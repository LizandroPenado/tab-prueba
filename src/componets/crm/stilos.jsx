import { styled } from '@mui/material';
import { esES } from '@mui/x-data-grid';
import { createTheme } from "@mui/material/styles";

export const ContentBox = styled('div')(({ theme }) => ({
    margin: '10px 10px 20px 10px',
    [theme.breakpoints.down('sm')]: { margin: '16px' },
}));

export const theme = createTheme(
    {
        palette: {
            primary: { main: 'rgb(33,50,94)' },
            warning: { main: 'rgba(224,183,60,1)', contrastText: '#fff' }
        },
    },
    esES
)
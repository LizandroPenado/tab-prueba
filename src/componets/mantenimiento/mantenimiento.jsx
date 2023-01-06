import { Grid, styled } from '@mui/material';
import MantenimientoTabs from './mantenimentoTabs';

const ContentBox = styled('div')(({ theme }) => ({
    margin: '10px 10px 20px 10px',
    [theme.breakpoints.down('sm')]: { margin: '16px' },
}));

 const Mantenimiento = () => {
    return (
        <ContentBox className='analytics'>
            <Grid container>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <MantenimientoTabs/>
                </Grid>
            </Grid>
        </ContentBox>
    )
}

export default Mantenimiento;
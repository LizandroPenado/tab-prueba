import { Grid } from '@mui/material';
import ContactoTabs from './contactoTabs'
import { ContentBox } from  './stilos';

const Contacto = () => {
    return (
        <ContentBox className='analytics'>
            <Grid container>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <ContactoTabs />
                </Grid>
            </Grid>
        </ContentBox>
    )
}

export default Contacto;
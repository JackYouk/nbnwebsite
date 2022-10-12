import HeroBanner from '../components/Hero';
import clients from '../images/clients.png'
import { Grid } from '@mui/material';

const Home = () => {

    return (
        <div>
            <HeroBanner style={{ zIndex: '-1' }} />

            {/* <div style={{ display: 'flex', justifyContent: 'center', marginTop: '80px', }}> */}
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                    <Grid item xs={12}>
                        <h1 style={{fontFamily: 'monospace' }}>Operations in 50+ countries. Trusted by the biggest names in tech.</h1>
                    </Grid>
                    <Grid item xs={12}>
                        <img src={clients} style={{marginTop: '5px' }} />
                    </Grid>
                </Grid>
            {/* </div> */}
        </div>
    )
}

export default Home;
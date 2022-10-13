import HeroBanner from '../components/Hero';
import uberlogo from '../images/uberlogo.png';
import snaplogo from '../images/snaplogo.png';
import robinhoodlogo from '../images/robinhoodlogo.png';
import ddlogo from '../images/ddlogo.png';
import gemlogo from '../images/gemlogo.png';
import vantalogo from '../images/vantalogo.png';
import applovinlogo from '../images/applovinlogo.png'

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
                <Grid item xs={12} justifyContent margin={3}>
                    <h1 style={{ fontFamily: 'monospace' }}>Operations in 50+ countries. Trusted by the biggest names in tech.</h1>
                </Grid>
                <Grid item xs={12}>
                        <Grid
                            container
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Grid item sm={4} md={2}>
                                <img src={uberlogo} alt='uber logo' />      
                            </Grid>
                            <Grid item sm={4} md={2}>
                                <img src={ddlogo} alt='doordash logo' />
                            </Grid>
                            <Grid item sm={4} md={2}>
                                <img src={snaplogo} alt='snapchat logo' />
                            </Grid>
                            <Grid item sm={4} md={2}>
                                <img src={robinhoodlogo} alt='robinhood logo' />
                            </Grid>
                            <Grid item sm={4} md={2}>
                                <img src={gemlogo} alt='gemini logo' />
                            </Grid>
                            <Grid item sm={4} md={2}>
                                <img src={applovinlogo} alt='applovin logo' />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                {/* </div> */}
        </div>
    )
}

export default Home;
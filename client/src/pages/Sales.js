import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import JACK from '../images/JACK.jpg'
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';

const Sales = () => {

    return (
        <div style={{ paddingTop: '20vh', marginBottom: '10vh' }}>
            <div style={{display: 'flex', justifyContent: 'center',}}>
                <h1 style={{fontFamily: 'Arial', fontSize: '100px', color: '#01334d'}}>Sales</h1>
            </div>
            
            <div >
                <Grid container spacing={1}>
                    <Grid item sm={12} md={6}>
                        <Card sx={{ minWidth: 200, maxWidth: 800, backgroundColor: 'lightgray', margin: '3vh', display: 'flex' }}>
                            <CardMedia
                                component="img"
                                height="auto"
                                image={JACK}
                                alt="warehouse pic"
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent>
                                    <Typography variant="h5" component="div" color="#01334d">
                                        Jack
                                    </Typography>
                                    <Typography sx={{ mb: 2 }} color="text.secondary">
                                        Senior Developer?
                                    </Typography>
                                    <Typography variant="body1" color="#01334d">
                                        Call @ <a style={{ color: '#01334d' }} href="tel:+15105080618">5105080618</a>
                                    </Typography>
                                    <Typography variant="body1" color="#01334d">
                                        Email @ <a style={{ color: '#01334d' }} href="mailto:+1jyoukstetter@northbay-networks.com">jyoukstetter@northbay-networks.com</a>
                                    </Typography>
                                </CardContent>
                            </Box>
                        </Card>
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <Card sx={{ minWidth: 200, maxWidth: 800, backgroundColor: 'lightgray', margin: '3vh', display: 'flex' }}>
                            <CardMedia
                                component="img"
                                height="auto"
                                image={JACK}
                                alt="warehouse pic"
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent>
                                    <Typography variant="h5" component="div" color="#01334d">
                                        Jack
                                    </Typography>
                                    <Typography sx={{ mb: 2 }} color="text.secondary">
                                        Senior Developer?
                                    </Typography>
                                    <Typography variant="body1" color="#01334d">
                                        Call @ <a style={{ color: '#01334d' }} href="tel:+15105080618">5105080618</a>
                                    </Typography>
                                    <Typography variant="body1" color="#01334d">
                                        Email @ <a style={{ color: '#01334d' }} href="mailto:+1jyoukstetter@northbay-networks.com">jyoukstetter@northbay-networks.com</a>
                                    </Typography>
                                </CardContent>
                            </Box>
                        </Card>
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <Card sx={{ minWidth: 200, maxWidth: 800, backgroundColor: 'lightgray', margin: '3vh', display: 'flex' }}>
                            <CardMedia
                                component="img"
                                height="auto"
                                image={JACK}
                                alt="warehouse pic"
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent>
                                    <Typography variant="h5" component="div" color="#01334d">
                                        Jack
                                    </Typography>
                                    <Typography sx={{ mb: 2 }} color="text.secondary">
                                        Senior Developer?
                                    </Typography>
                                    <Typography variant="body1" color="#01334d">
                                        Call @ <a style={{ color: '#01334d' }} href="tel:+15105080618">5105080618</a>
                                    </Typography>
                                    <Typography variant="body1" color="#01334d">
                                        Email @ <a style={{ color: '#01334d' }} href="mailto:+1jyoukstetter@northbay-networks.com">jyoukstetter@northbay-networks.com</a>
                                    </Typography>
                                </CardContent>
                            </Box>
                        </Card>
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <Card sx={{ minWidth: 200, maxWidth: 800, backgroundColor: 'lightgray', margin: '3vh', display: 'flex' }}>
                            <CardMedia
                                component="img"
                                height="auto"
                                image={JACK}
                                alt="warehouse pic"
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent>
                                    <Typography variant="h5" component="div" color="#01334d">
                                        Jack
                                    </Typography>
                                    <Typography sx={{ mb: 2 }} color="text.secondary">
                                        Senior Developer?
                                    </Typography>
                                    <Typography variant="body1" color="#01334d">
                                        Call @ <a style={{ color: '#01334d' }} href="tel:+15105080618">5105080618</a>
                                    </Typography>
                                    <Typography variant="body1" color="#01334d">
                                        Email @ <a style={{ color: '#01334d' }} href="mailto:+1jyoukstetter@northbay-networks.com">jyoukstetter@northbay-networks.com</a>
                                    </Typography>
                                </CardContent>
                            </Box>
                        </Card>
                    </Grid>
                </Grid>


            </div>
        </div>

    );
}

export default Sales;
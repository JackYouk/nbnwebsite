import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import warehousePic from '../images/warehouse.jpeg'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Contact = () => {

    return (
        <div style={{ paddingTop: '20vh', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '37vh' }}>
            <Card sx={{ minWidth: 300, maxWidth: 800, backgroundColor: 'lightgray', margin: '3vh' }}>
                    <CardContent>
                        <Typography gutterBottom variant="h3" component="div" color="#01334d" fontWeight="bold">
                            Contact
                        </Typography>
                        <Typography variant="body1" color="#01334d">
                            We are located in San Francisco Bay Area in beautiful Northern California at 4062 Watts Avenue, Emeryville CA 94608.
                        </Typography>
                        <Typography variant="body1" color="#01334d" style={{}}>
                            <a style={{color: '#01334d', textDecoration: 'none', display: 'flex', alignItems: 'center', margin: '1vh'}} href="tel:+15109038999">
                                <PhoneIcon style={{margin: '1vh'}}/>
                                (510) 903 8999
                            </a>
                        </Typography>
                        <Typography variant="body1" color="#01334d">
                            <a style={{color: '#01334d', textDecoration: 'none', display: 'flex', alignItems: 'center', margin: '1vh'}} href="mailto:info@northbay-networks.com">
                                <EmailIcon style={{margin: '1vh'}}/>
                                info@northbay-networks.com
                            </a>                        
                        </Typography>
                        <Typography variant="body1" color="#01334d">
                            <a style={{color: '#01334d', textDecoration: 'none', display: 'flex', alignItems: 'center', margin: '1vh'}} href="https://www.linkedin.com/company/northbay-networks-inc/about/">
                                <LinkedInIcon style={{margin: '1vh'}}/>
                                Northbay's LinkedIn
                            </a>                        
                        </Typography>
                    </CardContent>
            </Card>
        </div>
    );
}

export default Contact;
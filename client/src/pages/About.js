import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import warehousePic from '../images/warehouse.jpeg'

const About = () => {

    return (
        <div style={{ paddingTop: '20vh', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10vh' }}>
            <Card sx={{ minWidth: 300, maxWidth: 800, backgroundColor: 'lightgray', margin: '3vh' }}>
                    <CardMedia
                        component="img"
                        height="auto"
                        image={warehousePic}
                        alt="warehouse pic"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h3" component="div" color="#01334d" fontWeight="bold">
                            About Northbay Networks
                        </Typography>
                        <Typography variant="body1" color="#01334d">
                            Video maybe? 
                            Northbay Networks, Inc is a full service asset lifecycle company since 2000.
                            All of our different divisions offer the same services for the inspection, logistics, repossessions, valuation and disposition of idle assets, as well as being a source to procure newer assets for your growing companies. 
                            Our goal is to provide our clients with a one-source solution to their equipment lifecycle, as well as provide secure warehousing, logistics and staging for all their growing needs. Through our strategic partnerships we are able to provide our services over and above your typical remarketer or recycler. Our vertical approach ensures a knowledgable sale rep that can work with you to recover your original capital outlay and handle the cumbersome task of data destruction/wiping, shipping and proper recycling audit trails. 
                            Partnering with Northbay Networks, Inc. allows your business to streamline its lifecycle management, as well as to partake in creating an Green footprint for the world.
                        </Typography>
                    </CardContent>
            </Card>
        </div>
    );
}

export default About;
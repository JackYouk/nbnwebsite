import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import warehousePic from '../images/warehouse.jpeg'

const SmartHands = () => {

    return (
        <div style={{ paddingTop: '20vh', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '37vh' }}>
            <Card sx={{ minWidth: 300, maxWidth: 800, backgroundColor: 'lightgray', margin: '3vh' }}>
                    <CardMedia
                        component="img"
                        height="auto"
                        image={warehousePic}
                        alt="warehouse pic"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" color="#01334d">
                            IT/Office Setup, Transportation, and Decommission
                        </Typography>
                        <Typography variant="body2" color="#01334d">
                            Description of SmartHands
                        </Typography>
                    </CardContent>
            </Card>
        </div>
    );
}

export default SmartHands;
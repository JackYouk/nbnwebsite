import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import './Hero.css'
import { Link } from 'react-router-dom';
import warehousePic from '../images/warehouse.jpeg'
import csrPic from '../images/csr.jpeg'
import receivingPic from '../images/receiving.jpeg'
import shippingPic from '../images/shipping.jpeg'
import imageingPic from '../images/imageing.jpeg'

import { Button } from '@mui/material';
import Computer from '@mui/icons-material/Computer';
import { padding } from '@mui/system';

const HeroBanner = (props) => {

    return (
        <div className='topmargin'>
            <Carousel autoPlay={true} infiniteLoop={true} style={{zIndex: "0"}}>
                <div>
                    <img src={warehousePic} style={{maxHeight: '450px'}}/>
                    <div style={{backgroundColor: '#01334d', padding: '4vh', color: 'lightgray', fontFamily: 'arial'}}>
                        <h2 style={{marginBottom: '1vh', display: 'flex', justifyContent: 'center',}}>IT Asset Managment</h2>
                        <p>Assetization, refurbishment/reimaging, and endpoint logistics of tech assets on a worldwide scale</p>
                        <Link to='/itam' style={{ textDecoration: 'none', color: 'rgb(55, 65, 81)' }}>
                            <Button variant="text" style={{color: 'lightgray', fontStyle: 'italic', fontWeight: 'bold'}}>Learn More</Button>
                        </Link>                    
                    </div>
                </div>
                <div>
                    <img src={warehousePic} style={{maxHeight: '450px'}}/>
                    <div style={{backgroundColor: '#01334d', padding: '4vh', color: 'lightgray', fontFamily: 'arial'}}>
                        <h2 style={{marginBottom: '1vh', display: 'flex', justifyContent: 'center',}}>Secure Data Destruction</h2>
                        <p>Your data's safety is our biggest concern</p>
                        <Link to='/data-destruction' style={{ textDecoration: 'none', color: 'rgb(55, 65, 81)' }}>
                            <Button variant="text" style={{color: 'lightgray', fontStyle: 'italic', fontWeight: 'bold'}}>Learn More</Button>
                        </Link>
                    </div>
                </div>
                <div>
                    <img src={warehousePic} style={{maxHeight: '450px'}}/>
                    <div style={{backgroundColor: '#01334d', padding: '4vh', color: 'lightgray', fontFamily: 'arial'}}>
                        <h2 style={{marginBottom: '1vh', display: 'flex', justifyContent: 'center',}}>eWaste Recycling</h2>
                        <p>eWaste sucks, we'll get rid of it for you!</p>
                        <Link to='/ewaste' style={{ textDecoration: 'none', color: 'rgb(55, 65, 81)' }}>
                            <Button variant="text" style={{color: 'lightgray', fontStyle: 'italic', fontWeight: 'bold'}}>Learn More</Button>
                        </Link>                    
                    </div>
                </div>
                <div>
                    <img src={warehousePic} style={{maxHeight: '450px'}}/>
                    <div style={{backgroundColor: '#01334d', padding: '4vh', color: 'lightgray', fontFamily: 'arial'}}>
                        <h2 style={{marginBottom: '1vh', display: 'flex', justifyContent: 'center',}}>IT/Office Install & Decom</h2>
                        <p>IT and Office equipment installation, decomission, and transportation nationwide + more</p>
                        <Link to='/smarthands' style={{ textDecoration: 'none', color: 'rgb(55, 65, 81)' }}>
                            <Button variant="text" style={{color: 'lightgray', fontStyle: 'italic', fontWeight: 'bold'}}>Learn More</Button>
                        </Link>                    
                    </div>
                </div>
                <div>
                    <img src={warehousePic} style={{maxHeight: '450px'}}/>
                    <div style={{backgroundColor: '#01334d', padding: '4vh', color: 'lightgray', fontFamily: 'arial'}}>
                        <h2 style={{marginBottom: '1vh', display: 'flex', justifyContent: 'center',}}>Logistics</h2>
                        <p>International shipping & logistics specializing in IT, Office, and Medical equipment</p>
                        <Link to='/logistics' style={{ textDecoration: 'none', color: 'rgb(55, 65, 81)' }}>
                            <Button variant="text" style={{color: 'lightgray', fontStyle: 'italic', fontWeight: 'bold'}}>Learn More</Button>
                        </Link>                    
                    </div>
                </div>
            </Carousel>
        </div>
    );
}

export default HeroBanner;
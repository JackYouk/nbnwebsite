import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import './Hero.css'

import warehousePic from '../images/warehouse.jpeg'
import csrPic from '../images/csr.jpeg'
import receivingPic from '../images/receiving.jpeg'
import shippingPic from '../images/shipping.jpeg'
import imageingPic from '../images/imageing.jpeg'

const HeroBanner = (props) => {

    return (
        <div className='topmargin'>
            <Carousel autoPlay={true} infiniteLoop={true} style={{zIndex: "0"}}>
                <div>
                    <img src={warehousePic} style={{maxHeight: '450px'}}/>
                </div>
                <div>
                    <img src={warehousePic} style={{maxHeight: '450px'}}/>
                </div>
                <div>
                    <img src={warehousePic} style={{maxHeight: '450px'}}/>
                </div>
                <div>
                    <img src={warehousePic} style={{maxHeight: '450px'}}/>
                </div>
                <div>
                    <img src={warehousePic} style={{maxHeight: '450px'}}/>
                </div>
            </Carousel>
        </div>
    );
}

export default HeroBanner;
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import warehousePic from '../images/warehouse.jpeg'
import csrPic from '../images/csr.jpeg'
import receivingPic from '../images/receiving.jpeg'
import shippingPic from '../images/shipping.jpeg'
import imageingPic from '../images/imageing.jpeg'

const HeroBanner = (props) => {

    return (
        <div>
            <Carousel autoPlay={true} infiniteLoop={true} style={{zIndex: "0"}}>
                <div style={{height: '400px'}}>
                    <img src={warehousePic} />
                </div>
                <div style={{height: '400px'}}>
                    <img src={csrPic} />
                </div>
                <div style={{height: '400px'}}>
                    <img src={receivingPic} />
                </div>
                <div style={{height: '400px'}}>
                    <img src={shippingPic} />
                </div>
                <div style={{height: '400px'}}>
                    <img src={imageingPic} />
                </div>
            </Carousel>
        </div>
    );
}

export default HeroBanner;
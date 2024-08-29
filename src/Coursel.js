import { Container, Grid } from '@material-ui/core';
import Carousel from 'react-bootstrap/Carousel';
import img from '../src/images/Systechlogo.png'
import img1 from '../src/images/bg-login.png'
import img2 from '../src/images/invoice_logo.png'

function Coursel() {
    return (
        <div style={{ display: 'flex' }}>
            <Grid item lg={6}>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img1}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img1}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </Grid>
            <Grid item lg={6}>
                {img}
            </Grid>
        </div>
    );
}

export default Coursel;
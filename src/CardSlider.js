import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Card, CardContent } from "@material-ui/core";

const CardSlider = () => {

    return (
        <div>
            <Splide options={{ rewind: true, perCard: 3 }} aria-label="React Splide Example">
                <SplideSlide>
                    <Card style={{ marginTop: '5rem', width: '50px' }}>
                        <CardContent>
                            Card 1
                        </CardContent>
                    </Card>
                </SplideSlide>
                <SplideSlide>
                    <Card style={{ marginTop: '5rem', width: '50px' }}>
                        <CardContent>
                            Card 2
                        </CardContent>
                    </Card>
                </SplideSlide>
                <SplideSlide>
                    <Card style={{ marginTop: '5rem', width: '50px' }}>
                        <CardContent>
                            Card 3
                        </CardContent>
                    </Card>
                </SplideSlide>
                <SplideSlide>
                    <Card style={{ marginTop: '5rem', width: '50px' }}>
                        <CardContent>
                            Card 4
                        </CardContent>
                    </Card>
                </SplideSlide>
                <SplideSlide>
                    <Card style={{ marginTop: '5rem', width: '50px' }}>
                        <CardContent>
                            Card 5
                        </CardContent>
                    </Card>
                </SplideSlide>
                <SplideSlide>
                    <Card style={{ marginTop: '5rem', width: '50px' }}>
                        <CardContent>
                            Card 6
                        </CardContent>
                    </Card>
                </SplideSlide>
                <SplideSlide>
                    <Card style={{ marginTop: '5rem', width: '50px' }}>
                        <CardContent>
                            Card 7
                        </CardContent>
                    </Card>
                </SplideSlide>
                <SplideSlide>
                    <Card style={{ marginTop: '5rem', width: '50px' }}>
                        <CardContent>
                            Card 8
                        </CardContent>
                    </Card>
                </SplideSlide>
                <SplideSlide>
                    <Card style={{ marginTop: '5rem', width: '50px' }}>
                        <CardContent>
                            Card 9
                        </CardContent>
                    </Card>
                </SplideSlide>
                <SplideSlide>
                    <Card style={{ marginTop: '5rem', width: '50px' }}>
                        <CardContent>
                            Card 10
                        </CardContent>
                    </Card>
                    <Card style={{ marginTop: '5rem', width: '50px' }}>
                        <CardContent>
                            Card 11
                        </CardContent>
                    </Card>
                </SplideSlide>
            </Splide>
        </div>
    )
}

export default CardSlider
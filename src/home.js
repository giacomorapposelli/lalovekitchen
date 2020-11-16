import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Headroom from "react-headroom";

function Home() {
    return (
        <div className="homeContainer">
            <Headroom className="header">
                <h1>Hello</h1>
            </Headroom>
            <Carousel
                className="container-fluid"
                style={{ paddingLeft: 0, paddingRight: 0 }}
            >
                <Carousel.Item style={{ height: 1000 }} interval={4000}>
                    <img
                        className="d-block w-100"
                        src="images/logo.png"
                        alt="First slide"
                    />
                    <Carousel.Caption
                        style={{
                            backgroundColor: "rgba(0,0,0,0.3)",
                        }}
                    >
                        <h3>First slide label</h3>
                        <p>
                            Nulla vitae elit libero, a pharetra augue mollis
                            interdum.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ height: 1000 }} interval={4000}>
                    <img
                        className="d-block w-100"
                        src="images/logo.png"
                        alt="Third slide"
                    />
                    <Carousel.Caption
                        style={{
                            backgroundColor: "rgba(0,0,0,0.3)",
                        }}
                    >
                        <h3>Second slide label</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ height: 1000 }} interval={4000}>
                    <img
                        className="d-block w-100"
                        src="images/logo.png"
                        alt="Third slide"
                    />
                    <Carousel.Caption
                        style={{
                            backgroundColor: "rgba(0,0,0,0.3)",
                        }}
                    >
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Home;
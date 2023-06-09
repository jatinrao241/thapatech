import React from 'react'

const About = () => {
    return (
        <>
            <div id="about" className="about-background" data-aos="zoom-in">
                <h1 className="text-center pt-5 mt-0">ABOUT US</h1>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 developers-text" data-aos="fade-right">
                            <h4>DEVELOPERS, DEVELOPERS, DEVELOPERS</h4>
                            <h1>A FRAME WORK WITH AMAZING DEVELOPER EXPERIENCE</h1>
                            <h3>GraphCommerce® has been developed by developers, for developers. It is built with the best open-source frameworks and libraries for the modern web, used by millions, and subject to continuous innovation by the largest developer communities in the world.</h3>
                            <button type="button" className='view-documentation'>View documentation</button>
                        </div>   
                        <div className="col-lg-6 developers-image" data-aos="fade-left">
                            <img src="./image/laptopscreen.jpg" alt="laptopscreen"/>
                        </div>
                        <div className="col-lg-6 developers-list" data-aos="fade-right">
                            <h6><span>›_</span>
                                Realtime feedback in your IDE with typescript
                            </h6>
                            <h6><span>›_</span>
                                Fast refresh provides instant feedback during development
                            </h6>
                            <h6><span>›_</span>
                                Fully configured Webpack requires none of your time
                            </h6>
                            <h6><span>›_</span>
                                Validate your code on build time with Typescript to prevent failing builds
                            </h6>
                            <h6><span>›_</span>
                                Discover the GraphQL schema with GraphQL Playground
                            </h6>
                            <h6><span>›_</span>
                                Zero-maintenance hosting via Vercel
                            </h6>
                            <h6><span>›_</span>
                                Standardized advanced form handling
                            </h6>
                            <h6><span>›_</span>
                                Next.js file system routing
                            </h6>
                            <h6><span>›_</span>
                                Easily themable component library designed for e-commerce
                            </h6>
                            <h6><span>›_</span>
                                Declarative, 60fps animations using Framer Motion
                            </h6>
                            <h6><span>›_</span>
                                Auto-generated Typescript definitions from GraphQL schema queries
                            </h6>
                            <h6><span>›_</span>
                                Query multiple back-ends with Apollo Client and GraphQL Mesh
                            </h6>
                            <h6><span>›_</span>
                                Magento PWA out of the box with the included manifest
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;

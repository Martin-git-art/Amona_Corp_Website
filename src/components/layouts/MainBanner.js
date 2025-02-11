import React from "react";
import { useRouter } from "next/router";

export default function ManinBanner() {
    const basePath = useRouter();
    return (
        <main className="main">
            <section id="hero" className="hero section dark-background">
                <img src={`${basePath}`} alt="" className="" />
                <div className="container d-flex flex-column align-items-center text-center rm-mt-auto mt-auto">
                    <h2 className="">Establishing<br /><span>Communication</span> Solutions</h2>
                    <p className="d-sm-none d-md-block d-none">Building F Yida Science Park, NO.11 Jinpu Road SIP, Suzhou City, Jiangsu Province, China</p>
                    <div className="">
                        {/* <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" className="glightbox pulsating-play-btn mt-3"></a> */}
                    </div>
                </div>
                <div className="about-info mt-auto position-relative d-sm-none d-md-block d-none">
                    <div className="container position-relative">
                        <div className="row">
                            <div className="col-lg-6">
                                <h2>About Amona Corporation</h2>
                                <p>
                                    <b>Amona Corporation</b> delivers global wireless telecom solutions, specializing in O-RAN, Small Cells, and Optics. We prioritize quality, innovation, and customer satisfaction. Mission: Connecting everything.
                                </p>
                            </div>
                            <div className="col-lg-3">
                                <h3>Where</h3>
                                <p> Suzhou City, Jiangsu Province, China</p>
                            </div>
                            <div className="col-lg-3">
                                <h3>When</h3>
                                <p>Monday to Friday<br />9:00 AM-5:00 PM </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
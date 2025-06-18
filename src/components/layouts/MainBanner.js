import React from "react";
import { useRouter } from 'next/router';
import data from '../../../public/DB/mainBanner.json';

export default function ManinBanner() {
    const { basePath } = useRouter();
    return (
        <main className="main">
            <section id="hero" className="hero section dark-background">
                <img src={`${basePath}/assets/img/hero-bg.webp`} alt="" className="" />
                <div className="container d-flex flex-column align-items-center text-center rm-mt-auto mt-auto">
                    <h2 className="">{data.heading1}<br /><span>{data.heading2}</span>{data.heading3}</h2>
                    <p className="d-sm-none d-md-block d-none">{data.subheading}</p>
                    <div className="">
                        {/* <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" className="glightbox pulsating-play-btn mt-3"></a> */}
                    </div>
                </div>
                <div className="about-info mt-auto position-relative d-sm-none d-md-block d-none">
                    <div className="container position-relative">
                        <div className="row">
                            <div className="col-lg-6">
                                <h2>{data.aboutHeading}</h2>
                                <p>
                                    <b>Amona Corporation</b> {data.aboutDetail}
                                </p>
                            </div>
                            <div className="col-lg-3">
                                <h3>Where</h3>
                                <p>{data.where}</p>
                            </div>
                            <div className="col-lg-3">
                                <h3>When</h3>
                                <p>{data.whenDay}<br />{data.whenTime}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
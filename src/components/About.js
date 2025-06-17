import React from "react";
import data from '../../public/DB/aboutus.json';
import { useRouter } from "next/router";


export default function About() {
    const {basePath} = useRouter()
  return (
    <section id="contact" className="about-section">
      <div class="container">
        <div class="row gy-4 mt-1">
          <div class="col-lg-6 map mt-0">
          <img src={`${basePath}/assets/img/about-bg.jpg`} alt="" className="aboutImg" />
          </div>
          <div class="col-lg-6 d-flex flex-column justify-content-center mt-0">
                <h1>{data.heading}</h1>
                <p>{data.description}</p>
                <div>
                <a class="cta-btn d-inline d-sm-inline" href={`${basePath}/service`}>Read More</a>
                </div>
                
          </div>

        </div>

      </div>

    </section>
  )
}

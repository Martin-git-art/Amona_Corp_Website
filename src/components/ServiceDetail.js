import React from "react";
import data from '../../public/DB/service.json';
import { useRouter } from "next/router";


export default function ServiceDetail() {
    const {basePath} = useRouter()
  return (
    <section id="contact" className="about-section">
      <div class="container">
        <div class="row gy-4 mt-1">
          <div class="col-lg-6 map">
          <img src={`${basePath}/assets/img/serv.jpg`} alt="" className="aboutImg" />
          </div>
          <div class="col-lg-6 d-flex flex-column justify-content-center">
                <h1>{data.heading}</h1>
                <p>{data.description}</p>
                <div>
                </div>   
          </div>
        </div>
        <div class="row gy-4 mt-1">
          <div class="col-lg-6 d-flex flex-column justify-content-center">
                <h1>{data.serviceTitle}</h1>
                <p>{data.serviceDesc}</p>
                <div>
                </div>   
          </div>
          <div class="col-lg-6 map">
          <img src={`${basePath}/assets/img/serv2.jpg`} alt="" className="aboutImg2" />
          </div>
        </div>
      </div>
    </section>
  )
}

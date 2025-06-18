import React from "react";
import { useRouter } from "next/router";
import menuData from '../../../public/DB/menu.json';


export default function Footer() {
    const {basePath} = useRouter();
    return (
        <footer id="footer" className="footer dark-background">
            <div className="footer-top">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-lg-5 col-md-6 footer-about">
                            <a href="index.html" className="logo d-flex align-items-center me-auto">
                                <img src={`${basePath}/assets/img/logo.png`} alt="" />
                            </a>
                            <div className="footer-contact pt-3">
                                <p>Blk 3005</p>
                                <p>Ubi Ave 3, #03-56 Singapore (408861)</p>
                                <p className="mt-3"><strong>Phone:</strong> <span>15919070082</span></p>
                                <p><strong>Email:</strong> <span>contact@amona-corp.com</span></p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-3 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                {menuData.map(({ name, href, children }, index)=>(
                                    <li><a href={`${basePath}${href}`}>{name}</a></li>
                                ))}
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-3 footer-links">
                            <h4>Our Services</h4>
                            <ul>
                                <li><a href="#">PABX Solutions</a></li>
                            </ul>
                        </div>

                        {/* <div className="col-lg-2 col-md-3 footer-links">
                            <h4>Hic solutasetp</h4>
                            <ul>
                                <li><a href="#">Molestiae accusamus iure</a></li>
                                <li><a href="#">Excepturi dignissimos</a></li>
                                <li><a href="#">Suscipit distinctio</a></li>
                                <li><a href="#">Dilecta</a></li>
                                <li><a href="#">Sit quas consectetur</a></li>
                            </ul>
                        </div> */}

                        {/* <div className="col-lg-2 col-md-3 footer-links">
                            <h4>Nobis illum</h4>
                            <ul>
                                <li><a href="#">Ipsam</a></li>
                                <li><a href="#">Laudantium dolorum</a></li>
                                <li><a href="#">Dinera</a></li>
                                <li><a href="#">Trodelas</a></li>
                                <li><a href="#">Flexo</a></li>
                            </ul>
                        </div> */}

                    </div>
                </div>
            </div>

            <div className="copyright text-center">
                <div className="container d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center">

                    <div className="d-flex flex-column align-items-center align-items-lg-start">
                        <div>
                            © Copyright <strong><span>Amona Corporation
                            </span></strong>. All Rights Reserved
                        </div>
                        <div className="credits">

                            Designed by <a href="#">NIM</a>
                        </div>
                    </div>

                    <div className="social-links order-first order-lg-last mb-3 mb-lg-0">
                        <a href=""><i className="bi bi-twitter-x"></i></a>
                        <a href=""><i className="bi bi-facebook"></i></a>
                        <a href=""><i className="bi bi-instagram"></i></a>
                        <a href=""><i className="bi bi-linkedin"></i></a>
                    </div>
                </div>
            </div>
            <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
        </footer>
    )
}


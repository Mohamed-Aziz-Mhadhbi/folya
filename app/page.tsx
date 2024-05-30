"use client";

import "./styles/responsive.css";
import AboutUs from "@/components/AboutUs";
import Service from "@/components/Service";
import Offers from "@/components/Offers";
import Devis from "@/components/Devis";
import FAQ from "@/components/FAQ";
import Feature from "@/components/Features";
import { prefix } from '@/prefix';

export default function Home() {

    return (
        <>
            <Offers />
            <div className="wrap">
                <section className="content">
                    <div className="wrapper" id="home">
                        <main>
                            <AboutUs />
                            <Feature />
                            <Service />
                            <FAQ />
                            <Devis />
                        </main>
                    </div>
                    <a id="scroll-top" className="btn" href="#" style={{}}>
                        <i className="fa-solid fa-arrow-up-long" />
                    </a>
                </section>
            </div>
            <script src={`${prefix}/js/script.js`}  />
            <script src={`${prefix}/js/owl.carousel.min.js`}  />
            <script src={`${prefix}/js/jquery-2.2.4.min.js`}  />
            <script src={`${prefix}/js/bootstrap.min.js`}  />
            <script src={`${prefix}/js/popper.min.js`}  />
            <script src={`${prefix}/js/jquery.sticky.js`}  />
            <script src={`${prefix}/js/jquery.slicknav.min.js`}  />
            <script src={`${prefix}/js/jquery.magnific-popup.min.js`}  />
            <script src={`${prefix}/js/mixitup.min.js`}  />
            <script src={`${prefix}/js/jquery-ui.min.js`}  />
            <script src={`${prefix}/js/ajaxchimp.min.js`}  />
            <script src={`${prefix}/js/form-contact.js`}  />
            <script src={`${prefix}/js/main.js`}  />
        </>
    );
}

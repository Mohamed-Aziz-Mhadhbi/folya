"use client";

import { useDynamicStyle } from "./useDynamicStyles";
import "./styles/responsive.css";
import AboutUs from "@/components/AboutUs";
import Service from "@/components/Service";
import Offers from "@/components/Offers";
import Devis from "@/components/Devis";
import FAQ from "@/components/FAQ";
import Feature from "@/components/Features";

export default function Home() {
    useDynamicStyle("/styles/responsive.css");

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
            <script src="/js/script.js" />
            <script src="/js/owl.carousel.min.js" />
            <script src="/js/jquery-2.2.4.min.js" />
            <script src="/js/bootstrap.min.js" />
            <script src="/js/popper.min.js" />
            <script src="/js/jquery.sticky.js" />
            <script src="/js/jquery.slicknav.min.js" />
            <script src="/js/jquery.magnific-popup.min.js" />
            <script src="/js/mixitup.min.js" />
            <script src="/js/jquery-ui.min.js" />
            <script src="/js/ajaxchimp.min.js" />
            <script src="/js/form-contact.js" />
            <script src="/js/main.js" />
        </>
    );
}

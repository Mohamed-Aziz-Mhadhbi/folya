"use client";

import AboutUs from "@/components/AboutUs";
import Service from "@/components/Service";
import Offers from "@/components/Offers";
import Devis from "@/components/Devis";
import FAQ from "@/components/FAQ";
import Feature from "@/components/Features";
import Loader from "@/components/Loader";
import Tarif from "@/components/Tarif";

export default function Home() {

    return (
        <>
            <Loader />
            <Offers />
            <div className="wrapper" id="home">
                <main>
                    <AboutUs />
                    <Feature />
                    <Service />
                    <Tarif />
                    <FAQ />
                    <Devis />
                </main>
            </div>
            <a id="scroll-top" className="btn" href="#" style={{ display: "none" }}>
                <i className="fa-solid fa-arrow-up-long" />
            </a>
        </>
    );
}

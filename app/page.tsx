"use client";
import Hero from "@/components/Hero";
import { prefix } from "@/prefix";
import { useDynamicStyle } from "./useDynamicStyles";
import "./styles/responsive.css";
import AboutUs from "@/components/AboutUs";
import Service from "@/components/Service";
import Offers from "@/components/Offers";
import Devis from "@/components/Devis";
import FAQ from "@/components/FAQ";

export default function Home() {
    useDynamicStyle("/styles/responsive.css");

    return (
        <>
            <Hero />
            <div className="wrap">
                <section className="content">
                    {/* ====== Preloader ====== */}
                    <div id="preload" style={{ display: "none" }}>
                        <img src={`${prefix}/preload.png`} alt="" />
                    </div>
                    {/* ======End Preloader ====== */}
                    <div className="wrapper" id="home">
                        <main>
                            <Offers />
                            <AboutUs />
                            <Service />
                            <FAQ />
                            <Devis />
                        </main>
                    </div>
                    {/*/.wrapper*/}
                    {/* ====== Scroll Top ====== */}
                    <a id="scroll-top" className="btn" href="#" style={{}}>
                        <i className="fa-solid fa-arrow-up-long" />
                    </a>
                    {/* ====== Carousel ====== */}
                    {/* ====== Custom js ======  */}
                </section>
            </div>
        </>
    );
}

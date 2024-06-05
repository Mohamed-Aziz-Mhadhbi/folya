"use client";

import React, { useState, useEffect } from 'react';
import AboutUs from "@/components/AboutUs";
import Service from "@/components/Service";
import Offers from "@/components/Offers";
import Devis from "@/components/Devis";
import FAQ from "@/components/FAQ";
import Feature from "@/components/Features";
import Loader from '@/components/Loader';

export default function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate a loading period
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000); // 3 seconds for example

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (

        <>
            <Offers />
            <div className="wrapper" id="home">
                <main>
                    <AboutUs />
                    <Feature />
                    <Service />
                    <FAQ />
                    <Devis />
                </main>
            </div>
            <a id="scroll-top" className="btn" href="#" >
                <i className="fa-solid fa-arrow-up-long" />
            </a>
        </>

    );
}

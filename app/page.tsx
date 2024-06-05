"use client";

import React, { useState, useEffect } from 'react';
import AboutUs from "@/components/AboutUs";
import Service from "@/components/Service";
import Offers from "@/components/Offers";
import Devis from "@/components/Devis";
import FAQ from "@/components/FAQ";
import Feature from "@/components/Features";
import Loader from '@/components/Loader';
import Script from 'next/script';
import Head from 'next/head';

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
            <Head>
                <meta charSet="UTF-8" />
                <title>
                    Folya
                </title>
                <meta name="description" content="" />
                <meta name="keywords" content="" />
                {/* Always force latest IE rendering engine */}
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                {/* Mobile Specific Meta */}
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                {/* Favicon */}
                <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon" />
                {/* Custom style CSS */}
                <link rel="stylesheet" href="css/style.css" />
                {/* Responsive CSS */}
                <link rel="stylesheet" href="css/responsive.css" />
            </Head>

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

            <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></Script>
            <Script src="js/owl.carousel.min.js"></Script>
            <Script src="js/script.js"></Script>

        </>

    );
}

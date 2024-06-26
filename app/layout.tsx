import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import Head from 'next/head';
import Script from 'next/script';
import "./globals.css";

export const metadata: Metadata = {
  title: "Folya",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <title>
          Folya
        </title>
        <meta name="description" content="Folya - Optimize your workflow and enhance productivity" />
        <meta name="keywords" content="Folya, healthcare, management, productivity" />
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
      <body>
        <Navbar />
        <main className="relative overflow-hidden">
          {children}
        </main>
        <Footer />
        <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></Script>
        <Script src="js/owl.carousel.min.js"></Script>
        <Script src="js/script.js"></Script>
      </body>
    </html>
  );
}

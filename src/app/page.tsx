"use client";
import { Metadata } from "next";
import Head from "next/head";
import { TypeAnimation } from "react-type-animation";

export const metadata: Metadata = {
  title: "Wai Yan Lin",
  description: "Home Page",
};

export default function Page() {
  return (
    <>
      <Head>
        <title>Wai Yan Lin (Backend Developer)</title>
        <meta name="title" content="Wai Yan Lin (Backend  Developer)" />
        <meta
          name="description"
          content="Greetings, I'm Wai Yan Lin, a graduate of the University of Computer
            Studies Maubin. My journey in the world of technology commenced with
            my graduation, and since then, I've been on an exhilarating quest to
            acquire a diverse set of skills, including MySQL, Node.js,
            JavaScript, MongoDB, React, and other cutting-edge technologies."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://portfolio-devwaiyanlinn.vercel.app/" />
        <meta property="og:title" content="Wai Yan Lin (Backend  Developer)" />
        <meta
          property="og:description"
          content="Greetings, I'm Wai Yan Lin, a graduate of the University of Computer
            Studies Maubin. My journey in the world of technology commenced with
            my graduation, and since then, I've been on an exhilarating quest to
            acquire a diverse set of skills, including MySQL, Node.js,
            JavaScript, MongoDB, React, and other cutting-edge technologies."
        />
        <meta
          property="og:image"
          content="/p.jpeg"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://portfolio-devwaiyanlinn.vercel.app/" />
        <meta
          property="twitter:title"
          content="Wai Yan Lin (Backend  Developer)"
        />
        <meta
          property="twitter:description"
          content="Greetings, I'm Wai Yan Lin, a graduate of the University of Computer
            Studies Maubin. My journey in the world of technology commenced with
            my graduation, and since then, I've been on an exhilarating quest to
            acquire a diverse set of skills, including MySQL, Node.js,
            JavaScript, MongoDB, React, and other cutting-edge technologies."
        />
        <meta
          property="twitter:image"
          content="/p.jpeg"
        />
      </Head>
      <div className="h-screen -mt-20 w-full flex flex-col justify-center items-center">
        <h1 className="xs:text-4xl md:text-6xl font-serif">WAI YAN LIN</h1>
        <h2 className="mt-5 xs:text-md md:text-2xl">
          <TypeAnimation
            sequence={[
              "I'm Backend Developer.",
              2000,
              "I'm Web Developer.",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
          ></TypeAnimation>
        </h2>
      </div>
    </>
  );
}

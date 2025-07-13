// components/RomanticCounter.jsx
import React, { useEffect, useState } from "react";
import CountUp from "./CountUp";
import video from "./assets/video2.mp4";

const RomanticCounter = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen md:min-h-[1500px] w-full overflow-hidden flex items-center justify-center bg-black text-white">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover brightness-50"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-2xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-snug">
          <CountUp
            from={0}
            to={365}
            duration={1.8}
            separator=","
            className="text-pink-300"
          />
          <span className="block mt-2 text-white text-3xl md:text-6xl">hari kitaa bersama 💖</span>
        </h1>

        {showText && (
          <div className="mt-6 text-lg md:text-xl space-y-4 animate-fadeInSlow">
            <p>
              setiap harii terasa spesiall sejak kamuu hadirr, sekalii lagii akuu berterimakasih kepadamuu karena masihh
              tetap bertahann dengan ku sampai detik inii, semogaa kedepannyaa kitaa lebih baikk, banyakk bahagianyaa, hilangg sedihh nyaa dan sukses bersamaaa AAMIIN❤️❤️
            </p>
            <p className="text-pink-300 font-semibold text-2xl mt-4">
                I LOVEE YOUU MOREEE💖
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RomanticCounter;

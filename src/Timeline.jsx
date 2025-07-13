import { useEffect, useRef, useState } from "react";
import TimelineItem from "./TimelineItem";
import foto1 from "./assets/foto31.jpeg";
import foto2 from "./assets/foto32.jpeg";
import foto3 from "./assets/foto30.jpeg";
import foto4 from "./assets/foto28.jpeg";

const Timeline = () => {
  const sectionRef = useRef(null);
  const [ballY, setBallY] = useState(0);
  const [visible, setVisible] = useState(false);
  const [showFinalMessage, setShowFinalMessage] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const scrollTop = window.scrollY;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      const isVisible =
        scrollTop + windowHeight > sectionTop &&
        scrollTop < sectionTop + sectionHeight;

      setVisible(isVisible);

      if (isVisible) {
        const relativeScroll = scrollTop + windowHeight - sectionTop;

        const maxScroll = sectionHeight;
        const clampedScroll = Math.min(Math.max(0, relativeScroll), maxScroll);

        const newBallY = clampedScroll * 0.8;
        setBallY(newBallY);

        // Tampilkan tulisan saat bola mencapai 90% dari section
        if (newBallY >= sectionHeight * 0.9) {
          setShowFinalMessage(true);
        } else {
          setShowFinalMessage(false);
        }
      } else {
        setShowFinalMessage(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const items = [
    {
      title: "Awal Kita Main Bareng",
      description: "iniii pertamaa kalii kitaa main barenggg, walaupunn samaa temen-temen hehe, pertamaa kali nyaa jugaa akuu boncenginn kamuu, akuu deg-deg ann tauuu ituuu karnaa bisaa boncengin cewee cantikkkkk",
      date: "26 Mei 2024",
      image: foto1,
    },
    {
      title: "Kita COD an Risol",
      description: "saatt ituu akuu baru cape habiss jualann, teruss cod an risol amaa kamuuu, liattt kamuuu yang cantikkk jadiii semangattt lagiiii, akuu senenggg bangettt lohhh ituuuu, kamuu cantikkk bangettt jadii akuu semangatt lagiiii hehehehe",
      date: "28 Juni 2024",
      image: foto2,
    },
    {
      title: "Awal Kita Jadian",
      description: "akuu sangattt ga nyangka kamuu cewee yang cantikkk bisaa samaa akuu cowoo yang kurang dalam apapun inii, akuu sangattt senangg sekalii kamuu bisaa terimaa akuuu. dann saat ituu jugaa pertama kalii akuu panggil sayanggg ke kamuuu",
      date: "13 Juli 2024",
      image: foto3,
    },
    {
      title: "Anniversary",
      description: "satuu tahun sudahh berlalu, kitaa sudah setahun bersamaa, sukaa dan dukaa kitaa lewatii bersamaa, dann sekarangg akuuu masihh sayangg bangett samaa kamuu, bahkan lebihh sayanggg darii duluuu❤️❤️",
      date: "13 Juli 2025",
      image: foto4,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-pink-50 py-20 pb-96 px-4 overflow-hidden"
    >
      <h2 className="text-3xl font-bold text-center mb-24 text-pink-600 z-50">
        Perjalanan Cinta Kita 💞
      </h2>

      {/* Garis */}
      <div className="absolute top-35 left-1/2 w-1 h-full bg-pink-300 transform -translate-x-1/2 z-0" />

      {/* Bola */}
      {visible && (
        <div
          className="block absolute left-1/2 w-4 h-4 bg-pink-100 rounded-full shadow-md shadow-pink-400 z-0 transition-all duration-200"
          style={{
            top: `${ballY}px`,
            transform: "translateX(-50%)",
          }}
        />
      )}

      {/* Timeline Items */}
      <div className="flex flex-col gap-12 max-w-5xl mx-auto relative z-10">
        {items.map((item, index) => (
          <TimelineItem
            key={index}
            {...item}
            side={index % 2 === 0 ? "left" : "right"}
          />
        ))}
      </div>
      {/* Teks "Selamanya 💖" dengan blur efek di bawahnya */}
      <div className="absolute bg-pink-50 py-10 pb-60 left-1/2 mt-16 transform -translate-x-1/2 z-20 text-center">
        <div className="relative w-full">
          <p className="text-pink-600 text-3xl md:text-4xl font-extrabold font-cute animate-bounce drop-shadow-lg">
            Selamanyaa 💖
          </p>
          <p className="text-pink-400 mt-1 italic text-base md:text-lg opacity-90 animate-fade-in-slow">
            semogaa kitaa bisaa bersamaa selamanyaa, Aamiin
          </p>

          {/* Blur efek */}
          <div
            className="absolute top-full left-1/2 h-98 w-screen bg-pink-300/80 blur-2xl opacity-60 -translate-x-1/2 mt-8"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
};

export default Timeline;

import React, { Component } from "react";
import RotatingText from "./RotatingText";
import background from "./assets/background.png";
import MusicPlayer from "./MusicPlayer";

export default class Home extends Component {
  render() {
    return (
      <div className="flex h-screen items-center justify-center">
        <img
          src={background}
          alt="background"
          className="fixed top-0 left-0 w-full h-full object-cover -z-20"
        />
        <div className="flex items-center justify-center min-h-screen verflow-hidden px-4">
          <div className="flex flex-col md:flex-row items-center text-6xl md:text-8xl font-bold text-center gap-3 md:gap-1 max-w-screen-lg">
            <p className="px-4 py-2 text-black rounded-lg">Halo</p>
            <RotatingText
              texts={["Sayanggkuu", "Cintaaakuu", "Cantikkkkuuu", "Pacarrrkuu"]}
              mainClassName="px-2 sm:px-2 md:px-3 bg-pink-200 text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </div>
          <a
            href="#typing"
            className="animate-bounce flex justify-center items-center flex-col absolute bottom-5 w-full"
          >
            <p className="text-black text-center">scroll</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-black"
              viewBox="0 0 17 17"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M2.16 6.246c.225 0 .45.062.65.196l6.229 4.156l6.037-4.197a1.175 1.175 0 0 1 1.304 1.958l-6.688 4.63a1.174 1.174 0 0 1-1.304.002l-6.88-4.589a1.178 1.178 0 0 1 .652-2.156z"
              />
            </svg>
          </a>
        </div>

        {/* Musik Player */}
        <MusicPlayer />
      </div>
    );
  }
}

"use client";

import { useState, useEffect, ReactNode, cloneElement } from "react";
import DraggableWindow from "./mainComponents/DraggableWindow";
import WaveBackground from "./mainComponents/WaveBackground";
import {
  AboutContent,
  ProjectsContent,
  SkillsContent, ContactContent,
  RantContent, VrrContent,
} from "./mainComponents/WindowContents";
import { playSound, sounds } from "./mainComponents/sound";

interface Window {
  id: number;
  title: string;
  content: ReactNode;
  zIndex: number;
}

export default function Home() {
  const [windows, setWindows] = useState<Window[]>([]);
  const [nextZIndex, setNextZIndex] = useState(10);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [bgMusic, setBgMusic] = useState<HTMLAudioElement | null>(null);

  const openWindow = (title: string, content: ReactNode) => {
    playSound(sounds.windowOpen, 0.3);
    const newWindow: Window = {
      id: Date.now(),
      title,
      content,
      zIndex: nextZIndex,
    };
    setWindows([...windows, newWindow]);
    setNextZIndex(nextZIndex + 1);
  };

  const closeWindow = (id: number) => {
    playSound(sounds.windowClose, 0.3);
    setWindows(windows.filter((w) => w.id !== id));
  };

  const focusWindow = (id: number) => {
    setWindows(
      windows.map((w) => (w.id === id ? { ...w, zIndex: nextZIndex } : w))
    );
    setNextZIndex(nextZIndex + 1);
  };

  const toggleBackgroundMusic = () => {
    if (!bgMusic) {
      const audio = new Audio("/music/bg.mp3");
      audio.loop = true;
      audio.volume = 0.5;
      setBgMusic(audio);
      audio.play();
      setIsMusicPlaying(true);
    } else {
      if (isMusicPlaying) {
        bgMusic.pause();
        setIsMusicPlaying(false);
      } else {
        bgMusic.play();
        setIsMusicPlaying(true);
      }
    }
  };

  const handleCardClick = (detailComponent: ReactNode) => {
    // If the passed component is a valid React element, clone it to inject music props
    // so child detail components can control playback.
    try {
      // cloneElement requires a ReactElement; guard and fallback to opening as-is
      const maybeCloned =
        detailComponent &&
        typeof detailComponent === "object" &&
        "props" in detailComponent
          ? cloneElement(detailComponent as any, {
              isMusicPlaying,
              setIsMusicPlaying,
              bgMusic,
              setBgMusic,
            })
          : detailComponent;

      openWindow("Details", maybeCloned);
    } catch (err) {
      // Fallback: open without injecting props
      openWindow("Details", detailComponent);
    }
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Animated Wave Background */}
      <WaveBackground />

      {/* Main Desktop */}
      <div className="relative z-0 flex items-center justify-center min-h-screen p-4">
        <div className="bg-black-200 rounded-lg shadow-2xl border-1 border-gray-400 w-full max-w-2xl">
          {/* Window Title Bar */}
          <div className="bg-gradient-to-r from-orange-900 to-orange-800 px-4 py-3 rounded-t flex justify-between items-center">
            <span className="text-white font-bold">
              <span>Main Hub</span>
            </span>

            <div className="flex gap-2">
              <button className="w-5 h-5 bg-red-500 hover:bg-red-600 border border-gray-500 flex items-center justify-center text-white text-xs font-bold">
                x
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="bg-white p-12 rounded-b text-center">
            <h1 className="text-5xl font-bold mb-2 text-gray-600">
              hi!{" "}
              <button
                onClick={() =>
                  openWindow(
                    "Why VRR?",
                    <VrrContent
                      onCardClick={handleCardClick}
                      isMusicPlaying={isMusicPlaying}
                      setIsMusicPlaying={setIsMusicPlaying}
                      bgMusic={bgMusic}
                      setBgMusic={setBgMusic}
                    />
                  )
                }
                className=" hover:scale-101 transition-transform cursor-pointer"
                title="Click Me"
              >
                <span className="text-orange-500">we are r.v.v</span>
              </button>
            </h1>

            <p className="text-xl text-gray-600 mb-8">
              devs, students, buddies
            </p>

            {/* Icon Buttons */}
            <div className="flex gap-6 justify-center flex-wrap">
              <button
                onClick={() =>
                  openWindow(
                    "Meet the Devs",
                    <AboutContent onCardClick={handleCardClick} />
                  )
                }
                className="flex flex-col items-center gap-2 p-4 hover:scale-110 transition-transform cursor-pointer hover:bg-gray-100 rounded transition-colors"
                title="All my fellas"
              >
                <div className="text-5xl hue-rotate-[3.142rad]">ℹ️</div>
                <span className="text-sm font-semibold text-gray-600">
                  about
                </span>
              </button>

              <button
                onClick={() =>
                  openWindow("Our Collective Projects", <ProjectsContent />)
                }
                className="flex flex-col items-center gap-2 p-4 hover:scale-110 transition-transform cursor-pointer hover:bg-gray-100 rounded transition-colors"
                title="Mostly school projects"
              >
                <div className="text-5xl hue-rotate-[6.142rad]">📁</div>
                <span className="text-sm font-semibold text-gray-600">
                  projects
                </span>
              </button>

              <button
                onClick={() => openWindow("Keep in Touch", <ContactContent />)}
                className="flex flex-col items-center gap-2 p-4 hover:scale-110 transition-transform cursor-pointer hover:bg-gray-100 rounded transition-colors"
                title="Plz dont sent spam"
              >
                <div className="text-5xl hue-rotate-[3.142rad]">📧</div>
                <span className="text-sm font-semibold text-gray-600">
                  contact
                </span>
              </button>

              <button
                onClick={() => openWindow("FAQ", <SkillsContent />)}
                className="flex flex-col items-center gap-2 p-4 hover:scale-110 transition-transform cursor-pointer hover:bg-gray-100 rounded transition-colors"
                title="Questions? No? Too bad."
              >
                <div className="text-5xl hue-rotate-[1.142rad]">❓</div>
                <span className="text-sm font-semibold text-gray-600">faq</span>
              </button>

              <button
                onClick={() => openWindow("Rants", <RantContent />)}
                className="flex flex-col items-center gap-2 p-4 hover:scale-110 transition-transform cursor-pointer hover:bg-gray-100 rounded transition-colors"
                title="We Complain--A Lot"
              >
                <div className="text-5xl hue-rotate-[2.142rad]">🗣️</div>
                <span className="text-sm font-semibold text-gray-600">
                  rants
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Draggable Windows */}
      {windows.map((window) => (
        <DraggableWindow
          key={window.id}
          title={window.title}
          onClose={() => closeWindow(window.id)}
          zIndex={window.zIndex}
          onFocus={() => focusWindow(window.id)}
        >
          {window.content}
        </DraggableWindow>
      ))}
      <button
        onClick={toggleBackgroundMusic}
        className="fixed bottom-8 right-8 text-6xl hover:scale-110 transition-transform cursor-pointer bg-white rounded-full p-4 shadow-lg border-2 border-gray-300 hover:shadow-xl z-50"
        title={
          isMusicPlaying ? "Pause background music" : "Play background music"
        }
      >
        {isMusicPlaying ? (
          <span className="relative">
            ☕
            <span className="absolute -top-1 -right-1 text-xl hue-rotate-[8.742rad]">
              🎵
            </span>
          </span>
        ) : (
          <span className="grayscale opacity-60 hue-rotate-">☕</span>
        )}
      </button>
    </div>
  );
}

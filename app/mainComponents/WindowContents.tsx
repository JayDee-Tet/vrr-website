import React, { JSX } from 'react';

import WhyVrrDetails from "../misComponents/whyVrrDetails.jsx";

import HowardCard from "../cardComponents/howardCard";
import RgCard from "../cardComponents/rgCard";
import KhenCard from "../cardComponents/khenCard";
import JdCard from "../cardComponents/jdCard";
import HowardDetails from "../cardComponents/howardDetails.jsx";
import JayDeeDetails from "../cardComponents/jdDetails.jsx";
import KhenDetails from "../cardComponents/khenDetails.jsx";
import RgDetails from "../cardComponents/rgDetails.jsx";

import RantCard1 from "../cardComponents/rantCards/RantCard1.jsx";
import RantCard2 from "../cardComponents/rantCards/RantCard2.jsx";
import RantCard9 from "../cardComponents/rantCards/RantCard9.jsx";

export const VrrContent = ({
  onCardClick,
  isMusicPlaying,
  setIsMusicPlaying,
  bgMusic,
  setBgMusic,
}: {
  onCardClick: (component: JSX.Element) => void;
  isMusicPlaying?: boolean;
  setIsMusicPlaying?: any;
  bgMusic?: any;
  setBgMusic?: any;
}) => (
  <div className="space-y-4">
    <div className="">
      <WhyVrrDetails
        onClick={() => onCardClick(<WhyVrrDetails 
          isMusicPlaying={isMusicPlaying}
          setIsMusicPlaying={setIsMusicPlaying}
          bgMusic={bgMusic}
          setBgMusic={setBgMusic}
          onClick={() => {}}
        />)}
        isMusicPlaying={isMusicPlaying}
        setIsMusicPlaying={setIsMusicPlaying}
        bgMusic={bgMusic}
        setBgMusic={setBgMusic}
      />
    </div>
  </div>
);

export const AboutContent = ({
  onCardClick,
}: {
  onCardClick: (component: JSX.Element, title: string) => void;
}) => (
  <div className="space-y-4">
    <div className="grid grid-cols-2 gap-4">
      <HowardCard
        onClick={() => onCardClick(<HowardDetails />, "Howard Ramos")}
      />
      <RgCard onClick={() => onCardClick(<RgDetails />, "Rg Vicenio")} />
      <KhenCard onClick={() => onCardClick(<KhenDetails />, "Khen Ramos")} />
      <JdCard onClick={() => onCardClick(<JayDeeDetails />, "JayDee Velayo")} />
    </div>

    <p className="text-gray-700 text-center">
      a group of aspiring devs, students, and buddies.
    </p>
  </div>
);

export const ProjectsContent = () => (
  <div className="space-y-4">
    {/*<h2 className="text-2xl font-bold text-gray-800">Our Projects</h2>*/}
    <div className="space-y-3">
      <div className="p-3 bg-gray-100 rounded border border-gray-300 hover:shadow-lg transition-shadow duration-300">
        <h3 className="PrjCon">
          <span className="relative inline-block before:absolute before:-inset-0.5 before:block before:-skew-y-1 before:bg-yellow-500">
            <span className="relative font-bold text-lg text-gray-600">
              Personal ISBN Library and Tools
            </span>
          </span>
        </h3>
        <div className="mt-2">
          <p className="text-sm text-gray-600 ">Jaydee and Co.</p>
        </div>
      </div>
      <div className="p-3 bg-gray-100 rounded border border-gray-300 hover:shadow-lg transition-shadow duration-300">
        <h3 className="PrjCon">
          <span className="relative inline-block before:absolute before:-inset-0.5 before:block before:-skew-y-1 before:bg-yellow-500">
            <span className="relative font-bold text-lg text-gray-600">
              Pseudoramdom ps generator and manager
            </span>
          </span>
        </h3>
        <div className="mt-2">
          <p className="text-sm text-gray-600">Rg and co.</p>
        </div>
      </div>
      <div className="p-3 bg-gray-100 rounded border border-gray-300 hover:shadow-lg transition-shadow duration-300">
        <h3 className="PrjCon">
          <span className="relative inline-block before:absolute before:-inset-0.5 before:block before:-skew-y-1 before:bg-yellow-500 row-span-9">
            <span className="relative font-bold text-lg text-gray-600 row-span-9">
              Acoustic data transfer system with control
            </span>
          </span>
        </h3>
        <div className="mt-2">
          <p className="text-sm text-gray-600 x">Khen and co.</p>
        </div>
      </div>
      <div className="p-3 bg-gray-100 rounded border border-gray-300 hover:shadow-lg transition-shadow duration-300">
        <h3 className="PrjCon">
          <span className="relative inline-block before:absolute before:-inset-0.5 before:block before:-skew-y-1 before:bg-yellow-500">
            <span className="relative font-bold text-lg text-gray-600">
              Permutation and combination calculator
            </span>
          </span>
        </h3>
        <div className="mt-2">
          <p className="text-sm text-gray-600">Howard and co.</p>
        </div>
      </div>
    </div>
  </div>
);
export const SkillsContent = () => (
  <div className="space-y-4">
    {/*<h2 className="text-2xl font-bold text-gray-800">Our Projects</h2>*/}
    <div className="space-y-3">
      <div className="p-3 bg-gray-100 rounded border border-gray-300 hover:shadow-lg transition-shadow duration-300">
        <h3 className="PrjCon">
          <span className="relative inline-block before:absolute before:-inset-0.5 before:block before:-skew-y-1 before:bg-yellow-500">
            <span className="relative font-bold text-lg text-gray-600">
              Why RVV?
            </span>
          </span>
        </h3>
        <div className="mt-2">
          <p className="text-sm text-gray-600 ">
            It means Velayo, Ramos(2), Vicencio. The last names of this
            website's creators
          </p>
        </div>
      </div>
      <div className="p-3 bg-gray-100 rounded border border-gray-300 hover:shadow-lg transition-shadow duration-300">
        <h3 className="PrjCon">
          <span className="relative inline-block before:absolute before:-inset-0.5 before:block before:-skew-y-1 before:bg-yellow-500">
            <span className="relative font-bold text-lg text-gray-600">
              What is this group's Uni?
            </span>
          </span>
        </h3>
        <div className="mt-2">
          <p className="text-sm text-gray-600">
            Cagayan State University! Carig campus
          </p>
        </div>
      </div>
      <div className="p-3 bg-gray-100 rounded border border-gray-300 hover:shadow-lg transition-shadow duration-300">
        <h3 className="PrjCon">
          <span className="relative inline-block before:absolute before:-inset-0.5 before:block before:-skew-y-1 before:bg-yellow-500">
            <span className="relative font-bold text-lg text-gray-600">
              What's the inspiration for this website?
            </span>
          </span>
        </h3>
        <div className="mt-2">
          <p className="text-sm text-gray-600">
            The YT creator shar! Particularly her website{" "}
            <a
              href="https://sharyap.com
"
            >
              sharyap.com
            </a>{" "}
          </p>
        </div>
      </div>
      <div className="p-3 bg-gray-100 rounded border border-gray-300 hover:shadow-lg transition-shadow duration-300">
        <h3 className="PrjCon">
          <span className="relative inline-block before:absolute before:-inset-0.5 before:block before:-skew-y-1 before:bg-yellow-500">
            <span className="relative font-bold text-lg text-gray-600">
              Did you seriously rip-off shar?
            </span>
          </span>
        </h3>
        <div className="mt-2">
          <p className="text-sm text-gray-600">
            Y-yeah... go watch her videos she's amazing
          </p>
        </div>
      </div>
    </div>
  </div>
);

export const ContactContent = () => (
  <div className="space-y-4">
    {/*<h2 className="text-2xl font-bold text-gray-800">Get in Touch</h2>*/}
    <p className="text-gray-700">We'll respond when we can!</p>
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <span className="font-bold text-gray-600">Email:</span>
        <span className="text-blue-600 hover:bg-blue-200 transition-colors duration-300">
          vrr-team@gmail.com
        </span>
      </div>
      <div className="flex items-center gap-2">
        <span className="font-bold text-gray-600">Discord:</span>
        <span className="text-blue-600 hover:bg-blue-200 transition-colors duration-300">
          VRR Spa
        </span>
      </div>
    </div>
  </div>
);

export const RantContent = () => (
  <div className="space-y-4">
    <div className="grid">
      <>
        <RantCard1 />
        <RantCard2 />
        <RantCard9 />
      </>
    </div>
  </div>
);

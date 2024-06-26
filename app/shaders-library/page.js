"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { roomObjects } from "../isometric-room/tooltipData";

import ShaderCard from "./components/ShaderCard";
import { shadersData } from "./shaderCardsData";

import HorizontalCarousel from "./components/HorizontalCarousel";
import TextReveal from "./components/TextRevealWord";
import Footer from "../components/Footer";

import useMediaQuery from "../isometric-room/components/useQuery";

export default function Home() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <>
      <div style={{ backgroundColor: "#F5F5F7" }}>
        <div id="hero-section">
          {/* top-nav */}
          <div className="ml-10 pt-5 mr-10 flex items-center justify-center">
            {isMobile ? null : (
              <div className="flex w-1/2">
                <div className="items-center justify-center md:ml-20 w-20 h-20 rounded-full bg-orange-500 self-start"></div>
              </div>
            )}

            {/* top right shaders menu */}
            <div className="hidden md:flex 1/2 flex-wrap justify-end gap-7 ">
              {shadersData.map((item, index) => (
                <div key={index} className="max-h-full">
                  <h1 className="text-black font-medium hover:text-orange-600">
                    <Link href={item.link}>{item.name}</Link>
                  </h1>
                </div>
              ))}
            </div>
            {/* topbar */}
          </div>
          <div>
            <HorizontalCarousel />
          </div>
        </div>
        <div>
          <TextReveal />
        </div>
        <Footer backgroundColor="#181818" color="#F5F5F7" fill="#ffffff" />
      </div>
    </>
  );
}

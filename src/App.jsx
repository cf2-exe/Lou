/* eslint-disable no-unused-vars */
"use client";
import Navbar from "./components/Navbar";
import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

export default function App() {

  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,   
      smooth: true,           
      lerp: 0.04,
    });

    return () => {
      scroll.destroy();
    };
  }, []);
  
  return (
    <>
      {/* Scrollable container */}
      <div data-scroll ref={scrollRef} className="main-container">
        <Navbar />

        <section className="h-[200vh] flex flex-col justify-between bg-[#E6D6BC]">

        </section>
      </div>
    </>
  );
}

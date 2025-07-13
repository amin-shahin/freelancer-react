import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const HorizontalScroll = () => {
  const triggerRef = useRef();
  const scrollItemRef = useRef();

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const pin = gsap.fromTo(
      scrollItemRef.current,
      {
        translateX: 0,
        
      },
      {
        translateX: "300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <div className="scroll-outer overflow-hidden">
      <div ref={triggerRef}>
        <div
          ref={scrollItemRef}
          className="scroll-inner h-screen w-[400vw] flex relative"
        >
          <div className="scroll-item  w-screen h-screen flex justify-center items-center ml-8">
            <img
              className="w-full rounded-2xl object-cover  h-[80vh] object-center"
              src={"/images/free6.jpg"}
              alt=""
            />
          </div>
          <div className="scroll-item  w-screen h-screen flex justify-center items-center ml-8 ">
            <img
              className="w-full rounded-2xl object-cover  h-[80vh] object-center"
              src={"/images/free8.jpg"}
              alt=""
            />
          </div>
          <div className="scroll-item  w-screen h-screen flex justify-center items-center ml-8 ">
            <img
              className="w-full rounded-2xl object-cover  h-[80vh] object-center"
              src={"/images/free11.jpg"}
              alt=""
            />
          </div>
          <div className="scroll-item  w-screen h-screen flex justify-center items-center ml-8">
            <img
              className="w-full rounded-2xl object-cover  h-[80vh]  object-center"
              src={"/images/free4.jpg"}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScroll;

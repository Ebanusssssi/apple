import { useGSAP } from '@gsap/react';
import { chipImg, frameImg, frameVideo } from '../utils';
import gsap from 'gsap';
import { useRef } from 'react';
import { animateWithGsap } from '../utils/animations';

const HowItWorks = () => {
  const videoRef = useRef();

  // animations
  useGSAP(() => {
    // chip animation
    gsap.from('#chip', {
      scrollTrigger: {
        trigger: '#chip',
        toggleActions: 'restart none none none',
        start: '20% bottom',
      },
      opacity: 0,
      scale: 0,
      duration: 2,
      ease: 'power2.inOut',
    });

    // texts animation
    animateWithGsap('.g_fadeIn', {
      opacity: 1,
      y: 0,
      duration: 1,
      // stagger: 0.05, --DELAY between elements animation start
      ease: 'power2.inOut',
    });
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width ">
        {/* chip image */}
        <div id="chip" className="flex-center w-full my-20">
          <img src={chipImg} alt="chip" width={180} height={180} />
        </div>

        {/* section title & subtitle*/}
        <div className="flex flex-col items-center">
          <h2 className="hiw-title">
            A17 Pro Chip.
            <br />A monster win for gaming.
          </h2>

          <p className="hiw-subtitle">
            It's here. The biggest redesign in the history of Apple GPUs.
          </p>
        </div>

        {/* video*/}
        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex-center">
            <div className="overflow-hidden">
              <img src={frameImg} alt="frame" className=" relative z-10" />
            </div>
            <div className="hiw-video !rounded-[10px]">
              <video
                playsInline
                preload="none"
                muted
                autoPlay
                loop
                ref={videoRef}
                className="pointer-events-none"
              >
                <source src={frameVideo} type="video/mp4" />
              </video>
            </div>
          </div>

          <p className="text-gray font-semibold text-center mt-3">
            Honkai: Star Rail
          </p>
        </div>

        {/* texts */}
        <div className="hiw-text-container mt-12 md:mt-20">
          <div className="flex flex-col flex-1 justify-center gap-8">
            <p className="hiw-text g_fadeIn">
              A17 Pro is an entirely new class of iPhone chip that delivers our{' '}
              <span className="text-white">
                best graphic performance by far
              </span>
              .
            </p>

            <p className="hiw-text g_fadeIn">
              Mobile{' '}
              <span className="text-white">
                games will look and feel so immersive
              </span>
              with incredibly detailed environments and more lealistic
              characters. And with industry-leading speed and efficiency, A17
              Pro takes fast and runs with it.
            </p>
          </div>

          <div className="flex-1 flex justify-center flex-col g_fadeIn">
            <p className="hiw-text">New</p>
            <p className="hiw-bigtext">Pro-class GPU</p>
            <p className="hiw-text">with 6 cores</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

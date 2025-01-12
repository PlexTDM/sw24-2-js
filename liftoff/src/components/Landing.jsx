import { ReactTyped } from "react-typed"
import LandingTwo from "./LandingTwo"
import { useEffect, useState } from "react";

const Landing = () => {
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setRotation(Math.min(scrollY / 60 % 360, 100));
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <>
            <div className="px-12 w-full pt-5 pb-12 md:pt-20 sm:pb-16 md:pb-20 lg:pb-40 mx-auto flex lg:flex-row md:flex-col gap-10 max-w-[1400px] ">
                <div className="relative z-10 flex flex-col md:items-center lg:w-1/2 md:w-4/5 mx-auto">


                    <h2 className="mb-6 text-5xl leading-[1.15] font-bold text-white">
                        <span>
                            Turn your
                            <span className=" absolute w-[350px] ml-[10px] sm:ml-[15px] xl:ml-[20px] text-gradient">
                                <ReactTyped
                                    strings={[
                                        "web apps",
                                        "plugins",
                                        "NFT arts",
                                        "email list",
                                        "podcast",
                                        "services",
                                        "craft",
                                        "courses",
                                        "ebooks",
                                        "designs",
                                        "writing",
                                        "templates",
                                    ]}
                                    cursorChar="_"
                                    backSpeed={25}
                                    backDelay={1000}
                                    typeSpeed={100}
                                    loop
                                />
                            </span>
                            <br />
                            into digital products that earn money.
                        </span>
                    </h2>
                    <p className="mb-6 leading-snug text-ltpurple2 text-md sm:text-xl">
                        Unlock the power of digital products, grow a loyal audience, and launch your career as a creator. Liftoff is a one-of-a-kind course
                        <span className="relative font-medium text-white"> for creators like you.
                            <img className="absolute right-0 bottom-[-10px]" src="https://liftoffcourse.com/wp-content/themes/liftoff/assets/images/svg/swash2.svg" alt="swash" />
                        </span>
                    </p>
                    {/* pfp */}
                    <div className="flex items-center mt-2 mb-6 sm:mb-0 sm:mt-8">
                        <div className="inline-flex flex-shrink-0 rounded-full">
                            <img className="w-16 h-16 rounded-full" src="https://liftoffcourse.com/wp-content/themes/liftoff/assets/images/header-testimonial.jpg" alt="pfp" />
                        </div>
                        <div className="ml-4 max-w-[400px]">
                            <div className="text-md leading-snug text-ltpurple2">Liftoff helped me turn my stock photography into a profitable side hustle that keeps growing!</div>
                            <div className="mt-1 text-md text-ltpurple2">— Michael Black / Photographer</div>
                        </div>
                    </div>
                </div>
                {/* img on right */}
                <div className="relative grid justify-items-center w-1/2 mx-auto">
                    <div className="relative z-30 header-cover">

                        <img decoding="async" className="rounded-md max-w-[350px] sm:max-w-[450px] lg:max-w-[400px] xl:max-w-[500px] spin"
                            src="/img/cover.jpg" alt="Liftoff eBook"
                            style={{ transform: `translate(0px, -20px) rotate(${rotation}deg)` }}
                        />
                    </div>

                    <div className="absolute my-auto blur-[100px] scale-90 z-10 header-inside w-[500px] aspect-square"></div>
                </div>
            </div>
            <LandingTwo />
        </>
    )
}

export default Landing
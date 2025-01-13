const LandingTwo = () => {
    return (
        <div className="mx-auto relative z-10 pt-12 pb-8 overflow-hidden sm:pt-24 md:pb-24 md:pt-24 lg:pt-16 bg-lstarpurple">
            <div className="grid items-center max-w-8xl gap-5 mx-auto lg:gap-12 lg:grid-cols-2 md:p-12">
                <div className="w-full">
                    <div className="relative w-fit mx-auto video-glow">
                        <a href="https://www.youtube.com/watch?v=Bqy89wYIE3E" title="Watch the Liftoff intro video">
                            <img className="mx-auto rounded-lg shadow-lg hover:cursor-pointer hover:scale-[1.03] transition ease-in-out duration-300 hover:-rotate-1" loading="lazy" width="671px" height="375.54px" src="https://liftoffcourse.com/wp-content/themes/liftoff/assets/images/liftoff-screenshot.jpg" alt="Liftoff Intro Video" />
                        </a>
                    </div>
                </div>

                <div className="relative">
                    <h2 className="font-bold tracking-tight mb-4 text-white md:text-5xl lg:text-5xl sm:leading-10">
                        You&apos;re good at something. Let&apos;s monetize it.
                    </h2>

                    <p className="text-ltpurple2">Designers, developers, educators, photographers, writers, and creators of all stripes are turning their passions into digital products and growing loyal audiences and lucrative digital empires. And you can do it, too.</p>
                    <p className="text-ltpurple2">I created the Liftoff course to teach you step-by-step how to pinpoint your expertise and turn it into digital products like courses, ebooks, memberships, digital goods, podcasts, and templates that earn recurring revenue.</p>
                    <p className="mb-0 text-ltpurple2">Get Liftoff today and let&apos;s turn your creative spark into rocket fuel for your journey into the red-hot creator economy!</p>
                </div>
            </div>
        </div>
    )
}

export default LandingTwo
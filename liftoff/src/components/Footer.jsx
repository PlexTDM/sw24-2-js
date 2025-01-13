const Footer = () => {
    return (
        <footer className="w-full relative z-10 bg-white px-4 py-12 mx-auto md:py-20 sm:px-6 lg:px-8">
            <div className="grid items-center max-w-5xl grid-cols-1 gap-2 mx-auto lg:grid-cols-3 md:gap-6">

                <div className="flex flex-col order-2 md:col-span-1 lg:col-span-2 lg:order-1 ">
                    <a className="hidden lg:block" href="https://liftoffcourse.com">
                        <img className="w-[130px]" height="33.97px" width="130px" src="https://liftoffcourse.com/wp-content/themes/liftoff/assets/images/svg/logo-light.svg" alt="Liftoff Logo" />
                    </a>
                    <div className="flex flex-col gap-2 my-8 lg:my-14">
                        <nav className="flex flex-wrap gap-3 md:gap-6 justify-left">
                            <a href="https://liftoffcourse.com/wp-login.php?redirect_to=https%3A%2F%2Fliftoffcourse.com%2Fdashboard" className="text-base font-medium leading-6 text-gray-900 sm:text-xl hover:text-lpink">Sign In</a>
                            <a href="https://liftoffcourse.com/contact" className="text-base font-medium leading-6 text-gray-900 sm:text-xl hover:text-lpink">Contact</a>
                            <a href="https://liftoffcourse.com/privacy-policy" className="text-base font-medium leading-6 text-gray-900 sm:text-xl hover:text-lpink">Privacy</a>
                            <a href="https://liftoffcourse.com/terms-of-service" className="text-base font-medium leading-6 text-gray-900 sm:text-xl hover:text-lpink">Terms</a>
                        </nav>

                        <nav className="flex flex-wrap gap-4 justify-left">
                            <a href="https://twitter.com/mikemcalister" className="text-sm leading-6 text-[#8b606b] sm:text-base hover:text-lpink">Twitter</a>
                            <a href="https://dribbble.com/mikemcalister" className="text-sm leading-6 text-[#8b606b] sm:text-base hover:text-lpink">Dribbble</a>
                            <a href="https://instagram.com/mikemcalister" className="text-sm leading-6 text-[#8b606b] sm:text-base hover:text-lpink">Instagram</a>
                            <a href="https://mikemcalister.com" className="text-sm leading-6 text-[#8b606b] sm:text-base hover:text-lpink">MikeMcAlister.com</a>
                        </nav>
                    </div>

                    <div>
                        <p className="text-sm leading-snug text-[#8b606b] mb-0">
                            © 2025 Liftoff Course — Designed, coded, written, and produced by Mike McAlister. ✌️
                        </p>
                    </div>
                </div>

                <div className="order-1     lg:order-2 text-slate-900">
                    <div className="flex items-center mb-3">
                        <svg className="hidden mr-2 text-lpink md:block w-5 fill-current" aria-hidden="true" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M288 128H160c-35.3 0-64 28.7-64 64v16c0 61.8 50.2 112 112 112h32c61.8 0 112-50.2 112-112v-16c0-35.3-28.7-64-64-64zm32 80c0 44.1-35.9 80-80 80h-32c-44.1 0-80-35.9-80-80v-16c0-17.6 14.3-32 32-32h128c17.7 0 32 14.4 32 32v16zm-128-32l-12 36-36 12 36 12 12 36 12-36 36-12-36-12-12-36zm112 224H144c-26.5 0-48 21.5-48 48v56c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-56c0-8.8 7.2-16 16-16h160c8.8 0 16 7.2 16 16v56c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-56c0-26.5-21.5-48-48-48zm-32 48c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zm-96 0c-8.8 0-16 7.2-16 16v40c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-40c0-8.8-7.2-16-16-16zm183.2-119.7c20.3-20.1 35.9-44.8 45.7-72.3H416c8.8 0 16-7.2 16-16v-96c0-8.8-7.2-16-16-16h-11.2C378.5 53.5 307.6 0 224 0S69.5 53.5 43.2 128H32c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h11.2c9.7 27.5 25.4 52.2 45.7 72.3C37.1 347 0 396.2 0 454.4V504c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-49.6c0-51.6 38.5-94 88.3-101C150.2 372.7 185.8 384 224 384s73.8-11.3 103.7-30.6c49.8 6.9 88.3 49.3 88.3 101V504c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-49.6c0-58.2-37.1-107.4-88.8-126.1zM224 352c-88.2 0-160-71.8-160-160S135.8 32 224 32s160 71.8 160 160-71.8 160-160 160z"></path></svg>					<h4 className="mb-0 font-sans text-xl font-medium">Join the flight crew!</h4>
                    </div>
                    <p className="mb-3 leading-snug text-sm">Subscribe to the Liftoff newsletter below and I&apos;ll send you a <span className="font-medium text-gradient">free Liftoff chapter</span> and invaluable tips and tricks htmlFor creators.</p>
                    <div>
                        <form className="flex flex-col gap-4">
                            <input type="text" placeholder="First name" required=""
                                className="w-full ring-slate-400 focus:ring-pink ring-1 focus:ring-2 ring-offset-2 py-2 px-3 leading-6 text-sm outline-none bg-white rounded-md shadow-sm"
                            />
                            <input type="email" placeholder="Email address" required=""
                                className="w-full ring-slate-400 focus:ring-pink ring-1 focus:ring-2 ring-offset-2 py-2 px-3 leading-6 text-sm outline-none bg-white rounded-md shadow-sm"
                            />
                            <button type="submit" className="bg-pink rounded-md duration-150 p-2 ease-in-out w-full text-white text-sm" aria-live="assertive">
                                Join the Launch Crew
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
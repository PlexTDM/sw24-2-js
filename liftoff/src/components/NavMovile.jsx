const NavMovile = () => {
    return (
        <div className="lg:hidden">
            <header className="z-50 header sticky-header">
                <nav className="bg-white shadow sm:py-1">
                    <div className="px-2 mx-auto max-w-5xl sm:px-6 md:px-8">
                        <div className="relative flex h-12">
                            <div className="flex items-center justify-between flex-1 col-span-2 gap-2">
                                <div className="flex justify-center flex-1 md:justify-start">
                                    <button className="flex items-center justify-center flex-1 px-2 py-2 rounded-md md:py-1.5 text-lpink bg-lpink">
                                        <svg className="w-3 fill-current" aria-hidden="true" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M12.83 352h262.34A12.82 12.82 0 0 0 288 339.17v-38.34A12.82 12.82 0 0 0 275.17 288H12.83A12.82 12.82 0 0 0 0 300.83v38.34A12.82 12.82 0 0 0 12.83 352zm0-256h262.34A12.82 12.82 0 0 0 288 83.17V44.83A12.82 12.82 0 0 0 275.17 32H12.83A12.82 12.82 0 0 0 0 44.83v38.34A12.82 12.82 0 0 0 12.83 96zM432 160H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0 256H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"></path></svg>
                                        <span className="inline-flex ml-2 text-sm font-medium leading-none md:leading-normal md:text-base">Menu</span>
                                    </button>
                                </div>
                                <div className="flex justify-center flex-1 ">
                                    <button className="flex items-center justify-center flex-1 px-2 py-2 text-sm rounded-md md:text-base md:py-1.5 text-lpink bg-lpink  ">
                                        <svg className="hidden md:block w-3 md:w-3.5 fill-current" aria-hidden="true" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M288 128H160c-35.3 0-64 28.7-64 64v16c0 61.8 50.2 112 112 112h32c61.8 0 112-50.2 112-112v-16c0-35.3-28.7-64-64-64zm32 80c0 44.1-35.9 80-80 80h-32c-44.1 0-80-35.9-80-80v-16c0-17.6 14.3-32 32-32h128c17.7 0 32 14.4 32 32v16zm-128-32l-12 36-36 12 36 12 12 36 12-36 36-12-36-12-12-36zm112 224H144c-26.5 0-48 21.5-48 48v56c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-56c0-8.8 7.2-16 16-16h160c8.8 0 16 7.2 16 16v56c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-56c0-26.5-21.5-48-48-48zm-32 48c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zm-96 0c-8.8 0-16 7.2-16 16v40c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-40c0-8.8-7.2-16-16-16zm183.2-119.7c20.3-20.1 35.9-44.8 45.7-72.3H416c8.8 0 16-7.2 16-16v-96c0-8.8-7.2-16-16-16h-11.2C378.5 53.5 307.6 0 224 0S69.5 53.5 43.2 128H32c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h11.2c9.7 27.5 25.4 52.2 45.7 72.3C37.1 347 0 396.2 0 454.4V504c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-49.6c0-51.6 38.5-94 88.3-101C150.2 372.7 185.8 384 224 384s73.8-11.3 103.7-30.6c49.8 6.9 88.3 49.3 88.3 101V504c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-49.6c0-58.2-37.1-107.4-88.8-126.1zM224 352c-88.2 0-160-71.8-160-160S135.8 32 224 32s160 71.8 160 160-71.8 160-160 160z"></path></svg>								<span className="inline-flex text-sm font-medium leading-none md:ml-2 md:leading-normal md:text-base">Explore <span className="hidden md:block">&nbsp;Course</span></span>
                                    </button>
                                </div>
                                <div className="flex justify-center flex-1 ">
                                    <a className="flex items-center justify-center flex-1 px-2  py-2 text-sm text-white transition duration-150 transform rounded-md md:text-base md:py-1.5 no-underline gradient-button hover:scale-105">
                                        <svg className="hidden md:block w-3 fill-current" aria-hidden="true" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M35.68523,352.06641C9.82784,377.91992-2.94948,442.59375.5759,511.41016c69.11514,3.55859,133.61115-9.35157,159.365-35.10547,40.289-40.2793,42.8769-93.98633,6.31054-130.54883C129.68706,309.19727,75.97033,311.78516,35.68523,352.06641Zm81.6327,84.03125c-8.58592,8.584-30.08394,12.88672-53.11907,11.69922-1.17382-22.93555,3.084-44.49219,11.70311-53.10938,13.42772-13.42578,31.33-14.28906,43.51752-2.10352C131.607,404.77148,130.74565,422.67188,117.31793,436.09766ZM505.16311,19.29688c-1.17578-5.4629-6.98827-11.26563-12.45115-12.4336C460.6163,0,435.464,0,410.4191,0,307.20049,0,245.30018,55.20312,199.09126,128H94.88827c-16.29685,0-35.59956,11.92383-42.88861,26.49805L2.57785,253.29688A28.4,28.4,0,0,0,.06223,264,24.00826,24.00826,0,0,0,24.0661,288h103.953a96.00635,96.00635,0,0,1,96.01354,96V488a24.00826,24.00826,0,0,0,24.00388,24,28.53983,28.53983,0,0,0,10.70311-2.51562l98.74791-49.40626c14.56053-7.28515,26.47457-26.56445,26.47457-42.84374V312.79688c72.5878-46.3125,128.01936-108.40626,128.01936-211.09376C512.07521,76.55273,512.07521,51.40234,505.16311,19.29688ZM358.13792,272.332c-25.332,16.16211-7.50585,6.74024-99.31627,52.209a144.4818,144.4818,0,0,0-71.41006-71.36719c45.373-91.6836,35.89643-73.75,52.21282-99.45313C286.66341,79.61719,337.74146,48,410.4191,48c17.64841,0,33.541,0,51.373,2.248,2.30468,18.26367,2.24413,34.46875,2.18163,51.45507C463.97371,173.97266,432.32141,225.002,358.13792,272.332ZM368.05587,104a40,40,0,1,0,40.00581,40A40.01947,40.01947,0,0,0,368.05587,104Z"></path></svg>							<span className="inline-flex text-sm font-medium leading-none md:ml-2 md:leading-normal md:text-base">
                                            <span>Get Started</span>
                                        </span>
                                    </a>
                                </div>
                            </div>

                            <div className="absolute z-30 w-full p-2 transition duration-150 ease-in bg-white rounded-lg shadow-lg opacity-0 md:w-[360px] translate-y-14 md:right-[70px]">
                                <div className="w-full sticky-chapters">
                                    <div className="flex flex-col sticky-chapters-list">

                                        <div className="relative z-20 flex flex-col gap-1 bg-white section-links">
                                            <a href="#section-browse" className="flex flex-none items-center p-3 space-x-2.5 transition duration-150 ease-in-out rounded-lg hover:no-underline section-browse-link hover:2 focus:no-underline focus:2">
                                                <div className="flex justify-center w-5"><svg className="flex-shrink-0 max-h-[25px] w-[20px] fill-current" aria-hidden="true" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M448 384V16c0-8.8-7.2-16-16-16H80C35.8 0 0 35.8 0 80v352c0 44.2 35.8 80 80 80h352c8.8 0 16-7.2 16-16v-16c0-7.8-5.6-14.3-12.9-15.7-4.2-13-4.2-51.6 0-64.6 7.4-1.5 12.9-7.9 12.9-15.7zm-54 80H80c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h314c-2.7 17.3-2.7 46.7 0 64zm6-112H80c-11.4 0-22.2 2.4-32 6.7V80c0-17.7 14.3-32 32-32h320v304zm-154.66-85.33L272 320l26.66-53.33L352 240l-53.34-26.67L272 160l-26.66 53.33L192 240l53.34 26.67zM160 200l18.66-37.33L216 144l-37.34-18.67L160 88l-18.67 37.33L104 144l37.33 18.67L160 200z"></path></svg></div>
                                                <div className="text-base font-medium leading-6 text-gray-900">Browse Chapters</div>
                                            </a>
                                            <a href="#section-features" className="flex items-center p-3 space-x-2.5 transition duration-150 ease-in-out rounded-lg hover:no-underline hover:2 focus:no-underline focus:2">
                                                <div className="flex justify-center w-5"><svg className="flex-shrink-0 max-h-[25px] w-[22px] fill-current" aria-hidden="true" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M324.42 103.16L384 128l24.84 59.58a8 8 0 0 0 14.32 0L448 128l59.58-24.84a8 8 0 0 0 0-14.32L448 64 423.16 4.42a8 8 0 0 0-14.32 0L384 64l-59.58 24.84a8 8 0 0 0 0 14.32zm183.16 305.68L448 384l-24.84-59.58a8 8 0 0 0-14.32 0L384 384l-59.58 24.84a8 8 0 0 0 0 14.32L384 448l24.84 59.58a8 8 0 0 0 14.32 0L448 448l59.58-24.84a8 8 0 0 0 0-14.32zM384 256a24 24 0 0 0-13.28-21.47l-104.85-52.42-52.4-104.84c-8.13-16.25-34.81-16.25-42.94 0l-52.41 104.84-104.84 52.42a24 24 0 0 0 0 42.94l104.84 52.42 52.41 104.85a24 24 0 0 0 42.94 0l52.4-104.85 104.85-52.42A24 24 0 0 0 384 256zm-146.72 34.53a24 24 0 0 0-10.75 10.74L192 370.33l-34.53-69.06a24 24 0 0 0-10.75-10.74L77.66 256l69.06-34.53a24 24 0 0 0 10.75-10.73L192 141.67l34.53 69.07a24 24 0 0 0 10.75 10.73L306.34 256z"></path></svg></div>
                                                <div className="text-base font-medium leading-6 text-gray-900">Course Features</div>
                                            </a>
                                            <a href="#section-author" className="flex items-center p-3 space-x-2.5 transition duration-150 ease-in-out rounded-lg hover:no-underline hover:2 focus:no-underline focus:2">
                                                <div className="flex justify-center w-5"><svg className="flex-shrink-0 max-h-[25px] w-[20px] fill-current" aria-hidden="true" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"></path></svg></div>
                                                <div className="text-base font-medium leading-6 text-gray-900">About the Author</div>
                                            </a>
                                            <a href="#section-purchase" className="flex items-center p-3 space-x-2.5 transition duration-150 ease-in-out rounded-lg hover:no-underline hover:2 focus:no-underline focus:2">
                                                <div className="flex justify-center w-5"><svg className="flex-shrink-0 max-h-[25px] w-[20px] fill-current" aria-hidden="true" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M352 128C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128H0v304c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V128h-96zM224 48c44.112 0 80 35.888 80 80H144c0-44.112 35.888-80 80-80zm176 384c0 17.645-14.355 32-32 32H80c-17.645 0-32-14.355-32-32V176h48v40c0 13.255 10.745 24 24 24s24-10.745 24-24v-40h160v40c0 13.255 10.745 24 24 24s24-10.745 24-24v-40h48v256z"></path></svg></div>
                                                <div className="text-base font-medium leading-6 text-gray-900">Purchase Liftoff</div>
                                            </a>
                                            <a href="#section-faq" className="flex items-center p-3 space-x-2.5 transition duration-150 ease-in-out rounded-lg hover:no-underline hover:2 focus:no-underline focus:2">
                                                <div className="flex justify-center w-5"><svg className="flex-shrink-0 max-h-[25px] w-[22px] fill-current" aria-hidden="true" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M368 168H144c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h224c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16zm-96 96H144c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16zM256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29 7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160-93.3 160-208 160z"></path></svg></div>
                                                <div className="text-base font-medium leading-6 text-gray-900">Frequently Asked</div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute z-30 w-full p-5 pr-3 transition duration-150 ease-in bg-white rounded-lg shadow-lg opacity-0 md:w-[360px] translate-y-14 md:left-0">
                                <div className="sticky-chapters w-full md:max-w-[500px] pr-3">
                                    <div className="flex flex-col">
                                        <span className="mb-1 font-semibold tracking-wider uppercase text-micro">Navigate</span>
                                        <ul className="m-0 mb-2">
                                            <li className="py-1"><a href="https://liftoffcourse.com">Home</a></li>
                                            <li className="py-1"><a href="https://liftoffcourse.com/blog">Liftoff Blog</a></li>
                                            <li className="py-1"><a href="https://liftoffcourse.com/wp-login.php">Member Sign In</a></li>
                                            <li className="py-1"><a href="#newsletter-modal" className="popup-modal">Liftoff Newsletter</a></li>
                                        </ul>
                                        <p className="pt-4 mb-2 font-semibold tracking-wider uppercase border-t border-gray-200 text-micro">Start Learning Today</p>
                                        <p className="pt-0 mb-3 text-sm leading-snug border-gray-200">Get the Liftoff course today and start making money as a digital creator.</p>
                                        <a className="flex items-center justify-center flex-none px-3 py-2 text-white transition duration-150 rounded-md hover:scale-105 hover:no-underline focus:no-underline  md:py-2 hover:bg-lpinkhover hover:text-white focus:text-white gradient-button buy-now">
                                            <svg className="w-3 fill-current" aria-hidden="true" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M35.68523,352.06641C9.82784,377.91992-2.94948,442.59375.5759,511.41016c69.11514,3.55859,133.61115-9.35157,159.365-35.10547,40.289-40.2793,42.8769-93.98633,6.31054-130.54883C129.68706,309.19727,75.97033,311.78516,35.68523,352.06641Zm81.6327,84.03125c-8.58592,8.584-30.08394,12.88672-53.11907,11.69922-1.17382-22.93555,3.084-44.49219,11.70311-53.10938,13.42772-13.42578,31.33-14.28906,43.51752-2.10352C131.607,404.77148,130.74565,422.67188,117.31793,436.09766ZM505.16311,19.29688c-1.17578-5.4629-6.98827-11.26563-12.45115-12.4336C460.6163,0,435.464,0,410.4191,0,307.20049,0,245.30018,55.20312,199.09126,128H94.88827c-16.29685,0-35.59956,11.92383-42.88861,26.49805L2.57785,253.29688A28.4,28.4,0,0,0,.06223,264,24.00826,24.00826,0,0,0,24.0661,288h103.953a96.00635,96.00635,0,0,1,96.01354,96V488a24.00826,24.00826,0,0,0,24.00388,24,28.53983,28.53983,0,0,0,10.70311-2.51562l98.74791-49.40626c14.56053-7.28515,26.47457-26.56445,26.47457-42.84374V312.79688c72.5878-46.3125,128.01936-108.40626,128.01936-211.09376C512.07521,76.55273,512.07521,51.40234,505.16311,19.29688ZM358.13792,272.332c-25.332,16.16211-7.50585,6.74024-99.31627,52.209a144.4818,144.4818,0,0,0-71.41006-71.36719c45.373-91.6836,35.89643-73.75,52.21282-99.45313C286.66341,79.61719,337.74146,48,410.4191,48c17.64841,0,33.541,0,51.373,2.248,2.30468,18.26367,2.24413,34.46875,2.18163,51.45507C463.97371,173.97266,432.32141,225.002,358.13792,272.332ZM368.05587,104a40,40,0,1,0,40.00581,40A40.01947,40.01947,0,0,0,368.05587,104Z"></path></svg>								<span className="inline-flex ml-2 font-medium">

                                                Start Your Journey
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div >

                            <div className="absolute z-30 w-full p-5 pr-3 transition duration-150 ease-in bg-white rounded-lg shadow-lg opacity-0 md:w-[370px] translate-y-14 md:right-[210px] newsletter-drop">
                                <div className="sticky-chapters w-full md:max-w-[500px] pr-3">
                                    <div className="flex flex-col">
                                        <p className="mb-1 font-semibold tracking-wider uppercase text-micro">Join the Flight Crew</p>
                                        <p className="pt-0 mb-2 text-sm leading-tight border-gray-200">Hop on the <span className="text-gradient">Mission Control</span> newsletter to get a free chapter from the Liftoff course and ongoing creator tidbits in your inbox.</p>
                                        <div className="wpforms-container " id="wpforms-95">
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </nav >
            </header ></div >
    )
}

export default NavMovile
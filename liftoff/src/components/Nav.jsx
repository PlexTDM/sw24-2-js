// import React from 'react'

const Nav = () => {
    return (
        <nav className="container items-center flex-wrap p-6 max-w-8xl mx-auto relative flex justify-between pt-24 pb-7 md:pt-14 md:pb-10 header-inside-wrap">
            <img src="/img/logo-dark.svg" alt="logo" className="w-[130px] cursor-pointer" />
            <span className="flex gap-6">
                <a className="flex items-center text-lg font-medium transition duration-150 ease-in-out hover:text-white no-underline cursor-pointer focus:text-white">
                    Member Sign In
                </a>
                <a className="flex items-center justify-center flex-none px-3 py-2 cursor-pointer text-white transition duration-150 transform rounded-md hover:scale-105 md:py-2 no-underline gradient-button">
                    <img src="/img/rocket.svg" alt="rocket" className="w-4 h-4 mr-2" />
                    <span className="font-medium md:inline-flex md:ml-2">Get Started Now!</span>
                </a>
            </span>
        </nav>
    )
}

export default Nav
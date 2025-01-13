import PropTypes from 'prop-types';
import { comments } from '../assets/constants';

const Mike = () => {
    return (
        <section className="relative p-10 !w-full overflow-hidden md:py-20 bg-ltpurple text-slate-900">
            <div className="grid items-center max-w-5xl gap-5 mx-auto mb-8 md:mb-14 lg:grid-cols-2 lg:gap-0 group">
                <div>
                    <img loading="lazy" className="rounded-lg group-hover:scale-[1.03] group-hover:-rotate-1 transition ease-in-out duration-300" src="/img/mike.jpg" alt="Mike" />
                </div>
                <div className="relative z-20 p-5 m-0 bg-white rounded-lg shadow lg:p-10 lg:-ml-10 lg:m-0">
                    <h2 className="text-2xl font-bold tracking-tight md:text-4xl lg:text-5xl sm:leading-10">
                        Meet Mike
                    </h2>
                    <p className="mt-3 leading-snug">
                        Hey there! I&apos;m Mike McAlister, a long-time product designer and principal software engineer from Wisconsin. I&apos;ve spent the last 10
                        years hand-crafting beautiful and innovative digital products like Array Themes and Atomic Blocks that
                        millions of people use to power their websites.
                    </p>
                    <p className="mt-3 leading-snug">
                        Over the years, I&apos;ve learned a spaceship full of knowledge about what it takes to create lucrative
                        digital products that solve problems (and look good while they do it). I&apos;ve put <i>everything</i> I know
                        into the Liftoff course to help you grow an audience and start making money as a digital creator!
                    </p>
                    <div className="mt-8 leading-tight md:flex md:items-start md:justify-between">
                        <div className="flex items-center">
                            <img loading="lazy" className="w-28" src="https://liftoffcourse.com/wp-content/themes/liftoff/assets/images/svg/signature.svg" alt="Mike McAlister signature" />
                        </div>
                        <div className="mt-5 md:mt-0 flex gap-1">
                            <a className="icon" href="https://mikemcalister.com" title="Twitter">
                                <svg aria-hidden="true" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M314.222 197.78c51.091 51.091 54.377 132.287 9.75 187.16-6.242 7.73-2.784 3.865-84.94 86.02-54.696 54.696-143.266 54.745-197.99 0-54.711-54.69-54.734-143.255 0-197.99 32.773-32.773 51.835-51.899 63.409-63.457 7.463-7.452 20.331-2.354 20.486 8.192a173.31 173.31 0 0 0 4.746 37.828c.966 4.029-.272 8.269-3.202 11.198L80.632 312.57c-32.755 32.775-32.887 85.892 0 118.8 32.775 32.755 85.892 32.887 118.8 0l75.19-75.2c32.718-32.725 32.777-86.013 0-118.79a83.722 83.722 0 0 0-22.814-16.229c-4.623-2.233-7.182-7.25-6.561-12.346 1.356-11.122 6.296-21.885 14.815-30.405l4.375-4.375c3.625-3.626 9.177-4.594 13.76-2.294 12.999 6.524 25.187 15.211 36.025 26.049zM470.958 41.04c-54.724-54.745-143.294-54.696-197.99 0-82.156 82.156-78.698 78.29-84.94 86.02-44.627 54.873-41.341 136.069 9.75 187.16 10.838 10.838 23.026 19.525 36.025 26.049 4.582 2.3 10.134 1.331 13.76-2.294l4.375-4.375c8.52-8.519 13.459-19.283 14.815-30.405.621-5.096-1.938-10.113-6.561-12.346a83.706 83.706 0 0 1-22.814-16.229c-32.777-32.777-32.718-86.065 0-118.79l75.19-75.2c32.908-32.887 86.025-32.755 118.8 0 32.887 32.908 32.755 86.025 0 118.8l-45.848 45.84c-2.93 2.929-4.168 7.169-3.202 11.198a173.31 173.31 0 0 1 4.746 37.828c.155 10.546 13.023 15.644 20.486 8.192 11.574-11.558 30.636-30.684 63.409-63.457 54.733-54.735 54.71-143.3-.001-197.991z"></path></svg>
                            </a>
                            <a className="icon" href="https://twitter.com/mikemcalister" title="Twitter">
                                <svg aria-hidden="true" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
                            </a>
                            <a className="icon" href="https://dribbble.com/mikemcalister" title="Dribbble">
                                <svg aria-hidden="true" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248 248-111.252 248-248S392.748 8 256 8zm163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955-6.984-1.477-77.018-15.682-147.502-6.818-5.752-14.041-11.181-26.393-18.617-41.614 78.321-31.977 113.818-77.482 118.284-83.523zM396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519-34.712-63.776-73.185-116.168-79.04-124.008 67.176-16.193 137.966 1.27 190.061 47.489zm-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62zM44.17 256.323c0-2.166.043-4.322.108-6.473 9.268.19 111.92 1.513 217.706-30.146 6.064 11.868 11.857 23.915 17.174 35.949-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323zm81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756 29.74 77.283 42.039 142.053 45.189 160.638-68.112 29.013-150.015 21.053-212.768-27.882zm248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033 66.38-10.626 124.7 6.768 131.947 9.055-9.442 58.941-43.273 109.844-90.795 141.978z"></path></svg>
                            </a>
                            <a className="icon" href="https://instagram.com/mikemcalister" title="Instagram">
                                <svg aria-hidden="true" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-5xl mx-auto md:flex md:items-center">

                <div className="grid w-full grid-cols-1 overflow-hidden gap-y-8 md:gap-y-0 gap-x-10 md:grid-cols-3">

                    {
                        comments.map((data, i) => {
                            return <Comment key={i} name={data.name} pfp={data.pfp} title={data.title} quote={data.quote} />
                        })
                    }

                </div>
            </div>
        </section>
    )
}

export default Mike

const Comment = ({ name, title, pfp, quote }) => {
    Comment.propTypes = {
        pfp: PropTypes.string,
        name: PropTypes.string,
        title: PropTypes.string,
        quote: PropTypes.string,
    }
    return (
        <div className="pt-8 leading-tight">
            <p className="m-0 mb-2 text-5xl leading-[.2] text-lpink">“</p>
            <p className="m-0 italic">{quote}</p>
            <div className="mt-5">
                <div className="flex items-start">
                    <div className="inline-flex flex-shrink-0 rounded-full">
                        <img loading="lazy" className="w-12 h-12 rounded-full" src={pfp} alt={name + " pfp"} />
                    </div>
                    <div className="ml-4">
                        <div className="text-base font-medium">{name}</div>
                        <div className="text-base">{title}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
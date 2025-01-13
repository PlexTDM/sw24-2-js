import PropTypes from 'prop-types'
import Title from './Title'
import { pricingData } from '../assets/constants';

const Pricing = () => {
    return (
        <section className='mx-auto w-full lg:pt-32 md:p-12 text-gray-900'>
            <Title title='Ready for Liftoff?'
                subTitle="Liftoff is available as an affordable eBook, or a fully-loaded online course experience. Choose your flight path."
            />
            <div className='max-w-md mx-auto space-y-10 lg:max-w-5xl lg:grid lg:grid-cols-3 lg:gap-5 xl:gap-8 lg:space-y-0'>
                {
                    pricingData.map((data, i) => {
                        return <PricingCard key={i} {...data} />
                    })
                }
            </div>
        </section>
    )
}

export default Pricing

const PricingCard = ({ title, popular, price, description, perks, buttonText }) => {
    PricingCard.propTypes = {
        title: PropTypes.string,
        popular: PropTypes.bool,
        price: PropTypes.number,
        description: PropTypes.string,
        perks: PropTypes.array,
        buttonText: PropTypes.string
    }

    return (
        <div className="z-20 flex flex-col overflow-visible relative">
            {/* popular tag */}
            {
                popular && <div className="absolute inset-x-0 top-0 transform translate-y-px">
                    <div className="flex justify-center transform -translate-y-1/2">
                        <span className="flex items-center font-semibold h-[36px] px-4 py-1 text-xs tracking-wider text-white uppercase rounded-full gradient-button">
                            Most popular
                            <svg className="w-[20px] ml-1 text-white fill-current" aria-hidden="true" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M324.42 103.16L384 128l24.84 59.58a8 8 0 0 0 14.32 0L448 128l59.58-24.84a8 8 0 0 0 0-14.32L448 64 423.16 4.42a8 8 0 0 0-14.32 0L384 64l-59.58 24.84a8 8 0 0 0 0 14.32zm183.16 305.68L448 384l-24.84-59.58a8 8 0 0 0-14.32 0L384 384l-59.58 24.84a8 8 0 0 0 0 14.32L384 448l24.84 59.58a8 8 0 0 0 14.32 0L448 448l59.58-24.84a8 8 0 0 0 0-14.32zM384 256a24 24 0 0 0-13.28-21.47l-104.85-52.42-52.4-104.84c-8.13-16.25-34.81-16.25-42.94 0l-52.41 104.84-104.84 52.42a24 24 0 0 0 0 42.94l104.84 52.42 52.41 104.85a24 24 0 0 0 42.94 0l52.4-104.85 104.85-52.42A24 24 0 0 0 384 256zm-146.72 34.53a24 24 0 0 0-10.75 10.74L192 370.33l-34.53-69.06a24 24 0 0 0-10.75-10.74L77.66 256l69.06-34.53a24 24 0 0 0 10.75-10.73L192 141.67l34.53 69.07a24 24 0 0 0 10.75 10.73L306.34 256z"></path></svg>									</span>
                    </div>
                </div>
            }
            <div className="px-8 py-12 bg-ltpink2 rounded-t-lg">
                <div>
                    <h3 className="mb-0 text-2xl font-semibold rounded-full text-lpink">
                        {title}
                    </h3>
                </div>
                <div className="flex items-center mt-5 text-5xl font-bold leading-none font-heading">
                    <span content="USD" className="self-start mt-1 text-xl font-medium">$</span>
                    <span content="39.00">{price}</span>
                </div>
                <p className="mt-4 mb-0 text-base leading-tight text-[#8b606b]">
                    {description}
                </p>
            </div>

            <div className="flex flex-col justify-between px-6 py-8 bg-white rounded-b-lg">
                <ul className="mt-0 mb-8 space-y-4">
                    {
                        perks.map((perk, i) => {
                            return (<li key={i} className="flex items-start relative">
                                <div className='peer w-full h-full flex'>
                                    <div className="flex-shrink-0">
                                        <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                    </div>

                                    <div className='relative ml-3 mb-0 text-base font-medium text-gray-700 cursor-help'>
                                        {perk.title}
                                    </div>
                                </div>
                                <div className="peer-hover:visible peer-hover:opacity-100 invisible opacity-0 absolute bottom-[45px] left-[20px] duration-300 pointer-events-none  w-64 p-4 text-sm font-normal leading-snug rounded-lg shadow-md text-ltpurple2 bg-starpurple text-slate-400">
                                    <p className="mb-0">{perk.tooltip}</p>
                                </div>
                            </li>)
                        })
                    }
                </ul>
                <div className="rounded-md">
                    <a className={`flex items-center justify-center px-5 py-3 text-base font-medium transition duration-300 rounded-md hover:scale-105 blur-0 no-underline ${popular ? 'gradient-button text-white' : 'bg-ltpink text-lpink'}`}>
                        {buttonText}
                    </a>
                </div>
            </div>
        </div>
    )
}
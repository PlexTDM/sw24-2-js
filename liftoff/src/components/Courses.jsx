import PropTypes from 'prop-types';
import { data, hoverData } from '../assets/constants';
import Title from './Title';

const Courses = () => {

    return (
        <div className='mx-auto w-full lg:pt-32 bg-ltpurple md:p-12 text-gray-900'>
            <Title
                title='Explore the Course'
                subTitle={'Click on any of the chapters below to learn a little more about the course and hear a sample of the audiobook.'}
                dark
            />
            <div className="grid items-center gap-5 md:gap-10 md:grid-cols-2 lg:grid-cols-3 container max-w-5xl mx-auto">
                {
                    data.map((card, i) => {
                        return <Card key={i} title={card.title} description={card.desc} bg={card.img} chapter={i + 1} />
                    })
                }
            </div>

            <div className="grid max-w-5xl grid-cols-1 gap-2 pt-10 mx-auto lg:pt-20 md:gap-12 md:grid-cols-2">
                <div>
                    <h2 className="text-2xl leading-none sm:text-3xl md:text-4xl">Who is this course for?</h2>
                    <p>The creator economy is made up of millions of different creators from diverse backgrounds - designers, developers, educators, content creators, and more.</p>
                    <p>What these creators all have in common is the ability to package up their passions and expertise into digital products or services to distribute far and wide on the web. Digital products make for a lucrative, low-risk opportunity for creative professionals, educators, and freelancers to make money online and grow audiences with their products and services.</p>
                </div>
                <div>
                    <h2 className="text-2xl leading-none sm:text-3xl md:text-4xl">How will Liftoff help me?</h2>
                    <p>As designers, developers, photographers, and writers, we&apos;re all pretty great at what we do, right? But taking our craft and turning it into products we can sell to a wide audience for extra revenue, that&apos;s a whole different thing.</p>
                    <p>That&apos;s what Liftoff is all about: helping you <strong>hone your craft and turn it into multiple revenue streams</strong> with digital products. That includes crafting a personality for your brand, using email and content marketing for growth, automations to save and make money, and so much more.</p>
                </div>

                <ul className="grid grid-cols-2 gap-2 m-0 leading-none md:col-span-2 sm:grid-cols-2 md:grid-cols-4">
                    {
                        hoverData.map((card, i) => {
                            return <TooltipCard key={i} icon={card.svgPath} title={card.title} tooltip={card.description} />
                        })
                    }
                </ul>
            </div>
        </div>
    )
}


export default Courses

const Card = ({ chapter, title, description, bg }) => {
    Card.propTypes = {
        chapter: PropTypes.number,
        title: PropTypes.string,
        description: PropTypes.string,
        bg: PropTypes.string
    }
    return (
        <section className="group cursor-zoom-in px-5 min-h-[400px] sm:min-h-[500px] hover:scale-[1.04] transition-all duration-200 text-center text-white bg-cover grid items-center rounded-lg bg-center" style={{ backgroundImage: `url('${bg}')` }}>
            <div className="relative z-10 chapter-explorer-text">
                <p className="mb-2 text-sm font-bold tracking-widest uppercase opacity-80">
                    Chapter {chapter}
                </p>
                <h3 className="mb-2 text-2xl sm:text-3xl font-bold leading-[1.2] chapter-explore-title mx-auto">{title}</h3>
                <p className="mb-4 opacity-80 text-sm">{description}</p>
                <button className="flex items-center cursor-pointer justify-center mx-auto mb-0 font-semibold transition duration-300 ease-in-out w-full lg:opacity-0 group-hover:opacity-100 quick-look-button absolute text-sm translate-x-[-50%] left-[50%]">
                    Click to Preview
                </button>
            </div>
        </section>
    )
}

const TooltipCard = ({ title, icon, tooltip }) => {
    TooltipCard.propTypes = {
        title: PropTypes.string,
        icon: PropTypes.string,
        tooltip: PropTypes.string
    }

    return (
        <li className="tooltip-container relative">
            <div className='peer w-full h-full flex items-center px-3 py-3 mb-0 bg-white rounded shadow md:justify-center md:py-5 cursor-help'>
                <div className="flex justify-center w-6">
                    <svg className="text-lpink w-[20px] mr-2 fill-current max-h-[22px]" aria-hidden="true" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d={icon}></path></svg>
                </div>
                <div className="relative text-sm leading-none sm:text-base xl:text-lg">
                    {title}
                </div>
            </div>
            <div className={`peer-hover:visible peer-hover:opacity-100 invisible opacity-0 pointer-events-none absolute left-[-42px] leading-tight bottom-[68px] duration-300 w-64 p-4 text-sm font-normal rounded-lg shadow-md text-slate-400 bg-[#1a0f31]`}>
                {tooltip}
            </div>
        </li>
    )
}
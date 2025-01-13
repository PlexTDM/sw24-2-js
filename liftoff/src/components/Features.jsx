import PropTypes from 'prop-types';
import { featuresData } from '../assets/constants';
import Title from './Title';

const Features = () => {
    return (
        <section className='py-20 text-slate-900'>
            <Title title={"Course Features"}
                subTitle={"Liftoff isn't your average course. No way. Instead, the entire experience has been crafted around you, giving you engaging tools and a focused platform to grow your creator career."}
            />

            <div className='grid gap-6 mx-auto md:mb-3 md:gap-8 md:grid-cols-2 lg:gap-14 md:max-w-5xl'>
                {
                    featuresData.map((data, i) => {
                        return <TwoPartCard key={i} title={data.title} text={data.text} imgs={data.imgs} />
                    })
                }
            </div>

        </section>
    )
}

const TwoPartCard = ({ title, text, imgs }) => {
    TwoPartCard.propTypes = {
        title: PropTypes.string,
        text: PropTypes.string,
        imgs: PropTypes.arrayOf(PropTypes.string),
    }
    return (
        <div className="flex flex-col">
            <div className="cursor-zoom-in group overflow-hidden bg-gradient-to-b from-[#ff6c71] to-[#ff479a] p-6 lg:pb-0 lg:p-10 pb-0 rounded-t-lg">
                <img loading="lazy" width="555.5px" height="358.3px" className="group-hover:scale-[1.03] duration-300 rounded-t shadow-sm" src={imgs[0]} alt="Liftoff Course Dashboard" />
            </div>
            <div className="flex items-center flex-1 px-5 py-6 text-center bg-white rounded-b-lg sm:px-12">
                <div className="">
                    <h3 className="mb-1 text-2xl">{title}</h3>
                    <p className="mb-0 leading-snug text-lg">{text}</p>
                </div>
            </div>
        </div>
    )
}
export default Features
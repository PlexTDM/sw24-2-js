import { useEffect, useRef, forwardRef } from 'react';
import PropTypes from 'prop-types'
import Title from './Title'
import { dropdownData } from '../assets/constants'

const FAQ = () => {
    const detailsRef = useRef([]);

    useEffect(() => {
        const detailsElements = detailsRef.current;
        detailsElements.forEach((details, index) => {
            details.addEventListener('toggle', () => {
                if (details.open) {
                    detailsElements.forEach((otherDetails, otherIndex) => {
                        if (index !== otherIndex) {
                            otherDetails.removeAttribute('open');
                        }
                    });
                }
            });
        });
    }, []);
    return (
        <section className='bg-ltpurple text-slate-900 max-w-screen px-4 py-12 mx-auto md:py-20 sm:px-6 lg:px-8'>
            <Title title={'Frequently Asked'} dark />
            <div className='max-w-2xl mx-auto'>
                {
                    dropdownData.map((data, i) => {
                        return <DropDown key={i} title={data.title} body={data.body} ref={(el) => detailsRef.current[i] = el} />
                    })
                }
            </div>
        </section>
    )
}

export default FAQ

const DropDown = forwardRef(({ title, body }, ref) => {
    DropDown.propTypes = {
        title: PropTypes.string,
        body: PropTypes.string,
    }
    return (
        <div>
            <details ref={ref} className="p-3 text-base leading-7 rounded-md shadow-sm md:text-lg group">
                <summary className="bg-white p-3 flex items-center justify-between w-full text-left text-gray-400 focus:outline-none group-open:text-gray-900">
                    <span className="font-medium leading-tight text-gray-900">
                        {title}
                    </span>
                    <span className="flex items-center ml-6 h-7">
                        <svg className="w-6 h-6 transform" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </span>
                </summary>
                <div className="mt-4 md:pr-12 text-sm" dangerouslySetInnerHTML={{ __html: body }}>
                </div>
            </details >
        </div >
    );
});

DropDown.displayName = 'DropDown';
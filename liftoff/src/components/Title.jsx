import PropTypes from 'prop-types'

const Title = ({ title, subTitle, dark }) => {
    Title.propTypes = {
        title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        subTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        dark: PropTypes.bool
    }

    return (
        <div className={`mx-auto mb-6 text-center sm:mb-16 md:max-w-xl ${!dark && 'text-white'}`}>
            <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl sm:leading-10">{title}</h2>
            {
                subTitle && <p className="max-w-lg mx-auto mt-3 mb-0 leading-snug text-ltpurple2 sm:text-lg sm:leading-normal">
                    {subTitle}
                </p>
            }
        </div>
    )
}

export default Title
import PropTypes from 'prop-types';
import css from './Section.module.css'

export default function Section({ title, children }) {
    return <div className={css.section}>{title && < h2 className={css.title}>{title}</h2>}{ children}</div>;  
}

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.element.isRequired,
}
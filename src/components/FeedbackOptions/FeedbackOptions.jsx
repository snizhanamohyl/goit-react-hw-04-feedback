import PropTypes from 'prop-types';
import {EmojiFrown, EmojiNeutral, EmojiSmile } from 'react-bootstrap-icons';
import css from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
    return <ul className={css["btn-list"]}>{options.map(option => {
        let iconComponent;

        switch (option) {
            case "good":
                iconComponent = <EmojiSmile  className={ css.icon}/>;
                break;
            case "neutral":
                iconComponent = <EmojiNeutral  className={ css.icon}/>;
                break; 
            case "bad":
                iconComponent = <EmojiFrown className={ css.icon}/>;
                break;
            default:
                iconComponent = <EmojiSmile  className={ css.icon}/>;
        }
        
        return <li key={option} className={css["btn-item"]}><button className={css.btn} onClick={onLeaveFeedback} option={option}><span className="value">{option}</span>{iconComponent}</button></li>
    })}</ul>;
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired,
}
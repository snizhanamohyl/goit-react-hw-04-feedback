import css from './Statistics.module.css';

export default function Statistics({ good, neutral, bad, total, positivePercentage }) {
    return <div className="stats">
        <ul className="stats-list">
            <li className={css.item}>Good: <span className={css.value}>{ good}</span></li>
            <li className={css.item}>Neutral: <span className={css.value}>{ neutral}</span></li>
            <li className={css.item}>Bad: <span className={css.value}>{ bad}</span></li>
            <li className={[css.item, css.total].join(' ')}>Total: <span className={css.value}>{total()}</span></li>
            <li className={[css.item, css.positive].join(' ')}>Positive feedback: <span className={css.value}>{positivePercentage()}%</span></li>
        </ul>
    </div>
}

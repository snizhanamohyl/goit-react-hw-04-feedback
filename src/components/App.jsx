import { useState } from 'react';
import Notification from './Notification/Notification';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';

const options = {
  GOOD: 'good',
  NEUTRAL: 'neutral',
  BAD: 'bad',
}

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    const totalFeedback = good + neutral + bad;
    return totalFeedback;
  }

  const countPositiveFeedbackPercentage = () => {
    if (!countTotalFeedback()) return 0;
      
    return  Math.round(good / countTotalFeedback() * 100);
  } 

  const onLeaveFeedback = ({ currentTarget}) => { 
    const chosenOption = currentTarget.attributes.option.value;

    switch (chosenOption) {
      case options.GOOD:
        setGood(prev => prev + 1);
        break;
      
      case options.NEUTRAL:
        setNeutral(prev => prev + 1);
        break;
      
      case options.BAD:
        setBad(prev => prev + 1);
        break;
    
      default:
        break;
    }
    
    countTotalFeedback();
  } 

  return <div>
    <Section title="Please leave feedback">
      <FeedbackOptions options={Object.values(options)} onLeaveFeedback={onLeaveFeedback}></FeedbackOptions>
    </Section>
    {!countTotalFeedback() ? <Section><Notification message="There is no feedback"></Notification></Section> :
      <Section title="Statistics"><Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback} positivePercentage={countPositiveFeedbackPercentage}></Statistics></Section>}
  </div>
}

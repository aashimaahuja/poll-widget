import React, { useEffect } from 'react';

const isVoted = false;

export const PollHeader = ({ children }) => children;

const MultiOptionPoll = ({
  labelKey,
  choices,
  renderItem,
  hasVoted,
  onVote
}) => {
  console.log({choices})
  return (
    <>
      <dl>
        {choices).map(id => (
          <dt>{renderItem(id)}</dt>
        ))}
      </dl>

      <button onClick={onVote}>{hasVoted ? 'Revote' : 'Vote'}</button>
    </>
  );
};

export const PollComponent = props => {
  const {
    type,
    choices,
    labelKey,
    onVote,
    renderViewItem,
    renderEditItem,
    isReadOnly,
    hasVoted
  } = props;
  // const [isVoted, setIsVoted] = useState(false);

  useEffect(() => {}, [choices]);

  switch (type) {
    case 'text':
      return <TextAreaPoll />;
    case 'button':
      return <ButtonPoll />;
    case 'single':
      return <RadioButtonPoll />;
    case 'multi':
      return (
        <MultiOptionPoll
          choices={choices}
          labelKey={labelKey}
          instantResults={true}
          renderItem={isReadOnly ? renderViewItem : renderEditItem}
          onVote={onVote}
          hasVoted={hasVoted}
        />
      );
  }
};

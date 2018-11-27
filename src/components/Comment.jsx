import React from 'react';
import UserInfo from './UserInfo';
import TestInput from './TestInput';

const Comment = (props) => {
    return (
        <div className="Comment">
            <UserInfo user={props.author} />
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-Date">
                {/* {formatDate(props.date)} */}
            </div>
            <TestInput />
        </div>
    );
}

export default Comment;
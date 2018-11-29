import React from 'react';

const List = (props) => {
    let listItems = props.items.map((item) => {
        return (
            <li>{item.value}</li>
        );
    });
    return (
        <ul>{listItems}</ul>
    );
};

export default List;
import React from 'react';

const Header = (props) => {
    return(
        <div>
            <h1>{props.title}</h1>
            {props.subtitile && <h2>{props.subtitile}</h2>}
        </div>
    );
};

Header.defaultProps = {
    title: 'Indecisision!'
};

export default Header;


import React from 'react';

export const Footer = (props) => {

    return (
        <footer className="footer">
            <p>{props.message} <a href={props.link}>{props.author}</a></p>
        </footer>
    );
}
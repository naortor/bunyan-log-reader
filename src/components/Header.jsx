import * as React from "react";
import PropTypes from 'prop-types';
var createReactClass = require('create-react-class');
import { css } from 'emotion';

const wrapper = css`
    background-color: transparent;
    padding: 20px;
    h1 {
        color: pink;
        text-align: center;
        width: 100%;
        font-style: italic;
        margin:0;
    }
`;

const Header = createReactClass({
    getInitialState() {
        return {
            expended: false,
        };
    },
    render() {
        return (
            <header className={wrapper}>
                <h1>Bunyan log reader</h1>
            </header>
        );
    }
});

export default Header;

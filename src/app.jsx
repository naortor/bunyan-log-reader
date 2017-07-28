import * as React from "react";
import * as ReactDOM from "react-dom";

import LogReader from "./components/LogReader";
import { css } from 'emotion';

const defaultStyle = css`
    ul {
        padding:0;
        li {
            list-style: none;
        }
    }
`;

ReactDOM.render(
    <div className={defaultStyle}>
        <LogReader />
    </div>,
    document.getElementById("root")
);

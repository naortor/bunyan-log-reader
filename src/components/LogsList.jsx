import * as React from "react";
var createReactClass = require('create-react-class');
import { css } from 'emotion';

import Log from './Log';

const wrapper = css`
    color:#fefefe;
    padding: 30px;
    margin-top: 0;
`;

const LogsList = (props) => {
    let { log } = props;
    return (
        <ul className={wrapper}>
            {log.map((event, i) => {
                return (
                    <Log key={i} log={event} />
                )
            })}
        </ul>
    );
}

export default LogsList;

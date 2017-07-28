import * as React from "react";
var createReactClass = require('create-react-class');
var moment = require('moment');
import Dropzone from 'react-dropzone';
import PropTypes from 'prop-types';
import { css } from 'emotion';

import Log from './Log';

const wrapper = css`
    color:#fefefe;
`;


const LogsList = createReactClass({

    render() {
        let { log } = this.props;
        console.log(log);
        return (
            <ul className={wrapper}>
                {log.map((event, i) => {
                    return (
                        <Log key={i}{...event} />
                    )
                })}
            </ul>
        );
    }
});

LogsList.propTypes = {
    log: PropTypes.object
};


export default LogsList;

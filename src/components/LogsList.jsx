import * as React from "react";
var createReactClass = require('create-react-class');
var moment = require('moment');
import Dropzone from 'react-dropzone';
import PropTypes from 'prop-types';
import { css } from 'emotion';

const wrapper = css`
    color:#fefefe;
`;


const LogsList = createReactClass({

    render() {
        let { log } = this.props;
        return (
            <ul className={wrapper}>
                {log.map((event,i)=>{
                    return (
                        <li key={i}>
                            <div className="date">{moment(event.time).format('DD-MM-YYYY h:mm:ss')}</div>
                            <pre className="message">{JSON.stringify(event.message, null, 2)}</pre>
                        </li>
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

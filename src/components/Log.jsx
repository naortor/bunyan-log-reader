import * as React from "react";
var moment = require('moment');
import { css } from 'emotion';

const wrapper = css`
    .level {
        &.error {
            color:red;
        }
        &.info {
            color:deepskyblue;
        }
        &.debug {
            color:yellow;
        }
    }
`;

const details = css`
     margin-left: 30px;
    .label { 
        display: inline-block;
        margin-right: 12px;
        vertical-align:top;
     }
    .value { 
        display: inline-block;
        pre {
            margin: 0;
        }
    }
`;

const Log = (props) => {

    let date = moment(props.log.time).format('DD-MM-YYYY h:mm:ss');
    let mainMessage = props.log.msg;

    let level = '';

    let otherPropKeys = Object.keys(props.log).filter((key) => !~['date', 'level', 'msg'].indexOf(key));

    switch (props.log.level) {
        case 10:
            level = 'TRACE';
            break;
        case 20:
            level = 'DEBUG';
            break;
        case 30:
            level = 'INFO';
            break;
        case 40:
            level = 'WARNING';
            break;
        case 50:
            level = 'ERROR';
            break;
        case 60:
            level = 'FATAL';
            break;
    }


    return (
        <li className={wrapper}>
            <p className="headline"><span className="date">{date}</span> <span className={"level " + level.toLowerCase()}>{level} : </span></p>
            <ul className={details}>
                {otherPropKeys.map((key, i) => {
                    return <li key={i}>
                        <div className="label">{key} : </div>
                        <div className="value">
                            {props.log[key].constructor === Object && <br />}
                            <pre>
                                {
                                    props.log[key].constructor === Object ? JSON.stringify(props.log[key], null, 2) : props.log[key]
                                }
                            </pre>
                            {props.log[key].constructor === Object && <br />}
                        </div>
                    </li>
                })}
                <li key="message">
                    <div className="label">msg : </div>
                    <div className="value">
                        {mainMessage.constructor === Object && <br />}
                        <pre>
                            {
                                mainMessage.constructor === Object ? JSON.stringify(mainMessage, null, 2) : mainMessage
                            }
                        </pre>
                        {mainMessage.constructor === Object && <br />}
                    </div>
                </li>
            </ul>
        </li>
    )
}
export default Log;
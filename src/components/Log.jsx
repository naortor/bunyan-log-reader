import * as React from "react";
var createReactClass = require('create-react-class');
var moment = require('moment');
import Dropzone from 'react-dropzone';
import PropTypes from 'prop-types';



const FileUploader = createReactClass({

    render() {
        let { log } = this.props;
        return (
            <ul>
                {log.map((event,i)=>{
                    return (
                        <li key={i}>
                            <div className="date">{moment(event.time).format('DD-MM-YYYY h:mm:ss')}</div>
                            <p className="message">{event.msg}</p>
                        </li>
                    )
                })}
            </ul>
        );
    }
});

FileUploader.propTypes = {
    log: PropTypes.object
};


export default FileUploader;

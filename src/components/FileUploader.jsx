import * as React from "react";
var createReactClass = require('create-react-class');
import Dropzone from 'react-dropzone';
import PropTypes from 'prop-types';



const FileUploader = createReactClass({
    render() {
        return (
            <div>
                <Dropzone className="dropzone" multiple={false} onDrop={this.props.onDrop}>
                    FILE UPLOAD
                </Dropzone>
            </div>
        );
    }
});

FileUploader.propTypes = {
    onDrop: PropTypes.func
};


export default FileUploader;


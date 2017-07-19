import * as React from "react";
var createReactClass = require('create-react-class');
import Dropzone from 'react-dropzone';
import PropTypes from 'prop-types';
import { css } from 'emotion';

const mainWrapper = css`
    display: flex;
    align-items: center;
    justify-content: center;
    height:100vh;
`;
const wrapper = css`
    text-align:center;
    height:300px;
    width:300px;
    border:1px dashed #fefefe;
    display:flex;
    align-items:center;
    justify-content:center;
    cursor:pointer;
`;

const textWrapper = css`
    font-size:20px;
    color:#fefefe;
`;

const FileUploader = createReactClass({
    render() {
        return (
            <div className={mainWrapper}>
                <Dropzone className="dropzone" multiple={false} onDrop={this.props.onDrop}>
                    <div className={wrapper}>
                        <div className={textWrapper}>
                            <p>Drag your log here</p>
                            <p>OR</p>
                            <p>Click to choose file</p>
                        </div>
                    </div>
                </Dropzone>
            </div>
        );
    }
});

FileUploader.propTypes = {
    onDrop: PropTypes.func
};


export default FileUploader;


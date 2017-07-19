import * as React from "react";
var createReactClass = require('create-react-class');
import FileUploader from "./FileUploader";
import LogsList from './LogsList';
import { css } from 'emotion';

const wrapper = css`
    min-height: 100vh;
    background-color: #2b2727;
`;

const LogReader = createReactClass({
    getInitialState() {
        return {
            fileUploaded: false,
            logs: []
        };
    },
    onDrop(file) {
        file = file.pop();
        var reader = new FileReader();
        var logsArr = [];
        reader.onload = (event) => {
            let bunyan = event.target.result;
            logsArr = bunyan.split("\n").filter((line) => !!line).map((line) => {
                return JSON.parse(line)
            });
            this.setState({
                fileUploaded: true,
                logs: logsArr
            })
        };
        reader.readAsText(file);
    },
    render() {

        if (!this.state.fileUploaded) {
            return (
                <div className={wrapper}>
                    <FileUploader onDrop={this.onDrop} />
                </div>
            );
        }

        return (
            <div className={wrapper}>
                <LogsList log={this.state.logs} />
            </div>
        )
    }
});

export default LogReader;

import * as React from "react";
var createReactClass = require('create-react-class');
import FileUploader from "./FileUploader";
import LogsList from './LogsList';
import Header from './Header';
import { keyframes, css } from 'emotion';

const wrapper = css`
    min-height: 100vh;
    background-color: #2b2727;
`;

const load = keyframes`
    from {left: -200px; width: 30%;}
    50% {width: 30%;}
    70% {width: 70%;}
    80% { left: 50%;}
    95% {left: 120%;}
    to {left: 100%;}
`

const loader = css`
    height: 7px;
    width: 100%;
    position: relative;
    overflow: hidden;
    background-color: transparent;
    &:before{
        display: block;
        position: absolute;
        content: "";
        left: -200px;
        width: 200px;
        height: 7px;
        background-color: pink;
        animation: ${load} 2s linear infinite;
    }
`

const LogReader = createReactClass({
    getInitialState() {
        return {
            fileUploaded: false,
            logs: [],
            loading: false
        };
    },
    onDrop(file) {
        file = file.pop();
        var reader = new FileReader();
        var logsArr = [];
        reader.onload = (event) => {
            this.setState({ loading: true });
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

        const mainComp = this.state.fileUploaded ? <LogsList log={this.state.logs} /> : <FileUploader onDrop={this.onDrop} />;

        return (
            <div className={wrapper}>
                {/* {this.state.loading && <div className={loader} />} */}
                <Header />
                {mainComp}
            </div>
        )
    }
});

export default LogReader;

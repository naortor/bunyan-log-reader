import * as React from "react";
var createReactClass = require('create-react-class');
import FileUploader from "./FileUploader";

const LogReaderMixins = {
    onDrop(file) {
        file = file.pop();
        var reader = new FileReader();
        reader.onload = function (event) {
            let bunyan = event.target.result;
            bunyan = "[" + bunyan.split("\n").join(',');
            if (bunyan[bunyan.length - 1] === ",") bunyan = bunyan.substring(0, bunyan.length - 1);
            bunyan += "]";
            var obj = JSON.parse(bunyan);
            console.log(obj);
        };
        reader.readAsText(file);
    }
};

const LogReader = createReactClass({
    getInitialState() {
        return {
            fileUploaded: false
        };
    },
    mixins: [LogReaderMixins],
    render() {
        return (
            <div>
                <FileUploader onDrop={this.onDrop} />
            </div>
        );
    }
});

export default LogReader;

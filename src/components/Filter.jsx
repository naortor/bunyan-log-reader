import * as React from "react";
var createReactClass = require('create-react-class');
import { css } from 'emotion';

import Log from './Log';

const wrapper = css`
`;

const Filter = (props) => {
    let { keysPossibleToFilter } = props;

    if (!keysPossibleToFilter) return null;

    return (
        <div className="">
            <h2>Filter your log</h2>
            <section>
                <h3>Keys to filter out</h3>
                <ul className={wrapper}>
                    {keysPossibleToFilter.map((key, i) => {
                        <input type="checkbox" key={i} value={key} />
                    })}
                </ul>
            </section>
        </div>
    );
}

export default Filter;

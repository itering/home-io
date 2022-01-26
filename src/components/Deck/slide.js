import React, { Component } from 'react';
import cx from 'classnames';

class Slide extends Component {
    render() {
        const {
            component = 'div', current, before, prev, after, done,
            classes = {},
            ...props
        } = this.props;
        props.className = cx({
            currentSlide: current && done,
            slideBefore: before,
            slideAfter: after,

            // custom classes
            slideCurrent: classes.current && current && done,
            slideCurrentEntering: classes.entering && current && !done,
            slidePrev: classes.prev && prev && done,
            slidePrevLeaving: classes.leaving && prev && !done,
            before: classes.before && before,
            after: classes.after && after,
        }, 'slide', props.className);
        return React.createElement(component, props);
    }
}

export default Slide;

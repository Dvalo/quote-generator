import React from 'react';
import '@fortawesome/fontawesome-free/js/all.js';


class UpdateQuote extends React.Component {
    render() {
        return (
        <div>
            <div id="text">
            <i className="fas fa-quote-left"></i>
            {this.props.text}
            <i className="fas fa-quote-right"></i>
            </div>

            <div id="author">
            - {this.props.author ? this.props.author : "Unknown"}
            </div>
        </div>
        );
    }
}

export default UpdateQuote;

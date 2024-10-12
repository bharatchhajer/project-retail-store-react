import React from 'react';
import './Welcome.css';

class Welcome extends React.Component {
    constructor(props) {
        super(props);

        this.state = { message:"There are Offers for you !!"
        };
    }

    render() {
        return <>
        <div className="welcome">Welcome {this.props.name} !!</div>
        <div className="message">{this.state.message}</div>
        </>;
    }
}

export default Welcome;
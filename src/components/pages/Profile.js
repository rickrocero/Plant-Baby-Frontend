import React from 'react'
import ReactDOM from 'react-dom'
// // import './index.css'

class Profile extends React.Component {
    constructor(props) {
        super(props);
    };
    render = () => {
        return (
            <div className="Profile">
            <h1>Hello, Profile!</h1>
            </div>
        );
    };
}

export default Profile;
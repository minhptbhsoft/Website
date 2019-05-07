import React from 'react';
export default class Avatar extends React.Component {
    render() {
        let imgUrl = require('../../img/_IGP2668-02.jpeg')
        return (
            <div>
                <div className="avatar align-items-center ">
                    <div className="avatar-img" style={{ backgroundImage: 'url(' + imgUrl + ')' }}></div>
                </div>
            </div>

        )
    }
}
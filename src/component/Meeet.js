import React from 'react';
import './Meeet.scss';

const Meeet = () => {
    return (
        <div className="meeet">
                <img src={require('../assets/Logo.svg').default} alt='mySvgImage' className="logo" />

                <div className="text">
                <h1>Meeet New <br /> Entrepreneurs</h1>
                <p>Meeet is a new social media platform for entrepreneurs to connect and socialize</p>
                <button>Get notified at launch</button>
                </div>

                <div className="icon">
                <img src={require('../assets/Twitter.svg').default} alt='mySvgImage' className="Twitter" />
                <span>Follow us on Twitter</span>
                </div>

                    <img src={require('../assets/User Avatar 1.svg').default} alt='mySvgImage' className="UserAvatar1" />
                    <img src={require('../assets/User Avatar 2.svg').default} alt='mySvgImage' className="UserAvatar2" />
                    <img src={require('../assets/User Avatar 3.svg').default} alt='mySvgImage' className="UserAvatar3" />
                    <img src={require('../assets/User Avatar 4.svg').default} alt='mySvgImage' className="UserAvatar4" />
                    <img src={require('../assets/User Avatar 5.svg').default} alt='mySvgImage' className="UserAvatar5" />
        </div>
    )
}

export default Meeet

import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer id="footer">
				<p>© 2020 JAES Made It</p>
                <p>Made with <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a> | <a href="https://github.com/jhonnierandrey/covid-board" target="_blank" rel="noopener noreferrer">GitHub</a></p>
                <p><a href="http://jhonnierandrey.info/" target="_blank" rel="noopener noreferrer">See more</a></p>
			</footer>
        );
    }
}

export default Footer;
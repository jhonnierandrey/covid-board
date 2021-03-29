import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer id="footer">
				<p>&copy; 2021 <a href="https://www.jaesmadeit.com/" target="_blank" rel="noopener noreferrer">JAES Made It</a></p>
                <p>Made with <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a> | <a href="https://github.com/jhonnierandrey/covid-board" target="_blank" rel="noopener noreferrer">GitHub</a></p>
                <p><a href="http://jhonnierandrey.info/" target="_blank" rel="noopener noreferrer">See more</a> | <a href="https://www.buymeacoffee.com/jhonnierandrey" target="_blank" rel="noopener noreferrer"><i class="fas fa-coffee"></i></a></p>
			</footer>
        );
    }
}

export default Footer;
import React, { Component } from 'react';

class Row extends Component {
	render() {
		return (
			<div
				className={this.props.className}
				style={this.props.style}
				>
				{this.props.children}
			</div>
		);
	}
}

Row.defaultProps = {
	style: {},
	className: 'row'
}

Row.propTypes = {
	style: React.PropTypes.object.isRequired,
	className: React.PropTypes.string.isRequired
}

export default Row;
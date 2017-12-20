import React from 'react';
import evalDependsOn from '../../../../../../fields/utils/evalDependsOn';

module.exports = React.createClass({
	displayName: 'FormHeading',
	propTypes: {
		options: React.PropTypes.object,
	},
	render () {
		if (!evalDependsOn(this.props.options.dependsOn, this.props.options.values)) {
			return null;
		}
		
		let Heading = 'h3';

		if (this.props.options.subHeading) {
			Heading = 'h4';
		}

		if (this.props.options.isLabel) {
			Heading = 'div';
		}

		return <Heading className={this.props.options.isLabel ? '' : 'form-heading'}>{this.props.content}</Heading>;
	},
});

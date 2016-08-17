/* global Blaze */
import React from 'react';

export default React.createClass({
  propTypes: {
    template: React.PropTypes.any.isRequired,
    component: React.PropTypes.any,
  },

  getDefaultProps() {
    return {
      component: 'div',
    };
  },

  // we don't want to re-render this component if parent changes
  shouldComponentUpdate() {
    return true;
  },

  componentDidMount() {
    this.view = Blaze.render(this.props.template, React.findDOMNode(this.refs.root));
  },

  componentWillUnmount() {
    Blaze.remove(this.view);
  },
  
  componentDidUpdate() {
    console.log('update');
    Blaze.remove(this.view);
    this.view = Blaze.render(this.props.template, React.findDOMNode(this.refs.root));
  },

  render() {
    let {component, ...props} = this.props;
    props.ref = 'root';
    return React.createElement(component, props);
  },
});

import React, { Component, PropTypes } from "react";
import { getStyles } from "../utils/base";
import Radium from "radium";

@Radium
export default class List extends Component {
  render() {
    return this.props.ordered ? (
      <ol reversed={this.props.reversed} start={this.props.start} type={this.props.type} className={this.props.className} style={[this.context.styles.components.list, getStyles.call(this), this.props.style]}>
        {this.props.children}
      </ol>) : (
      <ul className={this.props.className} style={[this.context.styles.components.list, getStyles.call(this), this.props.style]}>
        {this.props.children}
      </ul>);
  }
}

List.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  className: PropTypes.string,
  ordered: PropTypes.bool,
  reversed: PropTypes.bool,
  start: PropTypes.number,
  type: PropTypes.string
};

List.defaultProps = {
  ordered: false,
  reversed: false,
  start: 1,
  type: "1"
};

List.contextTypes = {
  styles: PropTypes.object
};

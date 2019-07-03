import React from "react";
import PropTypes from "prop-types";
import GenericTile from "./GenericTile";

export default class SnippetTile extends React.Component {
    render() {
        return <GenericTile {...this.props} longText={this.props.body} />;
    }
}

SnippetTile.propTypes = {
    name: PropTypes.string,
    body: PropTypes.string,
    id: PropTypes.string,
};

import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Table from 'rc-table';
//libraries
import _ from 'lodash';
import ApiService from "../../../services/ApiService";

/**
 * Import all constants as an object.
 */

class ListItem extends Component {

    render() {
        const {model} = this.props;

        return (
            <div className="news clearfix">
                <h3 className="news-title">
                    <Link to={`/news/${model.id}`}>
                        {model.title}
                    </Link>
                </h3>
                <p className="news-content">{model.content_truncated}</p>
            </div>
        );
    }
}

export default ListItem

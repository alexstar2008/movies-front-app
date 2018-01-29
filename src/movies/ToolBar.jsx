import React, { Component } from 'react';
import { Button, Col, Glyphicon } from 'react-bootstrap';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { orderBy } from './actions/index';

function ToolBar({ order, orderBy  }) {
    function handleClick() {
        orderBy(!order);
    }
    return (
        <Col sm={4}>
            <Button onClick={handleClick} bsStyle="primary">
                Sort by name &nbsp;<Glyphicon
                    glyph={order ? 'sort-by-alphabet' : 'sort-by-alphabet-alt'} />
            </Button>
        </Col>
    );
}

function mapStateToProps(store) {
    return {
        order: store.filters.order
    }
}

function mapDispatchToProps(dispatch) {
    return {
        orderBy: bindActionCreators(orderBy, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToolBar);

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FormControl, ControlLabel, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

import { setFilterName, setFilterActor } from '../actions/filter.actions';


function SearchBar({ setFilterName, setFilterActor, name, actor }) {
    function filterByName(e) {
        const name = e.target.value.toLowerCase();
        setFilterName(name);
    }
    function filterByActor(e) {
        const actorSearch = e.target.value.toLowerCase();
        setFilterActor(actorSearch);
    }
    return (
        <div>
            <Col sm={4}>
                <ControlLabel>Search by Name</ControlLabel>
                <FormControl
                    type="text"
                    placeholder="Casablanca"
                    value={name}
                    onChange={(e) => filterByName(e)} />
            </Col>
            <Col sm={4}>
                <ControlLabel>Search by Actor</ControlLabel>
                <FormControl
                    type="text"
                    placeholder="Mel Brooks"
                    value={actor}
                    onChange={(e) => filterByActor(e)} />
            </Col>
        </div>
    );

}

function mapStateToProps(store) {
    return {
        name: store.filters.name,
        actor: store.filters.actor
    }
}
function mapDispatchToProps(dispatch) {
    return {
        setFilterName: bindActionCreators(setFilterName, dispatch),
        setFilterActor: bindActionCreators(setFilterActor, dispatch)
    }
}

SearchBar.propTypes  = {
    setFilterName: PropTypes.func,
    setFilterActor: PropTypes.func,
    name : PropTypes.string,
    actor: PropTypes.string   
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
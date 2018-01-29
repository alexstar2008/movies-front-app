import React, { Component } from 'react';
import { FormControl, ControlLabel, FormGroup, HelpBlock, Col, Form, Button } from 'react-bootstrap';

import FieldGroup from './FieldGroup';

class MovieCreateForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            year: '',
            format: 'DVD',
            actors: ''
        };
    }
    handleInputChange(e, type) {
        this.setState({
            [type]: e.target.value
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(this.state);
    }
    render() {
        return (
            <Form horizontal onSubmit={this.handleSubmit.bind(this)}>
                <h3>New Movie:</h3>
                <FieldGroup
                    id="formControlsName"
                    type="text"
                    label="Name"
                    placeholder="Enter name"
                    value={this.state.name}
                    maxLength="150" 
                    required
                    onChange={(e) => { this.handleInputChange(e, 'name')}}
                />
                <FieldGroup
                    id="formControlsYear"
                    type="number"
                    required
                    max={2100}
                    min={1800}
                    label="Year"
                    placeholder="Enter year"
                    value={this.state.year}
                    onChange={(e) => { this.handleInputChange(e, 'year') }}
                />
                <FormGroup controlId="formControlsFormat">
                    <Col sm={2}>
                        <ControlLabel>Select</ControlLabel>
                    </Col>
                    <Col sm={4} >
                        <FormControl componentClass="select" placeholder="Select format"
                            value={this.state.format}
                            onChange={(e) => { this.handleInputChange(e, 'format') }} >
                            <option value="DVD">DVD</option>
                            <option value="VHS">VHS</option>
                            <option value="Blu-Ray">Blu-Ray</option>
                        </FormControl>
                    </Col>
                </FormGroup>
                <FormGroup controlId="formControlsTextarea">
                    <Col sm={2}>
                        <ControlLabel>Actors (use "," separator) </ControlLabel>
                    </Col>
                    <Col sm={10}>
                        <FormControl 
                            componentClass="textarea" 
                            max="400"
                            placeholder="Antonio Banderas, George Cluni" value={this.state.actors}
                            onChange={(e) => { this.handleInputChange(e, 'actors') }} 
                        />
                    </Col>
                </FormGroup>
                <Button type="submit" bsStyle="success">Save data</Button>
            </Form>
        );
    }
}

export default MovieCreateForm;
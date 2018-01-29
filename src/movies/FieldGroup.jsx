import React from 'react';
import { FormControl, ControlLabel, FormGroup, HelpBlock, Col, Form, Button } from 'react-bootstrap';

function FieldGroup({ id, label, help, ...props }) {
    return (
        <FormGroup controlId={id}>
            <Col componentClass={ControlLabel} sm={2}>
                <ControlLabel>{label}</ControlLabel>
            </Col>
            <Col sm={10}>
                <FormControl {...props} />
            </Col>
        </FormGroup>
    );
}

export default FieldGroup;
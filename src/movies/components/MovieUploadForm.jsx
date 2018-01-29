import React, { Component } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

class MovieUploadForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: null
        };
        this.handleFileChange = this.handleFileChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(this.state.file);
    }
    handleFileChange(e) {
        this.setState({ file: e.target.files[0] });
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} className='upload-files-form'>
                <h3>Upload file with movies:</h3>
                <label>
                    <Row>
                        <Col sm={4}>
                            Upload file:
                        </Col>
                        <Col sm={8}>
                            <input
                                type="file"
                                onChange={this.handleFileChange}
                                accept=".txt"
                                required
                            />
                        </Col>
                    </Row>
                </label>
                <Row>
                    <Button type="submit" bsStyle="success">Confirm</Button>
                </Row>
            </form>
        );
    }
}

MovieUploadForm.propTypes  = {
    onSubmit: PropTypes.func   
}


export default MovieUploadForm;
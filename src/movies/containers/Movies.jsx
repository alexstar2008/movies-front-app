import React, { Component } from 'react';
import { PanelGroup, Tabs, Tab, Panel, Alert, Well, Modal, Button } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Movie from '../components/Movie';
import SearchBar from './SearchBar';
import ToolBar from './ToolBar';
import MovieCreateForm from '../components/MovieCreateForm';
import MovieUploadForm from '../components/MovieUploadForm';
import { addMovie, getMovies, uploadFile, removeMovie } from '../actions/movie.actions';
import Utils from '../Utils';

class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = { movies: [], error: null, isLoading: false, showModal: false };
        this.removeMovie = this.removeMovie.bind(this);
        this.uploadFileWithMovies = this.uploadFileWithMovies.bind(this);
        this.createMovie = this.createMovie.bind(this);
    }
    componentDidMount() {
        this.props.getMovies();
    }
    createMovie(data) {
        data.actors = data.actors.split(/,\s*/);
        this.props.addMovie(data);
    }
    uploadFileWithMovies(file) {
        const formData = new FormData();
        formData.append('movies', file);
        this.props.uploadFile(formData);
    }
    removeMovie(id) {
        this.setState({ showModal: true, removeId: id });
    }
    handleCloseModal(status) {
        this.setState({ showModal: false });
        if (status) {
            this.props.removeMovie(this.state.removeId);
        }
    }
    render() {
        const { movies, isMovieLoading, err, info } = this.props;
        const moviesTemplates = movies && movies.map((movie, index) =>
            <Movie key={movie['_id']} movie={movie} remove={this.removeMovie} index={index} />);

        return (
            <div className="container">
                <Modal show={this.state.showModal} onHide={() => { this.handleCloseModal(false); }}>
                    <Modal.Header closeButton>
                        <Modal.Title>Сonfirmation of removing</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Do you really want to remove information about this film ?</h4>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => { this.handleCloseModal(true); }} bsStyle="danger">Yes</Button>
                        <Button onClick={() => { this.handleCloseModal(false); }} bsStyle="info">No</Button>
                    </Modal.Footer>
                </Modal>
                <h1 className='text-info'>Movie Hub</h1>
                {
                    err && (
                        <Alert bsStyle="danger">
                            <strong>{err}</strong>
                        </Alert>
                    )
                }
                {
                    info && (
                        <Alert bsStyle="success">
                            <strong>{info}</strong>
                        </Alert>)
                }
                <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
                    <Tab eventKey={1} title="Create new Movie">
                        <Well>
                            <MovieCreateForm onSubmit={this.createMovie.bind(this)} />
                        </Well>
                    </Tab>
                    <Tab eventKey={2} title="Upload file with movies">
                        <Well>
                            <MovieUploadForm onSubmit={this.uploadFileWithMovies} />
                        </Well>
                    </Tab>
                </Tabs>
                <h2 className='text-success movies-title'>Available movies</h2>
                <Panel>
                    <Panel.Heading><h3>Toolbar</h3></Panel.Heading>
                    <Panel.Body>
                        <ToolBar />
                        <SearchBar />
                    </Panel.Body>
                </Panel>
                {isMovieLoading && (
                    <Alert bsStyle="warning">
                        <strong>Updating movies ...</strong>
                    </Alert>
                )
                }
                {
                    !isMovieLoading && (
                        <PanelGroup accordion id="accordion-example">
                            {moviesTemplates}
                        </PanelGroup>
                    )
                }
            </div>
        );
    }
}


function mapStateToProps(store) {
    return {
        movies: Utils.getMoviesWithFilter(store.movies.list, store.filters),
        err: store.movies.err,
        info: store.movies.info,
        isMovieLoading: store.movies.isMovieLoading
    }
}
function mapDispatchToProps(dispatch) {
    return {
        addMovie: bindActionCreators(addMovie, dispatch),
        getMovies: bindActionCreators(getMovies, dispatch),
        uploadFile: bindActionCreators(uploadFile, dispatch),
        removeMovie: bindActionCreators(removeMovie, dispatch)
    }
}

Movies.propTypes  = {
    addMovie: PropTypes.func,
    getMovies: PropTypes.func,
    uploadFile: PropTypes.func,
    removeMovie: PropTypes.func,
    movies: PropTypes.array,
    err : PropTypes.any,
    info: PropTypes.any,
    isMovieLoading: PropTypes.bool   
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
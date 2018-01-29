import React, { Component } from 'react';
import { PanelGroup, Tabs, Tab, Panel, Alert, Well, Modal, Button } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


import Movie from './Movie';
import SearchBar from './SearchBar';
import ToolBar from './ToolBar';
import MovieCreateForm from './MovieCreateForm';
import MovieUploadForm from './MovieUploadForm';
import { addMovie, getMovies, uploadFile, removeMovie } from './actions/index';

const API = 'https://webby-movies-app.herokuapp.com/api';

class Movies extends Component {
    constructor(props) {
        super(props);
        this.removeMovie = this.removeMovie.bind(this);
        this.uploadFileWithMovies = this.uploadFileWithMovies.bind(this);
        this.state = { movies: [], error: null, isLoading: false, showModal: false };
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
    componentDidMount() {
        this.setState({ isLoading: true });
        this.props.getMovies();
    }
    handleCloseModal(status) {
        this.setState({ showModal: false });
        if (status) {
            this.props.removeMovie(this.state.removeId);
        }
    }
    render() {
        const { movies, isMovieLoading, err, info } = this.props;

        if (isMovieLoading) {
            return (
                <Alert bsStyle="warning">
                    <strong>Updating list of movies ...</strong>
                </Alert>
            );
        }

        const moviesTemplates = movies && movies.map((movie, index) => <Movie key={movie['_id']} movie={movie} remove={this.removeMovie} index={index} />);
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
                <PanelGroup accordion id="accordion-example">
                    {moviesTemplates}
                </PanelGroup>
            </div>
        );
    }
}



function sort(movies, type) {
    const direction = type ? 1 : -1;
    return movies.slice(0).sort((a, b) => {
        if (a.name === b.name)
            return 0;
        if (a.name < b.name)
            return -1 * direction;
        return direction;
    });
}

function getMoviesWithFilter(movies, filter) {
    if (!movies.length)
        return;

    const actorSearch = filter.actorSearch;
    const name = filter.name;
    const order = filter.order;

    if (actorSearch) {
        movies = movies.filter(movie =>
            movie.actors.some(actor => actor.toLowerCase().includes(actorSearch)));
    }

    if (name) {
        movies = movies.filter(movie => movie.name.toLowerCase().includes(name))
    }

    if (typeof order === 'boolean') {
        movies = sort(movies, order);
    }
    return movies;
}

function mapStateToProps(store) {
    return {
        movies: getMoviesWithFilter(store.movies.list, store.filters),
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

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
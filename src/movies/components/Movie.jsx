import React from 'react';
import { Panel, Button } from 'react-bootstrap';

function Movie(props) {
    const { _id, name, year, format, actors } = props.movie;
    const actorsJoined = actors.join(" | ");

    function handleRemove() {
        props.remove(_id);
    }
    
    return (
        <Panel eventKey={props.index}>
            <Panel.Heading>
                <Panel.Title toggle className="text-left">
                    <div className='row'>
                        <div className='col-sm-5 text-center'>
                            {name}
                        </div>
                        <div className='col-xs-6 col-sm-5'>
                            {year}
                        </div>
                        <div className='col-xs-6 col-sm-2 text-right'>
                            <Button bsStyle="danger" onClick={handleRemove} >Remove</Button>
                        </div>
                    </div>
                </Panel.Title>
            </Panel.Heading>
            <Panel.Body collapsible>
                <div className='row'>
                    <div className='col-xs-4 col-md-3 text-success'><h4>Title:</h4></div>
                    <div className='col-xs-4 col-md-2 text-success'><h4>Year:</h4></div>
                    <div className='col-xs-4 col-md-3 text-success'><h4>Format:</h4></div>
                    <div className='visible-md col-md-4 text-success'><h4>Actors:</h4></div>
                </div>
                <div className='row'>
                    <div className='col-xs-4 col-md-3'>{name}</div>
                    <div className='col-xs-4 col-md-2'>{year}</div>
                    <div className='col-xs-4 col-md-3'>{format}</div>
                    <div className='hidden-md col-xs-12'><h4>Actors:</h4></div>
                    <div className='col-xs-12 col-md-4'>{actorsJoined}</div>
                </div>
            </Panel.Body>
        </Panel>
    );
}

export default Movie;
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { findingSmurfs } from './store/actions/actions';
import SmurfContainer from './SmurfContainer'

const Smurfs = (props) => {
    useEffect(() => {
        props.findingSmurfs();
    }, []);
        console.log(props.characters)
    return (
        <section>
            <h1>Smurf Village</h1>
            {props.isLoading ? <h5>looking for residents</h5> : null}
            
            <SmurfContainer
            characters={props.characters} />
        </section>
    )
};

const mapStateToProps = (state) => {
    return {
        characters: state.data || []
    }
};

export default connect (mapStateToProps, {findingSmurfs})(Smurfs);
import React, { useState, UseLocation } from 'react'
import '../../../styles/components/header/searchBar/searchBar.css'
import { fetchData } from '../../../actions';
import { connect } from 'react-redux';

const Searchbar = (props) => {

    const [inputValue, setInputValue] = props.sQuery != null ? useState(props.sQuery) : useState('')

    return (
        <div className='Bar'>
            <input type="text" onChange={(e) => setInputValue(e.target.value)} value={inputValue} />
            <a id="searcher" href={`/?album=${inputValue}`}>
                <button onClick={() => props.dispatch(fetchData())}>
                </button>
            </a>
        </div>
    )
}

const mapStateToProps = ({ things: { myData, isFetching } }) => ({
    myData,
    isFetching
});

export default connect(mapStateToProps)(Searchbar)

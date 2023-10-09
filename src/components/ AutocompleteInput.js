// AutocompleteInput.js

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Input, List } from 'antd';
import { addToSelectedPlace } from '../redux/actions/mapAction';
import { fetchAutocompleteSuccess,addToSearchHistory } from '../redux/actions/autocompleteAction';
import { mockData } from './mock/data';

const AutocompleteInput = ({ results, searchHistory,addToSearchHistory,addToSelectedPlace, fetchAutocompleteSuccess }) => {
  const [value, setValue] = useState('');
  const [isopen,setIsOpen]=useState(false);
  const [isshowHistory,setIsShowHistory] = useState(false)

  const divStyle={
    position: 'relative',
  }
  const inputStyle = {
    color: '#000',
    fontSize:'14px',
    margin:'18px',
    width:'500px',
    zIndex:'9999'
  };

  const listStyle={
    width: '500px',
    position: 'absolute',
    left: '18px',
    right: 0,
    borderRadius:'4px',
    background: '#fff',
    padding: '8px',
    top:'50px',
    zIndex:'9999'
  }

  const handleInputChange = (value) => {
    setValue(value);
    setIsOpen(value?true:false)
    setIsShowHistory(false)
    const filteredResults = mockData.filter((place) =>
      place.description.toLowerCase().includes(value.toLowerCase())
    );
    fetchAutocompleteSuccess(value?filteredResults:[]);
  };

  const handleSelectPlace = (place) => {
    addToSearchHistory(place);
    addToSelectedPlace(place)
    setValue(place.description);
    setIsOpen(false)
  };

  const handleSelectedHistory = (place)=>{
    addToSelectedPlace(place)
    setIsShowHistory(false)
  }

  const showHistory = ()=>{
    setIsShowHistory(true)
  }

  return (
    <div style={divStyle}>
      <Input
        placeholder="Search places..."
        value={value}
        onChange={(e) => handleInputChange(e.target.value)}
        style={inputStyle}
        onClick={showHistory}
      />
    { isopen ? <List
        dataSource={results}
        style={listStyle}
        renderItem={(item) => (
          <List.Item onClick={() => handleSelectPlace(item)}>
            {item.description}
          </List.Item>
        )}
      />:isshowHistory?<List
      dataSource={searchHistory}
      style={listStyle}
      renderItem={(item) => (
        <List.Item onClick={() => handleSelectedHistory(item)}>
          {item.description}
        </List.Item>
      )}
    />:null}
    </div>
  );
};

const mapStateToProps = (state) => ({
  results: state.autocomplete.results,
  searchHistory: state.autocomplete.history,
});

export default connect(mapStateToProps, { addToSearchHistory, addToSelectedPlace,fetchAutocompleteSuccess })(AutocompleteInput);

// AutocompleteInput.js

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Input, List } from 'antd';
import { addToSearchHistory } from '../redux/actions/searchHistoryAction';
import { addToSelectedPlace } from '../redux/actions/mapAction';
import { fetchAutocompleteSuccess } from '../redux/actions/autocompleteAction';
import { mockData } from './mock/data';

const AutocompleteInput = ({ results, addToSearchHistory,addToSelectedPlace, fetchAutocompleteSuccess }) => {
  const [value, setValue] = useState('');
  const [isopen,setIsOpen]=useState(false);

  const divStyle={
    position: 'relative',
  }
  const inputStyle = {
    color: '#000',
    fontSize:'14px',
    margin:'18px',
    width:'500px',
  };

  const listStyle={
    width: '500px',
    position: 'absolute',
    left: '18px',
    right: 0,
    borderRadius:'4px',
    background: '#fff',
    padding: '8px',
    top:'77px',
    zIndex:'999'
  }

  const handleInputChange = (e) => {
    console.log(e)
    setValue(e.target.value);
    setIsOpen(e.target.value?true:false)
    const filteredResults = mockData.filter((place) =>
      place.description.toLowerCase().includes(e.target.value.toLowerCase())
    );
    fetchAutocompleteSuccess(e.target.value?filteredResults:[]);
  };

  const handleSelectPlace = (place) => {
    addToSearchHistory(place.description);
    addToSelectedPlace(place)
    setValue(place.description);
    setIsOpen(false)
  };

  return (
    <div style={divStyle}>
      <Input
        placeholder="Search places..."
        value={value}
        onChange={(e) => handleInputChange(e)}
        style={inputStyle}
      />
    { isopen && <List
        dataSource={results}
        style={listStyle}
        renderItem={(item) => (
          <List.Item onClick={() => handleSelectPlace(item)}>
            {item.description}
          </List.Item>
        )}
      />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  results: state.autocomplete.results,
});

export default connect(mapStateToProps, { addToSearchHistory, addToSelectedPlace,fetchAutocompleteSuccess })(AutocompleteInput);

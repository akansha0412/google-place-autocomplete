import React from 'react';
import { connect } from 'react-redux';

const SearchHistory = ({ searchHistory }) => {
  const title={
    color:'#000',
    fontSize:'16px',
    fontWeight:'bold',
    margin:'18px',
    height:'32px'
  }

  const list={
    fontSize:'12px',
    color:'#272727',
    height:'20px'
  }

  return (
    <>
   {searchHistory.length>0 && <div>
      <h2 style={title}>Search History</h2>
      <ul>
        {searchHistory.map((place, index) => (
          <li style={list} key={index}>{place}</li>
        ))}
      </ul>
    </div>}
    </>
  );
};

const mapStateToProps = (state) => ({
  searchHistory: state.searchHistory.history,
});

export default connect(mapStateToProps)(SearchHistory);

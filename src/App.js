import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store'; // Import your Redux store
import AutocompleteInput from './components/ AutocompleteInput';
import Map from './components/Map';
import SearchHistory from './components/SearchHistory';
import { Layout,Space } from 'antd';

const App = () => {
  const { Header,  Content } = Layout;
  const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 50,
    fontSize:'18px',
    lineHeight: '64px',
    backgroundColor: '#7dbcea',
  };
  
  const contentStyle = {
    height: '100vh',
    lineHeight: '120px',
    color: '#fff',
  };
  return (
    <Provider store={store}>
      <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
      <Layout>
        <Header style={headerStyle}>Google Place Autocomplete</Header>
        <Content style={contentStyle}>
          <AutocompleteInput />
          <Map />
          <SearchHistory />
        </Content>
      </Layout>
      </Space>
    </Provider>
  );
};

export default App;

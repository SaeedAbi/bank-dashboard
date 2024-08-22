import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';

function Search() {
  return (
    <Input
      style={{ width: '325px', height: '40px' }}
      placeholder='Search for something'
      prefix={<SearchOutlined />}
    />
  );
}

export default Search;

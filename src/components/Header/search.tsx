import React from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

function Search() {
  return (
    <Input
      className='pl-8'
      addonBefore={<SearchOutlined />}
      placeholder='large size'
    />
  );
}

export default Search;

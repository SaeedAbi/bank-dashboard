import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';

interface Props {
  width: string;
  height: string;
}
function Search({ width, height }: Props) {
  return (
    <Input
      style={{ width: width, height: height, backgroundColor: '#F5F7FA' }}
      placeholder='Search for something'
      prefix={<SearchOutlined />}
    />
  );
}

export default Search;

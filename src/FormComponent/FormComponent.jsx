import React, { Component } from 'react';
import { Input, Space, Card } from 'antd';

export default class FormComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      items: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  };

  handleSubmit = (event) => {
    console.log(this.state.items);
    // event.preventDefault();
    this.setState({
      items: [...this.state.items, this.state.input],
      input: '',
    });
  };

  render() {
    const { Search } = Input;
    return (
      <div>
        <Space >
          <Search enterButton="Search" onSearch={this.handleSubmit} onChange={this.handleChange} value={this.state.input}/>
        </Space>

        <div className={'card_content'}>
          <Card title="Card title" bordered={false} style={{ width: 300 }}>
            {this.state.items.map((item, index) => (
              <p style={{ fontWeight: 'bold' }} key={index}>
                {item}
              </p>
            ))}
          </Card>
        </div>
      </div>
    );
  }
}

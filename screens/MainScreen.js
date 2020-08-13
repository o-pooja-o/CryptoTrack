import React, { Component } from 'react';
import { ActivityIndicator, FlatList, Text, View, Button, Alert } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';

export default class App extends Component {
  constructor(props) {
    super(props);
    const {navigation} = props;

    this.state = {
      data: [],
      isLoading: true
    };
  }
  componentDidMount() {
    fetch("https://data.messari.io/api/v1/assets?fields=id,slug,symbol,metrics/market_data/price_usd")
      .then((response) => response.json())
      .then((res) => {
        {alert(JSON.stringify(res.data))}

        // this.setState({ data: json.data });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  render() {
    const { data, isLoading } = this.state;

    return (
      <View style={{ flex: 1, padding: 24 }}>
        <Header/>
        <Button
        title="add new cryptocurrency"
        onPress={()=>this.props.navigation.navigate('Search')}
        />
      </View>
    );
  }
};

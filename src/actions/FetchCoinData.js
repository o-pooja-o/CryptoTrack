fetchData(text) {
    this.setState({ text });
    const apikey = '&apikey=thewdb';
    const url = 'http://www.omdbapi.com/?s=';
    fetch(url + text + url)
      .then(response => response.json())
      .then((responseJson) => {
        this.setState({
          dataSource: responseJson.Search,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  import axios from 'axios'
export default function FetchCoinData(text){
    this.setState({text});
    
    return(

    )
}
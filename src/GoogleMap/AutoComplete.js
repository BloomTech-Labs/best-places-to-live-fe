import React ,{Component} from 'react';

import Script from 'react-load-script';

class Search extends Component {
    constructor(props){
    super(props);
    this.state = {
        city:'',
        query:''}
    };

render(){
    return (
    <div>
        <input id="autocomplete" placeholder="" hintText="Search City" value={this.state.query}
               style={{
                   margin:'0 auto',
                   maxWidth:800,
               }}
        />
    </div>
    );
}
}

export default Search;

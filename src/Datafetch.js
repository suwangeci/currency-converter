import React,{Component} from 'react';
import { Segment,Dropdown } from 'semantic-ui-react';
import { convertCurrency } from './logic/logic';


const FETCH_URL="https://free.currencyconverterapi.com/api/v5/currencies" 

class Fetcher extends Component {
    state={
        resultsArr:[]
    }
 
    componentDidMount(){
       fetch(FETCH_URL).then((response)=>{
          return response.json();  
       }).then((myResults)=>{
         const results =Object.values(myResults.results);
        const resultsArr=[];
        results.forEach(result => {
            resultsArr.push(result);
          
        });
        this.setState({resultsArr:resultsArr});
     

       })

    }

    render(){
        const {resultsArr}=this.state;
        const options=resultsArr.map((option)=>{
            return {key:option.id,text:option.currencyName,value:option.id}

        })
        return (
            <Dropdown options={options} search onChange={this.props.onChange} fluid selection placeholder={this.props.placeholder}/>
        )
}
}
export default Fetcher;
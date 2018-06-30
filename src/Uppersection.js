import React ,{Component} from 'react';
import {Segment,Form,Button,Dropdown,Grid, Icon, Header} from 'semantic-ui-react';
import Fetcher from './Datafetch';
import { convertCurrency } from './logic/logic';

class Uppersection extends Component {
    state={
        converting:false,
        amount:'',
        fromCurrency:'',
        toCurrency:'',
        convertButton:"Convert",
        results:'',
        err:'',
        date:new Date()
    }
    componentDidMount(){

    }

convert=(e)=>{
      e.preventDefault();
      this.setState({converting:true});
      const {amount,fromCurrency,toCurrency}=this.state;
      convertCurrency(amount,fromCurrency,toCurrency,(err,results)=>{
          this.setState({results:results,converting:false,err:err});
      })
      

        
    }
    render(){
        const {err,results,allFieldsOk,converting,convertButton}=this.state;
        const unfilledFields=this.state.fromCurrency==='' || this.state.toCurrency==='' || this.state.amount==='';
        return (
            <Segment inverted className="min-height">
                <Segment inverted textAlign="center">
                    <Header>
                        Currency Converter Calculator.
                    </Header>
                </Segment>
                <Segment>

                </Segment>
                <Segment inverted>
            <Form widths="equal" inverted>
                <Form.Group>
                <Form.Input onChange={(e)=>this.setState({amount:e.target.value})} placeholder="amount"/>
                <Fetcher placeholder="From" onChange={(e,data)=>{this.setState({fromCurrency:data.value})}} />
                <Fetcher placeholder="to" onChange={(e,data)=>this.setState({toCurrency:data.value})}/>
                <Form.Button onClick={this.convert} disabled={unfilledFields} loading={converting} inverted color="purple" fluid >{convertButton}</Form.Button>
                <Form.Input value={err && err || results} placeholder="results"/>
                
                </Form.Group>
                <Segment inverted>
               
                </Segment>
            </Form>
            </Segment>
            </Segment>
        )
    }
}
export default Uppersection;

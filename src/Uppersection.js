import React ,{Component} from 'react';
import {Segment,Form,Input,Button} from 'semantic-ui-react';

class Uppersection extends Component {
    render(){
        return (
            <Segment inverted className="min-height">
                <Segment>
                <Button>Kenyan Shilling</Button>
                </Segment>
                <Segment inverted>
            <Form widths="equal" inverted>
                <Input placeholder="from" value="" width={4}/>
                <Input placeholder="to" value="" width={4}/>
                <Button >Convert</Button>
               
            </Form>
            </Segment>
            </Segment>
        )
    }
}
export default Uppersection;

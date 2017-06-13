/**
 * Created by HUY on 6/11/2017.
 */
import React,{Component} from 'react';
export default class DisplayComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            value : this.props.value
        };
    }
    render(){
        let {data, m} = this.props;
        return(
            <div className="display">
                    <text className="mText"> {m?'M':''}</text>
                <text className="text">{data}</text>
                <style>{css}</style>
            </div>
        );
    }
}

const css = `
    .display{
        width: 400px;
        height: 50px;
        border-radius: 10px;
        border: 1px solid blue;
        text-align: right;
        padding: 15px 10px;
    }
    .text{
        
    }
    .mText{
        float: left;
        text-align: left;
    }
`;
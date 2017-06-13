/**
 * Created by HUY on 6/11/2017.
 */
import React,{Component} from 'react';
export default class Button extends Component{
    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    onClick(label){
        const {clickButton} = this.props;
        if(clickButton){
            clickButton(label);
        }
    }
    render(){
        let {label} = this.props;
        label = label?label:'';
        return(
            <button className="button" onClick={() => {this.onClick(label)}}>
                {label}
                <style>{css}</style>
            </button>
        );
    }
}

const css = `
    .button{
        width: 40px;
        height: 40px;
        text-align: center;
        border-radius: 10px;
    }
`;
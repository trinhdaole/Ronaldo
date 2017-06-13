/**
 * Created by HUY on 6/11/2017.
 */
import React,{Component} from 'react';
import ButtonComponent from './elements/button-component';

export default class MainComponent extends Component{
    constructor(props){
        super(props);
        this.clickButton = this.clickButton.bind(this);
    }

    clickButton(label){
        const {clickButton} = this.props;
        if(clickButton){
            clickButton(label);
        }
    }
    render(){
        let {data} = this.props;
        data = data?data:[];
        return(
            <div className="main">
                {data.map((item, index) => {
                    if(item === ''){
                        return (<br key={index}/>);
                    }else{
                        return(
                            <ButtonComponent key={index} label={item} clickButton={this.clickButton}/>
                        );
                    }
                })}
                <style>{css}</style>
            </div>
        );
    }
}

const css = `
    .main{
        width: 100%;
        height: 100%;
        padding: 10px;
    }
`;
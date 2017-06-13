/**
 * Created by HUY on 6/11/2017.
 */
import React,{Component} from 'react';
export default class MenuCoponent extends Component{
    render(){
        return(
            <div className="menu">
                <style>{css}</style>
            </div>
        );
    }
}

const css = `
    .menu{
        width: 100%;
        padding: 0 5px;
    }
`;
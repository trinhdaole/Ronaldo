/**
 * Created by HUY on 6/11/2017.
 */
import React,{Component} from 'react';
import MenuComponent from './menu-component';
import DisplayComponent from './display-component';
import MainComponent from './main-component';
import * as CalculateFunctions from './../functions/calculate-function';

export default class CalculatorComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            displayedData: '',
            memory: 0,
            clickSpecial: false
        };
        this.clickButton = this.clickButton.bind(this);
    }

    clickButton(label){
        let {displayedData, clickSpecial, memory} = {...this.state};
        if(label){
            if(clickSpecial && label !== '=' && label !== 'MC' && label !== 'MR' && label !== 'M+' && label !== 'M-' && label !== '<-'){
                displayedData = 0;
            }
            switch (label){
                case '+/-':
                case '%':
                    break;
                case '<-':
                    if(clickSpecial){
                        break;
                    }
                    displayedData = '' + displayedData;
                    displayedData = displayedData.substring(0, displayedData.length - 1);
                    break;
                case '+':
                case '-':
                case '*':
                case '/':
                    clickSpecial = false;
                    if(!displayedData || !displayedData.length){
                        break;
                    }
                    if(displayedData && displayedData.length){
                        if (displayedData.charAt(displayedData.length - 1) === '.'){
                            break;
                        }
                    }
                    if(CalculateFunctions.checkLastIsOperator(displayedData)){
                        displayedData = displayedData.substring(0, displayedData.length - 1) + label;
                    }else {
                        displayedData += label;
                    }
                    break;
                case '=':
                    if(clickSpecial){
                        break;
                    }
                    clickSpecial = true;
                    displayedData = eval(displayedData);
                    break;
                case 'C':
                    clickSpecial = true;
                    displayedData = 0;
                    break;
                case 'MC':
                    clickSpecial = true;
                    memory = 0;
                    break;
                case 'M+':
                    clickSpecial = true;
                    memory += CalculateFunctions.setMPlus(displayedData);
                    break;
                case 'M-':
                    clickSpecial = false;
                    memory = memory - CalculateFunctions.setMPlus(displayedData);
                    break;
                case 'MR':
                    clickSpecial = false;
                    if(!displayedData || !displayedData.length){
                        clickSpecial = true;
                    }
                    displayedData = CalculateFunctions.setMR(displayedData, memory);
                    break;
                case '.':
                    if(CalculateFunctions.checkDotInNumber(displayedData)){
                        break;
                    }
                    if(displayedData && displayedData.length){
                        if(displayedData.charAt(displayedData.length-1) === '.' || CalculateFunctions.checkLastIsOperator(displayedData)){
                            break;
                        }
                    }
                    displayedData += label;
                    break;
                default:
                    clickSpecial = false;
                    if(!displayedData){
                        displayedData = '';
                    }
                    displayedData += label;
                    break;
            }

            this.setState({displayedData, clickSpecial, memory});
        }
    }

    render(){
        let buttonList = [
            'MR', 'MC', 'M+', 'M-', '',
            '<-', 'C', '+/-', '%', '',
            '7', '8', '9', '/', '',
            '4', '5', '6', '*', '',
            '1', '2', '3', '-', '',
            '0', '.', '+', '='
        ];
        return(
            <div className="calculator">
                <MenuComponent />
                <DisplayComponent data={this.state.displayedData} m={this.state.memory}/>
                <MainComponent data={buttonList} clickButton={this.clickButton}/>
                <style>{css}</style>
            </div>
        );
    }
}

const css = `
    .calculator{
        width: 100%;
        height: 100%;
    }
`;
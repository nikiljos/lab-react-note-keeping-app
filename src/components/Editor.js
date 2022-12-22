import React, { Component } from "react";
import './Editor.css'

class Editor extends Component{

    constructor(){
        super();
        this.state={
            note: "Type something cool!"
        };
    }

    changeText(e){
        this.setState({
            note: e.target.value
        })
    }

    clearText(e){
        this.setState({
            note: "",
        });

    }

    render(){
        return(
            <div className="Editor">
                <div className="input">
                    <h3>Input</h3>
                    <textarea name="" id="" cols="300" rows="100" onChange={(e)=>this.changeText(e)} value={this.state.note}></textarea>
                    <div className="clear"><button onClick={()=>this.clearText()}>Clear</button></div>
                </div>
                <div className="output">
                    <h3>Pro Note</h3>
                    <div className="out-box">{this.state.note}</div>
                </div>
            </div>

        )
    }
}

export default Editor
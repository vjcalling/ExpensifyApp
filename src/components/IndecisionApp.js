import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';

class IndecisionApp extends React.Component {

    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);

        this.state = {
            options: props.options
        };
    }

//-----------------------------------------------------------------------------

    componentDidMount() {

        try{
            console.log("fetching data");
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options){
                this.setState(() => ({options}));
            }
        }catch(e){
            //Do nothing at all
        }
        
        
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length){
            console.log("saving data");
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

//-----------------------------------------------------------------------------

    //handle delete options using state
    handleDeleteOptions() {
        this.setState(() => ({options: []}));
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) =>  optionToRemove !== option)
        }));
    }

    //handle pick
    handlePick() {
        const randomNumber = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNumber];
        alert(option);
    }

    handleAddOption(option) {

        if(!option) {
            return 'Enter valid value for item';
        }else if(this.state.options.indexOf(option) > -1) {
            return 'This item already exists';
        }else {
            this.setState((prevState) => ({options: prevState.options.concat([option])}));
        }
    }

//-----------------------------------------------------------------------------
    render() {

        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer!';

        return(
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption handleAddOption={this.handleAddOption}/>
            </div>
        );
    }
}
//-----------------------------------------------------------------------------

IndecisionApp.defaultProps = {
    options: []
};

//------------------------------------------

export default IndecisionApp;
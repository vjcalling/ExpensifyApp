

//------------------------------------------

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

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
};

//------------------------------------------

const Action = (props) => {
        return(
            <div>
                <button 
                onClick={props.handlePick}
                disabled={!props.hasOptions}
                >
                    What should I do? 
                </button>
            </div>
        );
};

//------------------------------------------


const Option = (props) => {
        return(
            <div>
                {props.option}
                <button 
                    onClick={(e) => {
                        props.handleDeleteOption(props.option);
                    }}
                >
                    Remove
                </button>
            </div>
        );
    
};

//------------------------------------------

const Options = (props) => {

        return(
            <div>
                {props.options.length === 0 && <p>Please add some options to get started! </p>}
                {props.options.map((option) => (<Option 
                    key={option} option={option}
                    handleDeleteOption={props.handleDeleteOption}
                />))}
                <button onClick={props.handleDeleteOptions}>Remove All</button>
            </div>
        );
};

//------------------------------------------

class AddOption extends React.Component {

    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }

    handleAddOption(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(() => ({error}));
        if(!error){
            e.target.elements.option.value = '';
        }

    }

    render() {
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}> 
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

//------------------------------------------

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
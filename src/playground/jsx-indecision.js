
//-------------------------------------------------------------------------------------------------------------
const app = {
    title: "Indecision App",
    subtitle: "Put your life in hands of a computer",
    options: ['One', 'Two']
};

//-------------------------------------------------------------------------------------------------------------

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    console.log(option);
    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }

};

//-------------------------------------------------------------------------------------------------------------

const onRemoveAll = () => {
    app.options.length = 0;
    render();
};

//-------------------------------------------------------------------------------------------------------------

const onMakeDecision = () => {
    const randomNumber = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNumber];
    console.log(option);
    render();
};

//-------------------------------------------------------------------------------------------------------------

const appRoot = document.getElementById("app");

//-------------------------------------------------------------------------------------------------------------
const render = () => {

    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button disabled={app.options.length === 0} onClick={onRemoveAll}>Remove All</button>
            <ol>
                {
                    app.options.map((option) => <li key={option}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}> 
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    
    ReactDOM.render(template, appRoot);
};

//-------------------------------------------------------------------------------------------------------------

const toggleApp = {

    title: 'Visibility Toggle',
    details: '',
    hidden: true
};

//-------------------------------------------------------------------------------------------------------------

const onShow = () => {
    toggleApp.details = 'Some details';
    toggleApp.hidden= false;
    renderToggle();
};

//-------------------------------------------------------------------------------------------------------------

const onHide = () => {
    toggleApp.details = '';
    toggleApp.hidden= true;
    renderToggle();
};

//-------------------------------------------------------------------------------------------------------------

const renderToggle = () => {

    const template = (
        <div>
            <h1>{toggleApp.title}</h1>
            <button hidden={toggleApp.hidden === false} onClick={onShow}>Show</button>
            <button hidden={toggleApp.hidden === true} onClick={onHide}>Hide</button>
            <p>{toggleApp.details}</p>
        </div>
    );
    
    ReactDOM.render(template, appRoot);
};

//-------------------------------------------------------------------------------------------------------------


render();
//renderToggle();



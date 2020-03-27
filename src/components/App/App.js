import React, {Component} from 'react';
import './App.css';
import PersonalForm from '../PersonalForm';
import CardForm from '../CardForm';
import Step from '../Step';
import Title from '../Title';

class App extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        cardNumber: '',
    };
    handleClickNextForm = (event) => {
        if(this.isFormCommitable())
            this.setState({step: ++this.state.step}, ()=>{});
    };
    handleTabClick = (value) => {
        if (value)
            this.setState({step: value}, ()=>{});
    };
    handleChangeForm = (arg1, arg2) => {
        this.setState({[arg1]: arg2}, ()=>{});
    };
    isFormCommitable = () => {
        switch (this.state.step) {
            case 1: {
                if (this.state.firstName !== '' && this.state.lastName !== '' && this.state.email !== '' && this.state.email.includes('@'))
                    return true;
                else
                    return false;
            }
            case 2: {
                return this.state.cardNumber.length === 16 ? true : false
            }
            default:
                return false;
        }
    };
    renderForm = () => {
        switch(this.state.step) {
            case 1: {
                return (<PersonalForm firstName={this.state.firstName} lastName={this.state.lastName} email={this.state.email} onChangeForm={this.handleChangeForm} />)
            };
            case 2: {
                return (<CardForm cardNumber={this.state.cardNumber} onChangeForm={this.handleChangeForm} onChangeTimeOver={this.handleChangeTimeOver}/>)
            };
            case 3: {
                return (<p data-test="congratulations">Поздравляем!</p>);
            };
            default:
                return false;
        }
    };

    render() {
        return(
            <div className="container">
                <div className="tab-panel">
                <Step number="1" onClick={this.handleTabClick(1)}>Personal</Step>
                <Step number="2" onClick={this.handleTabClick(2)}>Card</Step>
                <Step number="3" onClick={this.handleTabClick(3)}>Final</Step>
                </div>
                <div className="form-content">
                <Title title={this.state.step}/>
                {this.renderForm()}</div>
                <div className="button-panel">
                <button className="button-next" onClick={this.handleClickNextForm}>ПУНЬК</button></div>
            </div>
            
        );
    }
}

export default App;
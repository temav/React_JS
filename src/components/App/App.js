import React, {Component} from 'react';
import './App.css';
import PersonalForm from '../PersonalForm';
import CardForm from '../CardForm';
import Steps from '../Steps';
import Title from '../Title';

class App extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        cardNumber: '',
    };
    handleClickNextForm = () => {
        this.setState({step: this.state.step+1}, ()=>{});
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
            case 1:
                return (<PersonalForm firstName={this.state.firstName}
                    lastName={this.state.lastName} email={this.state.email}
                    onChangeForm={this.handleChangeForm} />);

            case 2:
                return (<CardForm cardNumber={this.state.cardNumber}
                    onChangeForm={this.handleChangeForm}
                    onChangeTimeOver={this.handleChangeTimeOver}/>)
            case 3:
                return (<p data-test="congratulations">Поздравляем!</p>);
            default:
                return false;
        }
    };
    render() {
        return(
            <div className="container">
                <div className="tab-panel">
                <Steps data_headers={['Personal', 'Card', 'Good luck!']} 
                    step={this.state.step}
                    click_func={this.handleTabClick}/>
                </div>
                <div className="form-content">
                    <Title title_={this.state.step}/>
                    {this.renderForm()}
                </div>
                {this.state.step !== 3 ?
                <div className="button-panel">
                    <button className="button-next"
                        disabled={!this.isFormCommitable()}
                        onClick={this.handleClickNextForm}>
                            Далее
                    </button>
                </div>
                : undefined}
            </div>
            
        );
    }
}

export default App;
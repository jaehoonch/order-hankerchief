import React from 'react';
import { Field, reduxForm } from 'redux-form';

import './OrderForm.css';
import image from '../images/handkerchief_sample.PNG';

class OrderForm extends React.Component {
    renderError({ error, touched }){
        if(touched && error){
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    renderInput = ({ input, placeholder, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error': '' }`;
        return (
            <div className="fd-form__set">
                <div className="fd-form__item">
                    {/* <label className="fd-form__label" for="input-1">{label}</label> */}
                     <input className="fd-form__control" type="text" id="input-1" placeholder={placeholder}/>
                </div>
            </div>
        );
    }

    renderSelectInput = ({label}) => {
        return (
            <div className="fd-form__set">
                <div className="fd-form__item">
                    <label className="fd-form__label" for="">{label}</label>
                    <div className="fd-input-group fd-input-group--after">
                        <input className="" type="text" id="" name="" value="please select" />
                        <span className="fd-input-group__addon fd-input-group__addon--after sap-icon--popup-window sap-icon--l"></span>
                    </div>
                </div>
            </div>

        );
    }

    renderDropdownInput = ({placeholder}) => {
        return (
            <div class="fd-dropdown" width="100%">
                <div class="fd-popover">
                    <div class="fd-popover__control">
                        <button class="fd-dropdown__control fd-button sap-icon--filter "
                        aria-controls="sXq41189" aria-expanded="false" aria-haspopup="true">
                        Select
                        </button>
                    </div>
                    <div class="fd-popover__body fd-popover__body--no-arrow"  aria-hidden="true" id="sXq41189">
                        <nav class="fd-menu">
                            <ul class="fd-menu__list">
                            <li><a href="#" class="fd-menu__item">Option 1</a></li>
                            <li><a href="#" class="fd-menu__item">Option 2</a></li>
                            <li><a href="#" class="fd-menu__item">Option 3</a></li>
                            <li><a href="#" class="fd-menu__item">Option 4</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                </div>
        );
    }

    renderComboboxInput = ({placeholder}) => {
        return (
            <div className="fd-form__set">
                <div className="fd-combobox-input">
                    <div className="fd-popover">
                        <div className="fd-popover__control">
                            <div className="fd-combobox-control" aria-label="Image label" aria-controls="F4GcX348" aria-expanded="false" aria-haspopup="true">
                                <div className="fd-input-group fd-input-group--after">
                                    <input type="text" className="fd-input" id="" placeholder={placeholder} />
                                    <span className="fd-input-group__addon fd-input-group__addon--after fd-input-group__addon--button">
                                        <button className=" fd-button--light sap-icon--navigation-down-arrow"></button>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="fd-popover__body fd-popover__body--no-arrow" aria-hidden="true" id="F4GcX348">
                            <nav className="fd-menu">
                            <ul className="fd-menu__list">
                                <li><a href="#" className="fd-menu__item">White</a></li>
                                <li><a href="#" className="fd-menu__item">Black</a></li>
                                <li><a href="#" className="fd-menu__item">Navy</a></li>
                                <li><a href="#" className="fd-menu__item fd-menu__link">Gray</a></li>
                                <li><a href="#" className="fd-menu__item fd-menu__link">Skyblue</a></li>
                            </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        );

    }

    onSubmit = formValues => {
        this.props.onSubmit(formValues);
    }

    render(){
        return (
            <div>
                <div className="container fd-has-margin-tiny">
                    <img src={image} width="100%"></img>
                    <div className="centered">손수건 문구</div>
                </div>

                <form
                    onSubmit={this.props.handleSubmit(this.onSubmit)}
                    className="ui form error">
                    <Field name="title" component={this.renderComboboxInput} placeholder="연령대" />
                    <Field name="timeline" component={this.renderInput} placeholder="전화번호" />
                    <Field name="timeline" component={this.renderInput} placeholder="닉네임" />
                    <br />
                    <Field name="description" component={this.renderInput} placeholder="손수건 문구" />
                    <Field name="timeline" component={this.renderComboboxInput} placeholder="손수건 색상" />
                    <Field name="timeline" component={this.renderComboboxInput} placeholder="문구 색상" />
                    {/* <Field name="timeline" component={this.renderInput} label="손수건 미리보기:" /> */}
                    <div align="center">
                        <button class="button">제출</button>
                    </div>
                </form>
            </div>

        );
    }
}

const validate = (formValues) => {
    const errors = {};

    if(!formValues.title){
        // only ran if the user did not enter a title
        errors.title = 'You must enter a title';
    }
    if(!formValues.description){
        // only ran if the user did not enter a description
        errors.description = 'You must enter a description';
    }

    return errors;
};

export default reduxForm({
    form: 'orderForm',
    validate
})(OrderForm);
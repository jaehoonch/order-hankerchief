import React from 'react';
import { Field, reduxForm } from 'redux-form';

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

    renderRadioInupt = ({label}) => {
        return (
            <fieldset class="fd-form__set">
                <legend class="fd-form__legend">{label}</legend>
                <div class="fd-form__group">
                    <div class="fd-form__item fd-form__item--inline fd-form__item--check">
                        <label class="fd-form__label" for="pDidh767">
                            <input type="radio" class="fd-form__control" id="pDidh767" name="radio" checked="checked" />
                            20s
                        </label>
                    </div>
                    <div class="fd-form__item fd-form__item--inline fd-form__item--check">
                        <label class="fd-form__label" for="pDidh7618">
                            <input type="radio" class="fd-form__control" id="pDidh7618" name="radio" />
                            30s
                        </label>
                    </div>
                    <div class="fd-form__item fd-form__item--inline fd-form__item--check">
                        <label class="fd-form__label" for="pDidh7619">
                            <input type="radio" class="fd-form__control" id="pDidh7619" name="radio"/>
                            40s
                        </label>
                    </div>
                    <div class="fd-form__item fd-form__item--inline fd-form__item--check">
                        <label class="fd-form__label" for="pDidh7619">
                            <input type="radio" class="fd-form__control" id="pDidh7619" name="radio"/>
                            50s
                        </label>
                    </div>
                    <div class="fd-form__item fd-form__item--inline fd-form__item--check">
                        <label class="fd-form__label" for="pDidh7619">
                            <input type="radio" class="fd-form__control" id="pDidh7619" name="radio"/>
                            60s
                        </label>
                    </div>
                </div>
            </fieldset>
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

    onSubmit = formValues => {
        this.props.onSubmit(formValues);
    }

    render(){
        return (
            <div>
                <img src={image} width="100%"></img>
                <form
                    onSubmit={this.props.handleSubmit(this.onSubmit)}
                    className="ui form error">
                    <Field name="title" component={this.renderRadioInupt} placeholder="Age:" />
                    <Field name="timeline" component={this.renderInput} placeholder="Phone Number :" />
                    <Field name="timeline" component={this.renderInput} placeholder="Nickname :" />
                    <Field name="description" component={this.renderInput} placeholder="Handkerchief Text:" />
                    <Field name="timeline" component={this.renderSelectInput} placeholder="Handkerchief Type :" />
                    <Field name="timeline" component={this.renderSelectInput} placeholder="Text color :" />
                    {/* <Field name="timeline" component={this.renderInput} label="손수건 미리보기:" /> */}
                    <div align="center">
                        <button className="fd-button" width="100%">Submit</button>
                    </div>
                    <button className="fd-button--emphasized" width="200rem">Submit</button>      
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
import React from 'react';
import { Field, reduxForm } from 'redux-form';

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

    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error': '' }`;
        return (
            <div className="fd-form__set">
                <div className="fd-form__item">
                    <label className="fd-form__label" for="input-1">{label}</label>
                     <input className="fd-form__control" type="text" id="input-1" placeholder="Field placeholder text"/>
                </div>
            </div>
        );
    }

    onSubmit = formValues => {
        this.props.onSubmit(formValues);
    }

    render(){
        return (
            <form
                onSubmit={this.props.handleSubmit(this.onSubmit)}
                className="ui form error">
                <Field name="title" component={this.renderInput} label="연령대:" />
                <Field name="description" component={this.renderInput} label="손수건 문구:" />

                <Field name="timeline" component={this.renderInput} label="전화번호:" />
                <Field name="timeline" component={this.renderInput} label="닉네임:" />
                <Field name="timeline" component={this.renderInput} label="손수건 타입:" />
                <Field name="timeline" component={this.renderInput} label="문구 생상:" />
                <Field name="timeline" component={this.renderInput} label="손수건 미리보기:" />
                <div align="right">
                    <button className="fd-button--emphasized" align="right">제출</button>
                </div>
                              
            </form>
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
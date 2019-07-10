import React from 'react';
import { Field, reduxForm, formValueSelector  } from 'redux-form';
import _ from 'lodash';
import { connect } from 'react-redux'

import i18n from "i18next";

import './OrderForm.css';

import navyCheck from '../images/Navy_Check.PNG';
import brownGentleman from '../images/Brown_Gentleman.PNG';
import greenGlass from '../images/Green_Glass.png';
import indegoGlass from '../images/Indego_Glass.png';
import navyDot from '../images/Navy_Dot.png';

import {COLOR_HANDKERCHIEF, FONT_HANDKERCHIEF, TYPE_HANDKERCHIEF, AGES} from '../metadata/handkerchiefConstant';

class OrderForm extends React.Component {
    
    state = {
        isDisabled: true
    }

    isDisabled(){
        return true;
    }
    getColor(){
        switch (this.props.textColor) {
            case "White":   return {color: 'white'};
            case "Black": return {color: "black"};
            case "Navy":  return {color: "navy"};
            case "Gray": return {color: "gray"};
            case "Skyblue": return {color: "skyblue"};
            default: return {color: "white"};
          }
    }
    getImage(){
        console.log("Getting Image...");
        console.log(this.props.handkerchiefColor);
        switch (this.props.handkerchiefColor) {
            case "Navy Dot": return navyDot;
            case "Navy Glasses": return indegoGlass;
            case "Navy Check": return navyCheck;
            case "Brown Gentleman": return brownGentleman;
            case "Green Glasses": return greenGlass;
            default: return navyDot;
          }
    }

    renderError({ error, touched }){
        if(touched && error){
            return (
                <div>
                    <div Style="color:Coral  ;">{error}</div>
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
                     <input {...input} autoComplete="off" className="fd-form__control" type="text" id="input-1" placeholder={placeholder}/>
                     {this.renderError(meta)}
                </div>
            </div>
        );
    }

    onSubmit = formValues => {

        // validate text
        console.log(TYPE_HANDKERCHIEF[COLOR_HANDKERCHIEF['Navy Dot']][FONT_HANDKERCHIEF['Skyblue']])
        console.log(this.props)
        console.log("On Submit");
        console.log(formValues);
        var newFormValues = {'YY1_Age_SDH': formValues['age'], 'YY1_Words_SDH': formValues['text'],
                            'PurchaseOrderByCustomer': formValues['phone'], 'YY1_NickName_SDH': formValues['nickname'],
                            'Material': TYPE_HANDKERCHIEF[COLOR_HANDKERCHIEF[formValues['color']]][FONT_HANDKERCHIEF[formValues['textcolor']]]};
        console.log(newFormValues);
        // console.log(...formValues['age', 'color', 'nickname', 'phone'], material: TYPE_HANDKERCHIEF[COLOR_HANDKERCHIEF['Navy Dot']][FONT_HANDKERCHIEF['Skyblue']])
        this.props.onSubmit(newFormValues, this.state.isDisabled);
    }

    render(){
        const isEnabled = true;
        return (           
            <div>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)}
                    className="ui form error">
                    <Field name="phone" component={this.renderInput} placeholder={i18n.t('phonePlaceholder')}  />
                    <Field name="nickname" component={this.renderInput} placeholder={i18n.t('nicknamePlaceholder')} />
                    <div className="fd-form__set">
                        <div className="fd-form__item">
                            <Field name="age" component="select" placeholder={i18n.t('agePlaceholder')}>
                                    <option value="" hidden>{i18n.t('agePlaceholder')}</option>
                                    <option value="20">{i18n.t('20s')}</option>
                                    <option value="30">{i18n.t('30s')}</option>
                                    <option value="40">{i18n.t('40s')}</option>
                                    <option value="50">{i18n.t('50s')}</option>
                                    <option value="60">{i18n.t('60s')}</option>
                            </Field>
                        </div>
                    </div>
                    
                    <Field name="text" component={this.renderInput} placeholder={i18n.t('textPlaceholder')} />
                    <div className="fd-form__set">
                        <div className="fd-form__item">
                            <Field name="color" component="select" placeholder={i18n.t('colorPlaceholder')}>
                                    <option value="" hidden>{i18n.t('colorPlaceholder')}</option>
                                    <option value="Navy Dot">Navy Dot</option>
                                    <option value="Navy Check">Navy Check</option>
                                    <option value="Navy Glasses">Navy Glasses</option>
                                    <option value="Brown Gentleman">Brown Gentleman</option>
                                    <option value="Green Glasses">Green Glasses</option>
                            </Field>
                        </div>
                    </div>
                    <div className="fd-form__set">
                        <div className="fd-form__item">
                            <Field name="textcolor" component="select" placeholder={i18n.t('textcolorPlaceholder')}>
                                    <option value="" hidden>{i18n.t('textcolorPlaceholder')}</option>
                                    <option value="White">White</option>
                                    <option value="Black">Black</option>
                                    <option value="Navy">Navy</option>
                                    <option value="Gray">Gray</option>
                                    <option value="Skyblue">Skyblue</option>
                            </Field>
                        </div>
                    </div>

                    <label class="fd-form__label" for="">
                        <strong>{i18n.t('previewHandkerchief')}</strong></label>

                    <div className="container">
                        <img src={this.getImage()} width="100%"></img>
                        <h3 className="centered" style={this.getColor()}>{this.props.handkerchiefText}</h3>
                    </div>
                    <div align="center">
                        <button id="submitButton" type="submit" className="button"  >{i18n.t('submit')}</button>
                    </div>
                    
                </form>
                
            </div>

        );
    }
}

const validate = (formValues) => {
    console.log("Validating: ");
    console.log(formValues);
    const errors = {};
    const maxText = 15;

    if(formValues.phone && !/^(0|[0-9][0-9]{10})$/i.test(formValues.phone)){
        errors.phone = i18n.t('phoneFormatError');
    }

    if(formValues.nickname && formValues.nickname.length > maxText){
        errors.nickname = i18n.t('nicknameLengthError');
    }

    if(formValues.text && formValues.text.length > maxText){
        errors.text = i18n.t('textLengthError');
    }

    if(!formValues.phone){
        // only ran if the user did not enter a title
        errors.phone = i18n.t('phoneEmptyError');
    }

    if(!formValues.nickname){
        // only ran if the user did not enter a description
        errors.nickname = i18n.t('nicknameEmptyError');
    }

    if(!formValues.age){
        // only ran if the user did not enter a description
        errors.age = i18n.t('ageEmptyError');
    }
    // if(formValues.phone = value => value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    // ? 'Invalid phone number, must be 10 digits'
    // : undefined)

    if(!formValues.text){
        // only ran if the user did not enter a description
        errors.text = i18n.t('textEmptyError');
    }
    
    if(!formValues.color){
        // only ran if the user did not enter a description
        errors.color = i18n.t('colorEmptyError');
    }
    if(!formValues.textcolor){
        // only ran if the user did not enter a description
        errors.textcolor = i18n.t('textcolorEmptyError');
    }
    return errors;
};

// Decorate with connect to read form values
const selector = formValueSelector('orderForm') // <-- same as form name
OrderForm = connect(state => {
  // can select values individually
  const textColor = selector(state, 'textcolor')
  const handkerchiefText = selector(state, 'text')
  const handkerchiefColor = selector(state, 'color')
 
  return {
    textColor,
    handkerchiefText,
    handkerchiefColor
  }
})(OrderForm)

export default reduxForm({
    form: 'orderForm',
    validate
})(OrderForm);
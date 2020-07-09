import React from 'react';
import Validators from './Validators';

export const validateForm = (Fields) => {
   let result = Fields.map((data) => {
        return validate(data.FieldName,data.FieldValue);
    });
   
    return result;
}


export const validate = (FieldName, FieldValue) => {
    // return {IsValid:  }
    let reg = Validators[FieldName].reg;
    if (reg.test(FieldValue) === false) {
        return {IsValid: 'error', ErrorMessage: reg.error_message}
       
        // setEmail({value: event , IsValid: 'error'});
      } else {
          return {IsValid : 'success', ErrorMessage: null}
        //   setEmail({value: event , IsValid: 'success'});
      }
}
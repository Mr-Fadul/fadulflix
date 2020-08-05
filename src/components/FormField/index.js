import React from 'react';

function FormField({component:Component,label,type,name,value, onChange}){
    return (
        <div>
          <label>
            {label}: 
            <Component
              type={type}
              name={name}
              value={value}
              onChange={onChange}
            />
          </label>
        </div>
    )
}

export default FormField;
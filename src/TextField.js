import{ ErrorMessage, useField} from 'formik'

import React from 'react';
// import { TextField } from '@material-ui/core';
import '../src/TextField.scss'
import { color } from '@mui/system';


const TextField= ({ labelText, ...allOtherProps }) => {
	return (
		<div className='frontpage-input-field' >
			<span>{ labelText }</span>
			<input {...allOtherProps} />
		</div>
	)
}

export default TextField;
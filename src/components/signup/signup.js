import React, {Component} from 'react';
import { Form } from 'semantic-ui-react';

class SignUp extends Component {
  constructor() {
			super();
			
      this.state= {
				role: ''
			}
	}

	handleFirstInput = event => {
		this.setState({
			first: event.target.value
		})
	}

	handleLastInput = event => {
		this.setState({
			last: event.target.value
		})
	}

	handleEmailInput = event => {
		this.setState({
			email: event.target.value
		})
	}

	handlePhoneInput = event => {
		this.setState({
			phone: event.target.value
		})
	}

	handleStreetInput = event => {
		this.setState({
			street: event.target.value
		})
	}

	handleCityInput = event => {
		this.setState({
			city: event.target.value
		})
	}

	handlePassInput = event => {
		this.setState({
			pass: event.target.value
		})
	}
	
	handlePassVeriInput = event => {
		this.setState({
			passVeri: event.target.value
		})
	}

	// Upload to Firebase
	newSignUp = (data) => {
		if ( data.pass !== data.passVeri ) {
			// HANDLE IT SOMEHOW ON UI
		}
		else {
			



		}
	}

  render(){
		return(
			<div>
				<Form>
					<Form.Group widths="equal">
						<Form.Field label="First Name" control="input" value={this.state.first} onChange={this.handleFirstInput}/>
						<Form.Field label="Last Name" control="input" value={this.state.last} onChange={this.handleLastInput}/>
					</Form.Group>

					<Form.Group>
						<Form.Field name="email" 
												label="Email" 
												control="input" 
												type="email"
												validation="isEmail"
												validationError="This is not a valid email"
												required
												value={this.state.email}
												onChange={this.handleEmailInput}
												/>
						<Form.Field label="Phone" control="input" placeholder="(xxx)xxx-xxxx"value={this.state.phone} onChange={this.handlePhoneInput}/>
					</Form.Group>

					<Form.Group>
						<h1>Address</h1>
						<Form.Field label="Street Address" control="input" value={this.state.street} onChange={this.handleStreetInput}/>
						<Form.Field label="City" control="input" value={this.state.city} onChange={this.handleCityInput}/>

					</Form.Group>

					<Form.Group>
						<Form.Field label="Password" control="input" type="password" value={this.state.pass} onChange={this.handlePassInput}/>
						<Form.Field label="Verify password" control="input" type="password" value={this.state.passVeri} onChange={this.handlePassVeriInput}/>
					</Form.Group>

					<Form.Group>
						<Form.Field label="Select your role" control="select">
							<option className="disabled item" value="">--SELECT--</option>
							<option value="Parent">Parent</option>
							<option value="Educator">Educator</option>
						</Form.Field>
					</Form.Group>
					<Form.Field control="button" onClick={this.newSignUp(this.state)} type="submit">
						Sign up
					</Form.Field>
				</Form>
			</div>
		)
	}
}

export default SignUp;

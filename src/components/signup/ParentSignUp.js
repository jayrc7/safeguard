import React from 'react';

class ParentSignUp extends React.Component {
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

					<Form.Field control="button" onClick={this.newSignUp(this.state)} type="submit">
						Sign up
					</Form.Field>
				</Form>
			</div>
		)
	}
}

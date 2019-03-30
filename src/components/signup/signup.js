import React, {Component} from 'react';

import { Form } from 'semantic-ui-react';

// Post to Firebase
const newSignUp = (data) => {

}

class SignUp extends Component {
  constructor() {
			super();
			
      console.log("NAVIGATED a;sdifja;sdoif")
  }

  render(){
		return(
			<div>
				<Form>
					<Form.Group widths="equal">
						<Form.Field label="First Name" control="input" />
						<Form.Field label="Last Name" control="input" />

					</Form.Group>

					<Form.Group>
						<Form.Field label="Email" control="input" type="email"/>
						<Form.Field label="Phone" control="input" placeholder="(xxx)xxx-xxxx"/>
					</Form.Group>

					<Form.Group>
						<Form.Field label="Address" control="input"/>
					</Form.Group>

					<Form.Group>
						<Form.Field label="Password" control="input" type="password"/>
						<Form.Field label="Verify password" control="input" type="password"/>
					</Form.Group>

					<Form.Group>
						<Form.Field label="Select your role" control="select">
							<option className="disabled item" value="">--SELECT--</option>
							<option value="Parent">Parent</option>
							<option value="Educator">Educator</option>
						</Form.Field>
					</Form.Group>
				</Form>
			</div>
		)
	}
}

export default SignUp;
import React, {Component} from 'react';
import { Form } from 'semantic-ui-react';
import cookie from 'react-cookies'
import hood from '../images/ourHood.png'

import firebase from '../../firebase';

const db = firebase.firestore();

db.settings({timestampsInSnapshots: true});

function LocalCommunities(prop) {
	if ( prop.data === undefined ) {
		return <h1> PLACEHOLDER FOR ADDRESS</h1>
	}
	else {

		let tmp1 = '';

		prop.data.forEach((name) => {
			tmp1 = <input type="checkbox" onChange={prop.toggle} value={prop.data[0]}></input>;
		})

		return tmp1	;
	}
}

class SignUp extends Component {
  constructor() {
		super();

		this.state= {

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
		if ( event.target.value.toLowerCase() === "los angeles") {
			db.collection('Communities').doc("los angeles").get().then(doc=> {
				let communities= [];
				doc.data().communities.forEach((comm) => {
					communities.push(comm);
				})

				this.setState({
					localCommunities: communities
				})

			})
		}
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

	handleKidsInput1 = event => {
		this.setState({
			kid1: event.target.value
		})
	}

	handleKidsPassInput1 = event => {
		this.setState({
			kidPass1: event.target.value
		})
	}

	handleKidsInput2 = event => {
		this.setState({
			kid2: event.target.value
		})
	}

	handleKidsPassInput2 = event => {
		this.setState({
			kidPass2: event.target.value
		})
	}

	handleKidsInput3 = event => {
		this.setState({
			kid3: event.target.value
		})
	}

	handleKidsPassInput3 = event => {
		this.setState({
			kidPass3: event.target.value
		})
	}

	onToggle = e => {
		const selectedCommunities = [];
    let index;

    if (e.target.checked) {
      selectedCommunities.push(e.target.value);
    } else {
      index = selectedCommunities.indexOf(e.target.value);
      selectedCommunities.splice(index, 1);
    }

		this.setState({
			selectedCommunities: selectedCommunities
		});

		console.log(this.state.selectedCommunities);
	}

	// Upload to Firebase
	newSignUp = () => {

		console.log("hi");
		if ( this.state.pass !== this.state.passVeri ) {
			// HANDLE IT SOMEHOW ON UI
			console.log("PASSWORDS DO NOT MATCH")
		}
		else {

			let children = [];
			let i = 1;

			while ( true ) {
				if ( this.state['kid'+i] ) {
					db.collection("Kids").doc(this.state['kid'+i]).set({
						pass: this.state['kidPass'+i]
					}).then((ref) => {
						children.push(ref);
					})
					i ++;
				}
				else {
					break;
				}
			}

			let profile = {
				first: this.state.first,
				last: this.state.last,
				email: this.state.email,
				phone: this.state.phone,
				street: this.state.street,
				city: this.state.city,
				children: children,
				communities: this.state.selectedCommunities,
				pass: this.state.pass
			}

			profile["currentCommunity"] = profile.communities[0];

			db.collection("Parents").doc((this.state.first + this.state.last).toLowerCase()).set( profile );

			cookie.save('profile', profile);
			this.props.history.push(`/homepage`)
		}
	}

  render(){
		return(
			<div>
			<img id='image'src={hood} size='small'/>
			<div id='head-back'>
				<h1 id='header'>SafeGuard</h1>
			</div>
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
						<Form.Field label="Child" control="input" value={this.state.kid1} onChange={this.handleKidsInput1}/>
						<Form.Field label="Password" control="input" type="password" value={this.state.kidPass1} onChange={this.handleKidsPassInput1}/>
					</Form.Group>
					<Form.Group>
						<Form.Field label="Child" control="input" value={this.state.kid2} onChange={this.handleKidsInput2}/>
						<Form.Field label="Password" control="input" type="password" value={this.state.kidPass2} onChange={this.handleKidsPassInput2}/>
					</Form.Group>
					<Form.Group>
						<Form.Field label="Child" control="input" value={this.state.kid3} onChange={this.handleKidsInput3}/>
						<Form.Field label="Password" control="input" type="password" value={this.state.kidPass3} onChange={this.handleKidsPassInput3}/>

					</Form.Group>

					<Form.Group>
						<h1>Local Communities</h1>
						<LocalCommunities data={this.state.localCommunities} toggle={this.onToggle}/>

					</Form.Group>

					<Form.Group>
						<Form.Field label="Password" control="input" type="password" value={this.state.pass} onChange={this.handlePassInput}/>
						<Form.Field label="Verify password" control="input" type="password" value={this.state.passVeri} onChange={this.handlePassVeriInput}/>
					</Form.Group>

					{/* <Form.Group>
						<Form.Field label="Select your role" control="select">
							<option className="disabled item" value="">--SELECT--</option>
							<option value="Parent">Parent</option>
							<option value="Educator">Educator</option>
						</Form.Field>
					</Form.Group> */}
					<Form.Field control="button" onClick={this.newSignUp} type="submit">
						Sign up
					</Form.Field>
				</Form>
			</div>
		)
	}
}

export default SignUp;

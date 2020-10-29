import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { ContactCard } from "../component/ContactCard.js";

export const AddContact = () => {
	const { store, actions } = useContext(Context);
	const [full_name, updateFullName] = useState();
	const [email, updateEmail] = useState();
	const [phone, updatePhone] = useState();
	const [address, updateAddress] = useState();

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							name="full_name"
							onChange={e => updateFullName(e.target.value)}
							className="form-control"
							placeholder="Full Name"
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							name="email
                        "
							onChange={e => updateEmail(e.target.value)}
							placeholder="Enter email"
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							name="phone"
							onChange={e => updatePhone(e.target.value)}
							placeholder="Enter phone"
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							name="address"
							onChange={e => updateAddress(e.target.value)}
							placeholder="Enter address"
						/>
					</div>
					<button
						type="button"
						className="btn btn-primary form-control"
						onClick={() => actions.addContact(full_name, email, phone, address)}>
						save
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};

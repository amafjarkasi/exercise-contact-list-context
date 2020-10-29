const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			contacts: []

			//Your data structures, A.K.A Entities
		},
		actions: {
			addContact: async (full_name, email, phone, address) => {
				console.log(full_name, email, phone, address);
				const contact = {
					full_name,
					email,
					agenda_slug: "amafjarkasi",
					phone,
					address
				};
				try {
					const response = await fetch("https://assets.breatheco.de/apis/fake/contact/", {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(contact)
					});
					if (await response.json()) getActions().getContacts();
				} catch (error) {
					console.log(error);
				}
			},
			updateContact: (id, full_name, email, phone, address) => {},
			deleteContact: id => {},
			getContacts: async () => {
				try {
					const response = await fetch("https://assets.breatheco.de/apis/fake/contact/agenda/amafjarkasi");
					const contacts = await response.json();
					setStore({ contacts });
				} catch (error) {
					console.log(error);
				}
			}
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
		}
	};
};

export default getState;

const getState = ({ getStore, setStore }) => {
	return {
		store: {
			contacts: []

			//Your data structures, A.K.A Entities
		},
		actions: {
			addContact: (full_name, email, phone, address) => {},
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

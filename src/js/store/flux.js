const getState = ({ getStore, setStore }) => {
	return {
		store: {
            contacts : []

			//Your data structures, A.K.A Entities
		},
		actions: {
            addContact : (full_name, email, phone, address) => {


            },
            updateContact : (id, full_name, email, phone, address) => {


            },
            deleteContact : (id) => {


            },
            getContacts : () => {
                 contacts = [
                     {
                        "id": "1472",
                        "agenda_slug": "amafjarkasi",
                        "full_name": "Dave Bradley",
                        "email": "dave@gmail.com",
                        "phone": "7864445566",
                        "address": "47568 NW 34ST, 33434 FL, USA",
                        "created_at": "2020-10-26 23:18:58"
                    },
                     {
                        "id": "1473",
                        "agenda_slug": "amafjarkasi",
                        "full_name": "Dave Bradley",
                        "email": "dave@gmail.com",
                        "phone": "7864445566",
                        "address": "47568 NW 34ST, 33434 FL, USA",
                        "created_at": "2020-10-26 23:18:58"
                    },
                     {
                        "id": "1474",
                        "agenda_slug": "amafjarkasi",
                        "full_name": "Dave Bradley",
                        "email": "dave@gmail.com",
                        "phone": "7864445566",
                        "address": "47568 NW 34ST, 33434 FL, USA",
                        "created_at": "2020-10-26 23:18:58"
                    },
                     {
                        "id": "1475",
                        "agenda_slug": "amafjarkasi",
                        "full_name": "Dave Bradley",
                        "email": "dave@gmail.com",
                        "phone": "7864445566",
                        "address": "47568 NW 34ST, 33434 FL, USA",
                        "created_at": "2020-10-26 23:18:58"
                    }
                ];
                setStore(contacts);
            }
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
        }
	};
};

export default getState;

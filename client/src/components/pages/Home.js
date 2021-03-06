import React, { useEffect, useContext } from 'react';
import Contacts from './../contacts/Contacts';
import ContactForm from './../contacts/ContactForm';
import ContactFilter from './../contacts/ContactFilter';
import authContext from './../../context/auth/authContext';

import ContactContext from './../../context/contacts/contactContext';

const Home = () => {
	const { loadUser } = useContext(authContext);

	useEffect(() => {
		loadUser();
		// eslint-disable-next-line
	}, []);

	return (
		<div className='grid-2'>
			<div>
				<ContactForm />
			</div>
			<div>
				<ContactFilter />

				<Contacts />
			</div>
		</div>
	);
};

export default Home;

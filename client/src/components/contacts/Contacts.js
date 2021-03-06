import React, { Fragment, useContext, useEffect } from 'react';
import ContactContext from './../../context/contacts/contactContext';
import ContactItem from './ContactItem';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Spinner from '../layout/Spinner';

const Contacts = () => {
	// intialize context
	const { contacts, filtered, getContacts, loading } =
		useContext(ContactContext);

	useEffect(() => {
		getContacts();
		// eslint-disable-next-line
	}, []);

	if (contacts !== null && contacts.length === 0 && !loading) {
		return <h4>Please add contacts</h4>;
	}
	return (
		<Fragment>
			{contacts !== null && !loading ? (
				<TransitionGroup>
					{filtered !== null
						? filtered.map((contact) => (
								<CSSTransition
									key={contact._id}
									timeout={500}
									classNames='item'
								>
									<ContactItem contact={contact} />
								</CSSTransition>
						  ))
						: contacts.map((contact) => (
								<CSSTransition
									key={contact._id}
									timeout={500}
									classNames='item'
								>
									<ContactItem key={contact._id} contact={contact} />
								</CSSTransition>
						  ))}
				</TransitionGroup>
			) : (
				<Spinner />
			)}
		</Fragment>
	);
};

export default Contacts;

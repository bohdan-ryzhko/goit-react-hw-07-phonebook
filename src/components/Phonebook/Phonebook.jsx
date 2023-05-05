import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { useSelector } from 'react-redux';
import { getFilteredContacts } from 'services/getFilteredContactsByName';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';

export const Phonebook = () => {
	const contactsLists = useSelector(selectContacts);
	const filteredValue = useSelector(state => state.filter);

	const filteredContacts = getFilteredContacts(filteredValue, contactsLists);

	const isLoading = useSelector(selectIsLoading)
	const error = useSelector(selectError);

	return (
		<>
			<h1>Phonebook</h1>
			<ContactForm />
			{
				contactsLists?.length > 0
				&&
				<>
					<h2>Contacts</h2>
					<Filter />
					{isLoading && <p>Is Loading...</p>}
					{error && <p>error</p>}
					<ContactList filteredContacts={filteredContacts} />
				</>
			}
		</>
	)
}
import css from "./ContactList.module.css";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { removeContact } from "redux/operations";

export const ContactList = ({ filteredContacts }) => {
	const dispatch = useDispatch();

	return (
		<>
			{
				filteredContacts.length === 0
				? <p>Contact not found</p>
				: <ul className={css.contacts__list}>
					{filteredContacts.map(({ name, id, number }) =>
						<li className={css.contact} key={id}>
							<span>{name}: {number}</span>
							<button
								id={id}
								onClick={() => dispatch(removeContact(id))}
								className={css.removeBtn}
								type="button">
								Delete
							</button>
						</li>
					)}
					</ul>
			}
		</>
	)
}

ContactList.propTypes = {
	filteredContacts: PropTypes.arrayOf(PropTypes.exact({
		name: PropTypes.string.isRequired,
		number: PropTypes.string.isRequired,
		id: PropTypes.string.isRequired
	}))
}
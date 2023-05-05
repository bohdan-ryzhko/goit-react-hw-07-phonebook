import { Field, Form, Formik } from "formik";
import css from "./ContactForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { initialValues } from "services/initialValues";
import { addContact } from "redux/operations";
import { isRepeatName } from "services/isRepeatName";
import { selectContacts } from "redux/selectors";
import { notificationAlready } from "services/notificationAlready";

export const ContactForm = () => {
	const dispatch = useDispatch();
	const contacts = useSelector(selectContacts);

	const submitForm = (values, { resetForm }) => {
		if (isRepeatName(values.name, contacts)) {
			return notificationAlready(values.name);
		}
		dispatch(addContact(values));
		resetForm();
	}

	return (
		<Formik initialValues={initialValues} onSubmit={submitForm}>
			<Form className={css.form}>
				<label className={css.label} htmlFor="name-id">
					Name
					<Field
						className={css.input}
						id="name-id"
						type="text"
						name="name"
						pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
						title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
						required
					/>
				</label>
				<label className={css.label} htmlFor="number-id">
					<Field
						className={css.input}
						id="number-id"
						type="tel"
						name="number"
						pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
						title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
						required
					/>
				</label>
				<button className={css.btnSubmit} type="submit">Add contact</button>
			</Form>
		</Formik>
	)
}
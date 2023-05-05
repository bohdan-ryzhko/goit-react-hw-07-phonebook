import { useDispatch, useSelector } from "react-redux";
import { filteredByName } from "redux/filterReducer";

export const Filter = () => {
	const dispatch = useDispatch();
	const filteredValue = useSelector(state => state.filter);

	const onChangeInput = event => {
		dispatch(filteredByName(event.target.value));
	}

	return (
		<>
			<p>Find contacts by name</p>
			<input
				value={filteredValue}
				type="text"
				onChange={onChangeInput}
			/>
		</>
	)
}
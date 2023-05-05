import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "redux/operations";
import { Phonebook } from "./Phonebook/Phonebook";
// import { selectError, selectIsLoading } from "redux/selectors";

export const App = () => {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="App">
      <Phonebook />
    </div>
  );
};
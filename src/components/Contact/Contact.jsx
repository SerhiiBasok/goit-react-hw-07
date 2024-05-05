import PropTypes from "prop-types";
import css from "../Contact/contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li className={css.list}>
      {contact.name && <p>Name: {contact.name}</p>}
      {contact.number && <p>Number: {contact.number}</p>}
      <button onClick={handleDelete} className={css.btn}>
        Delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    number: PropTypes.string,
  }).isRequired,
};

export default Contact;

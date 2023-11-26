import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Col, Container, Row } from 'react-bootstrap';

// ========== QUESTIONS ==========

//  1. чи потрібно тут робити селектор для рендеру ContactList
//     якщо витягувати селектор чи іде повторний реквест на бекенд?
//     після запиту повертаєтсья contacts пустий масив

export const App = () => {
  // const contacts = useSelector(state => state.contacts.items);

  return (
    <Container className="pt-5 pb-5">
      <Row>
        <Col>
          <h1>Phonebook</h1>
          <ContactForm />
        </Col>
        {/* {contacts.length > 0 && ( */}
        <Col>
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </Col>
        {/* )} */}
      </Row>
    </Container>
  );
};

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: [],
  // contacts:[
  //   {
  //     id: 1,
  //     name: 'Eduard',
  //     number: '2745343',
  //   },
  //   {
  //     id: 2,
  //     name: 'Alex',
  //     number: '2745344',
  //   },
  // ]
}

const contactsSlice = createSlice({
  // Ім'я слайсу
  name: "contacts",
  // Початковий стан редюсера слайсу
  initialState,
  // Об'єкт редюсерів
  reducers: {  
    addContact(state, action) {
      state.contacts.push(action.payload);
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
    },
  },
});

// Генератори екшен креейторів
export const { addContact, deleteContact } = contactsSlice.actions;
// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;

















// export const rootReducer = (state, action) => {
//   switch (action.type) {
//     case "contacts/addContact":
//       return {
//         ...state,
//         contacts: [...state.contacts, action.payload],
//       };
//     case "contacts/deleteContact":
//       return {
//         ...state,
//         contacts: state.contacts.filter(
//           contact => contact.id != action.payload),
//       };
//     default:
//       return state;
//   } 
// }

// export const addContact = (payload) => {
//   return {
//     type: "contacts/addContact",
//     payload,
//   }
// }

// export const deleteContact = (payload) => {
//   return {
//     type: "contacts/removeContact",
//     payload,
//   }
// }
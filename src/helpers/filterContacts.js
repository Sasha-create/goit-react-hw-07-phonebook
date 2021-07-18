function getFilteredContacts(contacts, filter) {
  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase().trim()),
  );
}

export default getFilteredContacts;

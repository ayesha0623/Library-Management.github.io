// Sample book data

const books = [
    { title: 'Book 1', author: 'Author 1', subject: 'Subject 1', date: '2023-01-01' },
    { title: 'Book 2', author: 'Author 2', subject: 'Subject 2', date: '2023-02-01' },
    { title: 'Book 3', author: 'Author 1', subject: 'Subject 1', date: '2023-03-01' },
    { title: 'Book 4', author: 'Author 2', subject: 'Subject 2', date: '2023-04-01' },
    { title: 'Book 5', author: 'Author 3', subject: 'Subject 3', date: '2023-05-01' },
    { title: 'Book 6', author: 'Author 1', subject: 'Subject 1', date: '2023-06-01' },
    { title: 'Book 7', author: 'Author 3', subject: 'Subject 2', date: '2023-07-01' },
    { title: 'Book 8', author: 'Author 2', subject: 'Subject 3', date: '2023-08-01' },
    { title: 'Book 9', author: 'Author 1', subject: 'Subject 1', date: '2023-09-01' },
    { title: 'Book 10', author: 'Author 2', subject: 'Subject 2', date: '2023-10-01' },
    // Add more books as needed
  ];
  
  // Function to render the book list
  function renderBookList(books) {
    const bookListContainer = document.getElementById('book-list');
    bookListContainer.innerHTML = '';
  
    for (let book of books) {
      const bookElement = document.createElement('div');
      bookElement.classList.add('book');
  
      bookElement.innerHTML = `
        <h3>${book.title}</h3>
        <p>Author: ${book.author}</p>
        <p>Subject: ${book.subject}</p>
        <p>Publish Date: ${book.date}</p>
      `;
  
      bookListContainer.appendChild(bookElement);
    }
  }
  
  // Function to filter books based on criteria
  function filterBooks() {
    const titleFilter = document.getElementById('title-filter').value.toLowerCase();
    const authorFilter = document.getElementById('author-filter').value.toLowerCase();
    const subjectFilter = document.getElementById('subject-filter').value.toLowerCase();
    const dateFilter = document.getElementById('date-filter').value;
  
    const filteredBooks = books.filter(book =>
      book.title.toLowerCase().includes(titleFilter) &&
      book.author.toLowerCase().includes(authorFilter) &&
      book.subject.toLowerCase().includes(subjectFilter) &&
      book.date.includes(dateFilter)
    );
  
    renderBookList(filteredBooks);
  }
  
  // Event listeners for filter inputs
  document.getElementById('title-filter').addEventListener('input', filterBooks);
  document.getElementById('author-filter').addEventListener('input', filterBooks);
  document.getElementById('subject-filter').addEventListener('input', filterBooks);
  document.getElementById('date-filter').addEventListener('input', filterBooks);
  
  // Initial rendering of book list
  renderBookList(books);
  
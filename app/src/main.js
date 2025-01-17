import { fetchBooks } from './fetchBooks.js';
import { renderBookCard } from './bookCard.js';

const bookItemsContainer = document.getElementById('book-items'); 
const bookSearchForm = document.getElementById('book-search-form');
const searchQueryInput = document.getElementById('search-query');

// RENDERING MY BOOKS
async function renderBooks(query = '') {
  try {
    const books = await fetchBooks(query);
    console.log('Fetched books:', books); 

    bookItemsContainer.innerHTML = ''; // load form 

    if (books.length > 0) {
      books.forEach((book) => {
        const bookCard = renderBookCard(book);
        bookItemsContainer.appendChild(bookCard);
      });
    } else {
      const noResultsMessage = document.createElement('p');
      noResultsMessage.textContent = 'No books found. Try another search.';
      bookItemsContainer.appendChild(noResultsMessage);
    }
  } catch (error) {
    console.error('Error fetching or rendering books:', error);
  }
}


renderBooks();

// MAKING SURE MY SEARCH BUTTON WORKS
bookSearchForm.addEventListener('submit', function (event) {
  event.preventDefault(); 
  const query = searchQueryInput.value.trim(); 
  if (query) {
    renderBooks(query); 
  }
});

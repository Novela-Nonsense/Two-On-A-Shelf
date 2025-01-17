export function renderBookCard(book) {
 
  const card = document.createElement('div'); // card container to hold books 
  card.className = 'book-card';

 
  const img = document.createElement('img');  // holds cover pic 
  img.src = book.coverUrl;  
  img.alt = `${book.title} cover`;


  const title = document.createElement('h2');  // holds title
  title.textContent = book.title;


  const author = document.createElement('p');  // holds author
  author.textContent = `by ${book.author}`;

  
  card.appendChild(img); 
  card.appendChild(title);
  card.appendChild(author);// add everything on to the card

  return card; 
}

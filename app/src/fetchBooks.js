export async function fetchBooks(query = '') {
  
  const url = query
    ? `https://openlibrary.org/search.json?q=${query}&limit=30` // search for books matching "query" aka genre 
    : 'https://openlibrary.org/subjects/love.json?limit=30'; // default- load books about love 

  try {
    const response = await fetch(url);
    const data = await response.json();
    
    console.log('Fetched data:', data); 

    
    const books = data.works ? data.works : data.docs;

    if (!books) {
      throw new Error('No books found in data');
    }
// GETTING TITLE/ AUTHOR IF NO AUTHOR WRITE UNKNOWN AUTHOR/ GET COVER ID FOR SPECIFIC BOOKS
    const formattedBooks = books.map((work) => {
      const title = work.title; 
      const author = work.authors ? work.authors[0]?.name : 'Unknown Author';
      const coverId = work.cover_id || work.cover_i;
// IF NO BOOK COVER DONT SHOW ANYTHING
      const coverUrl = coverId
        ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
        : null; 

      return {
        title: title,
        author: author,
        coverUrl: coverUrl,
      };
    });

    return formattedBooks; //  SHOW ALL THE INFORMATION 

  } catch (error) {
    console.error('Error fetching books:', error);
    return [];
  }
}

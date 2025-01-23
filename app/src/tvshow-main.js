import './style.css';

import { getShows } from './tvshow-fetch.js'
import { renderingShowData, hideDets } from './tvshow-dom.js'

document.querySelector('#book-items').addEventListener("click", async (e)=>{
   const bookTitle = e.target.closest('.book-card').dataset.bookTitle;
   const showData = await getShows(bookTitle);
   console.log(showData)
   renderingShowData(showData)
})

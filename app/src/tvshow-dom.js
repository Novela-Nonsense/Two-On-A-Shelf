
const dialog = document.getElementById('dia');

 export const renderingShowData = (wholeData) => {
   dialog.innerHTML = '';
   dialog.showModal();
   
   if (wholeData === null) {
    dialog.innerHTML = '<p>Sorry, no show exists for the selected title.</p>'
    return;
   }
   
   const list = document.createElement('ul')
   
   const img = document.createElement('img')
   img.alt = `An old cover of ${wholeData.show}`
   img.src = wholeData.coverUrl; 
   img.id = "image"
   
   const title = document.createElement('h1')
   title.textContent = `Title: ${wholeData.title}`;
   
   const rates = document.createElement('p')
   rates.textContent = `Rating: ${wholeData.rate}`
   
   const languages = document.createElement('p')
   languages.textContent = `Language: ${wholeData.language}`
   
   const start = document.createElement('p')
   start.textContent = `Start Date: ${wholeData.started}`; 
   
   const end = document.createElement('p')
   end.textContent = `Start Date: ${wholeData.ending}`;
   
   const sum = document.createElement('p')
   sum.innerHTML = `Summary: ${wholeData.summary}`;

   
   list.append (title) 
   list.append (rates) 
   list.append (languages) 
   list.append (start) 
   list.append (end) 
   list.append (sum)
   
   dialog.append(img)
   dialog.append(list);
   
  };
  
  
  export const hideDets = (e) =>{
  dialog.close()
  }

export const getShows = (bookTitle) => {
  console.log(bookTitle)
  let searching = bookTitle.split(" ").join('+')
  console.log(searching)
  return fetch (`https://api.tvmaze.com/search/shows?q=${searching}`)
  .then((response) => {
    if (!response.ok){
      throw Error('Failed to get any shows')
    } 
    return (response.json())
  })
  .then((data)=> {
    console.log(data)

    if (data.length === 0) {
      return null;
    }
    const info = {}
    
    const works = data[0].show
    
    info.title = works.name 
    info.language = works.language
    info.started = works.premiered
    info.ending = works.ended 
    info.rate = works.rating.average 
    info.summary = works.summary
    info.channel = works.network?.name 
    info.coverUrl = works.image?.medium
    
    return (info)
  })
  .catch((error) => {
    console.warn(error.message)
    return null
  });
};

getShows('Wuthering Heights').then((shows) => console.log(shows));
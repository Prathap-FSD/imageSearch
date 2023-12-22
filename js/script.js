let searchBtn = document.getElementById('searchBtn')

searchBtn.addEventListener('click',()=>{
  let searchInput = document.getElementById('searchInput').value
  let url = "https://dog.ceo/api/breeds/image/random/"+searchInput
  fetch(url)
  .then(e => e.json())
  .then((data)=>{
    let imgOutput = document.getElementById('outPutPlace')
   let images = data.message    
   imgOutput.innerHTML = images.map((element,ind) => `
        <div class="col-sm-6 col-lg-4 col-xl-3 mb-3 mb-sm-3">
        <div class="card">
          <img src="${element}" alt="${element}">
          <div class="card-body">
            <p class="card-text">Image : ${ind+1}</p>
          </div>
        </div>
      </div>`
      ).join(' ')
  })
  .catch(error => console.log(error))

})
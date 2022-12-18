const url = "https://aws.random.cat/meow";
const btn = document.querySelector('.btn');
const img = document.querySelector('.img');

async function feachHeadler() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    img.src = data.file;
  } catch (error)  {
    console.log(error);
  }
}

btn.addEventListener('click', () => {
  let isLoaded = img.complete;

  if(isLoaded) {
    
    feachHeadler();
  }

})

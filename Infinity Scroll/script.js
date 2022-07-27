 const imageContainer = document.getElementById('image-container')
 const loader = document.getElementById('loader');

 let photosArray = [];


const count = 10;
const apiKey ='CSFRBsPJSODklH9KFjfSsksT9ZeIenE6KXs8dBCetwo';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get Photos from unsplash API

async function getPhotos(){
    try{
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        
    }catch (error) {
        // 
    }
}

getPhotos()
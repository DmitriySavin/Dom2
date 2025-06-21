const images = [
    {
     url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
     alt: 'White and Black Long Fur Cat',
    },
    {
     url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
     alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
     url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
     alt: 'Group of Horses Running',
    },
];

const refsGallery = document.querySelector('#gallery');

for (const item of images) {
    const createLi = document.createElement('li');
    refsGallery.appendChild(createLi);
    const createImg = document.createElement('img');
    createLi.appendChild(createImg)
    createImg.src = item.url;
    createImg.alt = item.alt;
    createImg.style.width = '500px';
    createImg.style.height = '300px';
    // console.log(createLi)
}









// for (const item of images) {
//     return `${item.src = url}`
// }



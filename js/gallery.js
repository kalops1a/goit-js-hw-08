const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];


const galleryContainer = document.querySelector(`ul.gallery`);
galleryContainer.style.display = `flex`;
galleryContainer.style.flexWrap = `wrap`;
galleryContainer.style.gap = `24px`;    
galleryContainer.style.listStyleType = `none`;




const galleryHTML = images.map(({ preview, original, description }) => {
    
    return `<li class="gallery-item" style="width: calc((100% - 2 * 24px) / 3); height: auto;">
  <a class="gallery-link" href="${original}">
    <img
      class="gallery-image"
      src="${preview}"
      data-source="${original}"
      alt="${description} "
      style="width: 100%; height: 100%; object-fit: cover;"
    />
  </a>
</li>`}).join(``);

galleryContainer.innerHTML = galleryHTML;

const modal = document.createElement('div');
modal.classList.add('modal');
document.body.appendChild(modal);







galleryContainer.addEventListener(`click`, getImage);

function getImage(event) {
event.preventDefault();
event.stopPropagation();

    if (event.target.nodeName !== "IMG") { return; }
    else
    {
        const imageObject = images.find(image => event.target.dataset.source === image.original);
        if (imageObject)
        {
            const instance = basicLightbox.create(`
    <div class="modal">
    
        <img class="original-image" src ="${imageObject.original}" >
    </div>
`)
            
            instance.show();
            
          
          instance.element().querySelector('.original-image').addEventListener('click', function() {
        instance.close();
          })
            
        };
    }
    
}

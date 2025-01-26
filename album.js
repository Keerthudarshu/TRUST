document.addEventListener('DOMContentLoaded', async function() {
    const response = await fetch('/api/images');
    const images = await response.json();

    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = `/${image.imagePath}`;
        imgElement.alt = image.title;
        imgElement.title = image.title;

        const categoryElement = document.getElementById(image.category).querySelector('.images');
        categoryElement.appendChild(imgElement);
    });
});
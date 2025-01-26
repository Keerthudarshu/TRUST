document.getElementById('imageUploadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const title = document.getElementById('title').value;
    const category = document.getElementById('category').value;
    const image = document.getElementById('image').files[0];
    
    if (image) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imgElement = document.createElement('img');
            imgElement.src = e.target.result;
            imgElement.alt = title;
            imgElement.title = title;
            
            const categoryElement = document.getElementById(category);
            if (categoryElement) {
                categoryElement.appendChild(imgElement);
            } else {
                const newCategoryElement = document.createElement('div');
                newCategoryElement.id = category;
                newCategoryElement.appendChild(imgElement);
                document.body.appendChild(newCategoryElement);
            }
        };
        reader.readAsDataURL(image);
    }
});
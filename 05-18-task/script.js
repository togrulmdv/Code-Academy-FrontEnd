const dropzone = document.getElementById('dropzone');
const fileList = document.getElementById('fileList');
const fileInput = document.getElementById('fileInput');
const form = document.getElementById('form');
const submit = document.getElementById('submit');
const addedFiles = [];

dropzone.addEventListener('click', () => {
    fileInput.click();
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const files = fileInput.files;
    handleFiles(files);
    fileInput.value = '';
});

function handleFiles(files) {
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const extension = getFileExtension(file.name).toLowerCase();

        if (extension === 'jpeg' || extension === 'jpg' || extension === 'png') {
            if (addedFiles.includes(file.name)) {
                continue; 
            }

            const fileItem = createFileItem(file);
            fileList.appendChild(fileItem);
            addedFiles.push(file.name);
        }
    }
}

function createFileItem(file) {
    const fileItem = document.createElement('div');
    fileItem.classList.add('file-item');

    const fileDetails = createFileDetails(file);
    const removeBtn = createRemoveButton(fileItem, file.name);

    const image = document.createElement('img');
    image.classList.add('file-image');
    image.src = URL.createObjectURL(file);

    fileItem.appendChild(image);
    fileItem.appendChild(fileDetails);
    fileItem.appendChild(removeBtn);
    return fileItem;
}

function createFileDetails(file) {
    const fileDetails = document.createElement('div');
    fileDetails.classList.add('file-details');
    
    const fileProps= document.createElement('div');
    fileProps.classList.add('file-props')
    
    const fileName = document.createElement('div');
    fileName.classList.add('file-name');
    fileName.textContent = file.name;

    const fileType = document.createElement('div');
    fileType.textContent = `${file.type}•`;
    
    const fileSize = document.createElement('div');
    fileSize.textContent = `${formatFileSize(file.size)}•`;
    
    const fileExtension = document.createElement('div');
    fileExtension.textContent = getFileExtension(file.name);
    
    fileProps.appendChild(fileType);
    fileProps.appendChild(fileSize);
    fileProps.appendChild(fileExtension);
    fileDetails.appendChild(fileName);
    fileDetails.appendChild(fileProps);

    return fileDetails;
}

function createRemoveButton(fileItem, fileName) {
    const removeBtn = document.createElement('span');
    removeBtn.classList.add('remove-btn');
    removeBtn.innerHTML = '<i class="fa-solid fa-xmark" style="color: #ff0000;"></i>';
    removeBtn.addEventListener('click', () => {
        fileItem.remove();
        const index = addedFiles.indexOf(fileName);
        if (index > -1) {
            addedFiles.splice(index, 1); 
        }
    });
    return removeBtn;
}

function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

function getFileExtension(filename) {
    return filename.slice((filename.lastIndexOf('.') - 1 >>> 0) + 2);
}


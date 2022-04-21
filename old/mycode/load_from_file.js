function loadIfcModelFile(event) {
    const ifcfile = event.target.files[0]
    console.log(ifcfile)
    window.webIfcAPI.IFC.loadIfc(ifcfile, true);
}

function loadFromFileClick() {
    inputElement.click();
}


// Get html elements
const fileOpenButton = document.getElementById('file_open_button');

fileOpenButton.onclick = loadFromFileClick;

const inputElement = document.createElement('input');
inputElement.setAttribute('type', 'file');
inputElement.classList.add('hidden');
inputElement.addEventListener('change', loadIfcModelFile, false);
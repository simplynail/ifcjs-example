function loadIfcModelFile(event) {
    const ifcfile = event.target.files[0];
    const model = window.webIfcAPI.IFC.loadIfc(ifcfile, true);
    window.webIfcAPI.shadowDropper.renderShadow(model.modelID);
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
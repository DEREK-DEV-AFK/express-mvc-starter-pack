const fs = require('fs');
const path = require('path');

function createStructure() {
    const rootPath = process.cwd(); // get current working directory

    const folderStructure = [
        { name: 'controllers'},
        { name: 'models'},
        { name: 'services'},
        { name: 'routes'},
        { name: 'config'},
        { name: 'utils'},
    ]

    folderStructure.forEach(folder => {
        const folderPath = path.join(rootPath, folder.name);

        if(!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath);
            console.log(`Created folder : ${folderPath}`);
        } else {
            throw new Error(`Folder already exist : ${folderPath}`);
        }
    });
}
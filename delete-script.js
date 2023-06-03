const fs = require('fs');
const path = require('path');
const folderData = require('./data.json');

function deleteGenerated() {
    
    folderData.forEach(folder => {
        
        console.log(folder.name);
    })
}

deleteGenerated()
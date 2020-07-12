const fs = require('fs');
const path = require('path');

let result = { 'files': [], 'dirs': [] };
const pathRoot = path.join(__dirname, '../');

function getFileNames(pathDir) {
    result.dirs.push(pathDir.replace(/\\/g, '/'));
    return fs.promises.readdir(path.join(pathRoot, pathDir)).then(names => {
        let promises = [];
        names.forEach(name => {
            const pathFile = path.join(pathDir, name);
            promises.push(
                fs.promises.stat(path.join(pathRoot, pathFile)).then(stat => {
                    return { 'pathFile': pathFile, 'isDir': stat.isDirectory() }
                })
            );
        });
        return Promise.all(promises).then(values => {
            promises = [];
            values.forEach(v => {
                if (v.isDir) {
                    promises.push(getFileNames(v.pathFile));
                } else {
                    result.files.push(v.pathFile.replace(/\\/g, '/'));
                }
            });
            return Promise.all(promises);
        });
    });
}

if (process.argv.length >= 3) {
    const baseDir = process.argv[2].replace(/^[\\/]+|[\\/]+$/g, '');
    console.log(baseDir)
    getFileNames(baseDir).then(() => {
        console.log(result)
    })
}
else {
    console.error('No folder argument');
}

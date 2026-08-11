import fs from 'node:fs';

export const checkFile = (filePath: string): boolean =>{
    return fs.existsSync(filePath);
}

export const createFile = (filePath: string): void => {
    if(!checkFile(filePath)){
        fs.writeFileSync(filePath, "[]");
    }
}
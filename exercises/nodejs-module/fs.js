/* import fs, { readFileSync } from "fs"
 */
import fs from "fs/promises";

/* fs.readFile("./test.txt", "utf-8", (err, data) => {
    if(err) throw err;
    console.log(data);
}); */

/* const data = fs.readFileSync("./test.txt", "utf-8");
console.log(data) */

/* fs.readFile("./test.txt", "utf-8")
.then((data)=> console.log(data))
.catch((err) => console.log(err)); */

const readFile = async() => {
    try{
        const data = await fs.readFile("./test.txt", "utf-8");
        console.log(data);
    }catch(error){
        console.log(error);
    }
};

const writeFile = async()=> {
    try{
        await fs.writeFile("./test.txt", "HELLO WORLD");
        console.log("File written to");
    }catch(error){
        console.log(error)
    }
}

const appendFile = async()=>{
    try{
        await fs.appendFile("./test.txt", "\n extra text");
        console.log("File appended");
    }catch(error){
        console.log(error);
    }
};

writeFile();
appendFile();
appendFile();
readFile();
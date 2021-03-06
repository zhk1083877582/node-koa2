/*      
        1. fs.stat  检测是文件还是目录  
        2. fs.mkdir  创建目录 
        3. fs.writeFile  创建写入文件  
        4. fs.appendFile 追加文件 
        5.fs.readFile 读取文件  
        6.fs.readdir 读取目录  
        7.fs.rename 重命名  
        8. fs.rmdir  删除目录  
        9. fs.unlink 删除文件  
        10. fs.createReadStream 从文件流中读取数据  
        11. fs.createWriteStream  写入文件 
        12. 管道流
*/
var fs = require('fs');

var readStream = fs.createReadStream('1.txt');

var str = '';//保存数据
var count = '';//读取次数

readStream.on('data',(chunk)=>{
    str += chunk;
    count++
})

//读取结束
readStream.on('end',()=>{
    console.log(str);
    console.log(count);
})

//读取失败
readStream.on('error',(err)=>{
    console.log(err);
})

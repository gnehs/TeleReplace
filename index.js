const fs = require('fs') //檔案系統
const replaceWords = require(__dirname + '/data.js').getTData //翻譯替換檔

console.log(Date())
console.log('gnehs/TeleReplace')
console.log('https://github.com/gnehs/TeleReplace')

fs.readdir(__dirname + "/source/", function(err, files) { //讀取資料夾
    if (err) throw err;
    for (i in files) {
        let fileUrl = __dirname + '/source/' + files[i] //檔案位置
        let fileName = files[i] //檔案名稱

        fs.readFile(fileUrl, (err, fileData) => {
            if (err) throw err;
            saveOutput(replaceWord(fileData), fileName) //存檔
        })

    }
})

function replaceWord(data) {
    for (i in replaceWords) {
        data = data.toString().replace(new RegExp(replaceWords[i][0], "g"), replaceWords[i][1]) //取代字詞
    }
    return data;
}

function saveOutput(fileData, fileName) { //存檔
    fs.writeFile(__dirname + '/output/' + fileName, fileData, (err) => { if (err) throw err })
    console.log(' - 已轉換 ' + fileName)
}
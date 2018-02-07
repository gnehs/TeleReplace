const fs = require('fs') //檔案系統
const data = require(__dirname + '/data.js') //翻譯替換檔
const words2replace = data.getTData

fs.readdir(__dirname + "/source/", function(err, files) { //讀取資料夾
    for (var i = 0; i < files.length; i++) {

        let fileUrl = __dirname + '/source/' + files[i] //檔案位置
        let fileName = files[i] //檔案名稱

        fs.readFile(fileUrl, (err, fileData) => {
            if (err) throw err;
            for (var i = 0; i < words2replace.length; i++) {
                fileData = ('' + fileData).replace(new RegExp(words2replace[i][0], "g"), words2replace[i][1]) //取代字詞
            }
            saveOutput(fileData, fileName) //存檔
        })

    }
})

function saveOutput(fileData, fileName) { //存檔
    fs.writeFile(__dirname + '/output/' + fileName, fileData, (err) => {
        if (err) throw err;
        console.log(' - 已轉換 ' + fileName)
    })
}
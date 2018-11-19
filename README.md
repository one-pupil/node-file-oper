# library

> node环境操作文件小工具

# 引入

```
npm install node-file-oper -save

const fileOper = require('node-file-oper');
```

# 调用

| 方法        | 参数   |  说明  |
| --------   | -----: | :----:  |
| readFloder | filePath, callback | filePath：文件夹路径；callback：对文件操作的回调函数       |
| write      | dir, name, data | dir：写入到哪个文件夹下；name：文件名称；data：写入文件的数据   |
| del        | dir, type |  dir：删除文件路径；type：要删除的文件类型  |

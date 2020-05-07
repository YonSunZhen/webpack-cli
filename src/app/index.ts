import * as $ from 'jquery';
// import * as xlsx from 'xlsx';
// eslint-disable-next-line no-unused-vars
// import { WritingOptions } from 'xlsx';
// import * as fs from 'fs';

$('#btn').bind('click', function() {
  const url = 'http://localhost:8082/jsonToExcel';
  const data = {
    'json': [
      {
        'other': 2
      },
      {
        'name': 'a',
        'test':  'test'
      },
      {
        'id': 2,
        'name': 'b',
        'remark': 'b'
      },
    ],
    'clumn': [
      {
        'key': 'name',
        'value': 'name1'
      },
      {
        'key': 'id',
        'value': 'id1'
      }
    ],
    'option': 'only-clumn1'
  };
  $.ajax({
    url: url,
    type: 'POST',
    data: data,
    success: function(data) {
      // bufferData为二进制流数据 非buffer类型
      const bufferData = data.data;
      if(typeof ArrayBuffer !== 'undefined') {
        // 以字节为单位 开辟一块内存区域 用于放文件
        const buf = new ArrayBuffer(bufferData.length);
        // ArrayBuffer无法直接操作 创建Uint8Array用于操作这块内存
        const view = new Uint8Array(buf);
        for (var i = 0; i != bufferData.length; i++) {
          // 往内存里面放数据 charCodeAt返回指定位置的字符的 Unicode 编码
          view[i] = bufferData.charCodeAt(i) & 0xFF;
        }
        const blob = new Blob([buf], {type: 'application/octet-stream'});
        const objectURL = window.URL.createObjectURL(blob);
        let a = document.createElement('a');
        a.setAttribute('download', '表格.xlsx');
        a.href = objectURL;
        // 模拟点击下载表格
        a.click();
        setTimeout(function () { //延时释放
          window.URL.revokeObjectURL(objectURL); //用URL.revokeObjectURL()来释放这个object URL
        }, 100);
      }
    }
  });
});



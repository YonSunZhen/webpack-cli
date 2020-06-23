import * as $ from 'jquery';
// import * as xlsx from 'xlsx';
// eslint-disable-next-line no-unused-vars
// import { WritingOptions } from 'xlsx';
// import * as fs from 'fs';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

$('#btn').bind('click', function() {

  const client = new ApolloClient({
    uri: 'http://localhost:4000'
  });
  client.query({
    query: gql`
      query TodoApp {
        books {
          title
        }
      }
    `,
  })
    .then(data => console.log(data))
    .catch(error => console.error(error));


  // const url = 'http://localhost:8082/json2xlsx';
  // const data = {
  //   'json': [
  //     {
  //       'other': 1
  //     },
  //     {
  //       'name': 'name2',
  //       'test':  'test2'
  //     },
  //     {
  //       'id': 3,
  //       'name': 'name3',
  //       'remark': 'remark3'
  //     },
  //   ],
  //   // 'url': {
  //   //   'targetURL': 'http://localhost:8086/projects_status',
  //   //   'key': 'data',
  //   //   'accessToken': 'f79cd5b0-5387-49c4-a9eb-249bb045c909',
  //   // },
  //   'clumn': [
  //     {
  //       'key': 'projectId',
  //       'value': '项目id'
  //     },
  //     {
  //       'key': 'projectPL',
  //       'value': '项目PL'
  //     },
  //     {
  //       'key': 'other',
  //       'value': '其他1'
  //     },
  //   ],
  //   'option': 'only-clumn'
  // };
  // $.ajax({
  //   url: url,
  //   type: 'POST',
  //   data: data,
  //   success: function(data) {
  //     console.log(data);
  //     // bufferData为二进制流数据 非buffer类型
  //     const bufferData = data.data;
  //     if(typeof ArrayBuffer !== 'undefined') {
  //       // 以字节为单位 开辟一块内存区域 用于放文件
  //       const buf = new ArrayBuffer(bufferData.length);
  //       // ArrayBuffer无法直接操作 创建Uint8Array用于操作这块内存
  //       const view = new Uint8Array(buf);
  //       for (var i = 0; i != bufferData.length; i++) {
  //         // 往内存里面放数据 charCodeAt返回指定位置的字符的 Unicode 编码
  //         view[i] = bufferData.charCodeAt(i) & 0xFF;
  //       }
  //       const blob = new Blob([buf], {type: 'application/octet-stream'});
  //       const objectURL = window.URL.createObjectURL(blob);
  //       let a = document.createElement('a');
  //       a.setAttribute('download', '表格.xlsx');
  //       a.href = objectURL;
  //       // 模拟点击下载表格
  //       a.click();
  //       setTimeout(function () { //延时释放
  //         window.URL.revokeObjectURL(objectURL); //用URL.revokeObjectURL()来释放这个object URL
  //       }, 100);
  //     }
  //   }
  // });
});



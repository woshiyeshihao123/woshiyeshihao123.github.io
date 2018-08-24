---
layout: post
title:  "Chrome下禁止文本框输入中文"
categories: Esao
tags:  html JavaScript css
author: Esao
---

* content
{:toc}

## 目的：

项目开发中发现chorme浏览器中  要是想给type=text的input 禁止输入中文,只能使用正则进行replace 无法实现成像ie中ime-mode:disable那样不能够输入汉字,由于项目只允许用jQuery，于是想尝试一些其他的办法





## 具体思路：


### 首先在网上寻找了相关资料

一般都采用了如下类似的办法

demo:


<input type="text" style="ime-mode:disabled" onkeyup="this.value=this.value.replace(/[\u4e00-\u9fa5]/g,'')"/>



```
<input type="text" style="ime-mode:disabled" onkeyup="this.value=this.value.replace(/[\u4e00-\u9fa5]/g,'')"/>
```


其中  `style="ime-mode:disabled"` 禁止了在该文本框中使用输入法 但在IE/Firefox下可以实现,Chrome下并不兼容,这行在Chrome下不起作用




`onkeyup="this.value=this.value.replace(/[\u4e00-\u9fa5]/g,'')"` //\u4e00-\u9fa5为中文的编码范围   当 __键盘松开__ 时若文本框内的值为中文时则 __替换__ 为空 也就是删除

然而这并不是禁止,在上面的demo中输入中文时可以明显感觉到文本的闪烁,也就是说 文本是机会存入input中,甚至我的一位小伙伴用单身20年的手速 在完成输入的中文 __替换__ 删除前完成了提交....

### 尝试

[点击查看demo](http://woshiyeshihao123.github.io/demo-lib/Chorme-input/)
因为在Chrome下无法禁止输入法,所以利用了password传值(password只支持数字，字母，特殊字符)
这只是临时办法,而且只有少部分情况下适用，手机端也不支持,有更好的办法请各位指正.


```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.slim.min.js"></script>
  <title>Document</title>
</head>
<body>
  <input class="noselect" id="username" style="background: none; padding: 4px; border: 1px solid rgb(0, 0, 0); border-image: none; left: 178px; color: transparent; position: relative;" ondragenter="return false" onpaste="return false" type="password" autocomplete="off">
  <input id="result" style="border: none"></input> 

  <script>
    $(function(){  

$('#username').bind('input propertychange', function() {  
    $('#result').val($(this).val());  
});  
  
})  

  </script>
</body>
</html>
```


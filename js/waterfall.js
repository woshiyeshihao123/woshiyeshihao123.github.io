/* jshint asi:true */
//先等图片都加载完成
//再执行布局函数

/**
 * 执行主函数
 * @param  {[type]} function( [description]
 * @return {[type]}           [description]
 */
(function() {

  /**
     * 内容JSON
     */
  var demoContent = [
    {
      demo_link: 'http://www.14how.com/demo-lib/quorrajs-index/',
      img_link: 'https://i.loli.net/2018/06/12/5b1f6df8e8648.png',
      code_link: 'https://github.com/woshiyeshihao123/demo-lib/blob/master/small-tasks/quorrajs-index/',
      title: '仿quorrajs动态头部NAV',
      core_tech: 'jQuery BootStrap CSS3',
      description: '还原了一个简单的 CSS3 动画效果，当页面滚动到指定距离时，header 区的背景色由透明变为蓝色,并且缩小高度。仿照了网站 <a href ="https://quorrajs.org/">https://quorrajs.org/</a> 的 Header 区动画效果。'
    }, {
      demo_link: 'http://www.14how.com/demo-lib/Chorme-input/',
      img_link: 'https://i.loli.net/2018/06/19/5b28904160ba3.png',
      code_link: 'https://github.com/woshiyeshihao123/demo-lib/tree/master/small-tasks/Chorme-input',
      title: '在chrome下禁止input中文输入',
      core_tech: 'jQuery CSS',
      description: '临时办法,只在Chrome下斟酌使用,利用 password 只支持数字，字母，特殊字符的特性，使 Chrome 兼容实现 禁用输入法 禁止中文输入 的功能。'
    }, {
      demo_link: 'http://www.14how.com/demo-lib/adrock/',
      img_link: 'https://i.loli.net/2018/09/18/5ba0c457ccec7.png',
      code_link: 'https://github.com/woshiyeshihao123/demo-lib/tree/master/small-tasks',
      title: 'lottie',
      core_tech: 'AE lottie html js css',
      description: 'lottie实现AE动画自动生成SVG动画代码'
    }, {
      demo_link: 'http://www.14how.com/demo-lib/localstore/',
      img_link: 'https://i.loli.net/2018/09/18/5ba0c2ad084bb.png',
      code_link: 'https://github.com/woshiyeshihao123/woshiyeshihao123.github.io/tree/master/demo-lib/localstore',
      title: '本地增删改,仿数据库应用',
      core_tech: 'JavaScript LocalStorage fis3 Sass',
      description: '本地缓存实现的仿数据库下的增删改'
    },{
      demo_link: 'http://www.14how.com/demo-lib/ghost-button-css3',
      img_link: 'http://7q5cdt.com1.z0.glb.clouddn.com/DemoGhost-Button.png',
      code_link: 'https://github.com/woshiyeshihao123/demo-lib/tree/master/small-tasks/ghost-button-css3',
      title: 'Ghost Button 幽灵按钮',
      core_tech: 'CSS3',
      description: '使用 CSS3 中的旋转、缩放、过渡、动画等效果，制作出很酷的按钮效果。'
    }, {
      demo_link: 'http://gaohaoyang.github.io/shadow-demo-css3',
      img_link: 'http://7q5cdt.com1.z0.glb.clouddn.com/Demoshadow.png',
      code_link: 'https://github.com/Gaohaoyang/shadow-demo-css3',
      title: 'CSS3 阴影特效',
      core_tech: 'CSS3',
      description: 'CSS3 中的阴影、旋转等效果，制作出曲边阴影和翘边阴影。'
    }, {
      demo_link: 'http://gaohaoyang.github.io/test/bootstrap-zhihu/',
      img_link: 'http://7q5cdt.com1.z0.glb.clouddn.com/teach-girlfriend-html-CopyZhihu.jpg',
      code_link: 'https://github.com/Gaohaoyang/test/tree/master/bootstrap-zhihu',
      title: '仿知乎页面',
      core_tech: 'HTML BootStrap',
      description: '使用BootStrap仿照知乎做了一个静态页面。'
    }
  ];

  contentInit(demoContent) //内容初始化
  waitImgsLoad() //等待图片加载，并执行布局初始化
}());

/**
 * 内容初始化
 * @return {[type]} [description]
 */
function contentInit(content) {
  // var htmlArr = [];
  // for (var i = 0; i < content.length; i++) {
  //     htmlArr.push('<div class="grid-item">')
  //     htmlArr.push('<a class="a-img" href="'+content[i].demo_link+'">')
  //     htmlArr.push('<img src="'+content[i].img_link+'">')
  //     htmlArr.push('</a>')
  //     htmlArr.push('<h3 class="demo-title">')
  //     htmlArr.push('<a href="'+content[i].demo_link+'">'+content[i].title+'</a>')
  //     htmlArr.push('</h3>')
  //     htmlArr.push('<p>主要技术：'+content[i].core_tech+'</p>')
  //     htmlArr.push('<p>'+content[i].description)
  //     htmlArr.push('<a href="'+content[i].code_link+'">源代码 <i class="fa fa-code" aria-hidden="true"></i></a>')
  //     htmlArr.push('</p>')
  //     htmlArr.push('</div>')
  // }
  // var htmlStr = htmlArr.join('')
  var htmlStr = ''
  for (var i = 0; i < content.length; i++) {
    htmlStr += '<div class="grid-item">' + '   <a class="a-img" href="' + content[i].demo_link + '">' + '       <img src="' + content[i].img_link + '">' + '   </a>' + '   <h3 class="demo-title">' + '       <a href="' + content[i].demo_link + '">' + content[i].title + '</a>' + '   </h3>' + '   <p>主要技术：' + content[i].core_tech + '</p>' + '   <p>' + content[i].description + '       <a href="' + content[i].code_link + '">源代码 <i class="fa fa-code" aria-hidden="true"></i></a>' + '   </p>' + '</div>'
  }
  var grid = document.querySelector('.grid')
  grid.insertAdjacentHTML('afterbegin', htmlStr)
}

/**
 * 等待图片加载
 * @return {[type]} [description]
 */
function waitImgsLoad() {
  var imgs = document.querySelectorAll('.grid img')
  var totalImgs = imgs.length
  var count = 0
  //console.log(imgs)
  for (var i = 0; i < totalImgs; i++) {
    if (imgs[i].complete) {
      //console.log('complete');
      count++
    } else {
      imgs[i].onload = function() {
        // alert('onload')
        count++
        //console.log('onload' + count)
        if (count == totalImgs) {
          //console.log('onload---bbbbbbbb')
          initGrid()
        }
      }
    }
  }
  if (count == totalImgs) {
    //console.log('---bbbbbbbb')
    initGrid()
  }
}

/**
 * 初始化栅格布局
 * @return {[type]} [description]
 */
function initGrid() {
  var msnry = new Masonry('.grid', {
    // options
    itemSelector: '.grid-item',
    columnWidth: 250,
    isFitWidth: true,
    gutter: 20
  })
}

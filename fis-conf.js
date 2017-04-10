//解析less插件
//npm install -g fis-parser-less
//npm install -g fis3-postpackager-loader
//域
//// 测试环境
//fis.set('domain_test', ''); //开发环境静态资源
//// 预发布环境
//fis.set('domain_pre', 'http://preuc.fdc.com.cn');
//// 线上环境
//fis.set('domain_build', 'http://pic.huakr.com/resources');
//
//// 定义不同域的url
//var domain_url = {
//  test:{
//      "csdn_url":""
//  },
//  pre:{
//      "csdn_url":"http://preblog.csdn.net"
//  },
//  build:{
//      "csdn_url":"http://blog.csdn.net"
//  }
//}
//
//fis.match('*.{js,css,png,gif,jpg}', {
//  useHash: false,
//  release: '/static/$0'
//}).match('::package', {
//  // 对 CSS 进行图片合并
//  spriter: fis.plugin('csssprites')
//}).match('*.css', {
//  useSprite: true,
//  optimizer: fis.plugin('clean-css')
//})
//// js进行压缩，并使用hash值
// .match(/\/js\/(\w+).js/, {
//   useHash: false,
//   id:"$1",
//   optimizer: fis.plugin('uglify-js', {
//      mangle: {
//          except: 'exports, module, require, define' //不需要混淆的关键字
//      },
//      compress: {
//          drop_console: true //自动删除console
//      }
//  })
//})
//.match('images/*.png', {
//  optimizer: fis.plugin('png-compressor', {
//      type: 'pngquant'
//  })
//})
//.match('/css/(*.{png,gif})', {
//  //发布到/images/sprite/xxx目录下
//  release: '/images/sprite/$1$2'
//});
//
//// 测试开发
//fis.media('test')
//  .match("*", {
//      domain: "${domain_test}",
//  })
//  .match('*.html', {
//      parser: fis.plugin('html-replaceurl', {
//          newWords:domain_url.test
//      })
//  });
//
//// 预发布
//fis.media('pre')
//  .match("*", {
//      domain: "${domain_pre}",
//  })
//  .match('*.html', {
//      parser: fis.plugin('html-replaceurl', {
//          newWords:domain_url.pre,//需要替换的key
//          removeComments:true, //是否删除注释
//          minifier:true //是否压缩
//      })
//  });

// 线上
//fis.media('build')
//  .match('*', {
//      domain: "${domain_build}"
//  })
//  .match('*.html', {
//      parser: fis.plugin('html-replaceurl', {
//          newWords:domain_url.build
//      })
//  });
//  
//解析less文件
fis.match('*.less', {
  parser: fis.plugin('less'),  
  rExt: '.css'
});

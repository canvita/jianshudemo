import React, { PureComponent } from 'react';
import { ArticleWrapper, AcTitle, Article } from './style'

const p = `<p><b>给自己打个广告，我从事Java行业接近10年了，目前在某互联网公司做Java架构师，现在免费分享Java架构文章，技术经验，感兴趣的朋友可以关注我，文末有彩蛋。</b></p><p>1. 声明</p><p>本项目只做学习研究之用，不得用于商业用途！</p><p>若资金允许，请点击</p><p>[https://www.jetbrains.com/idea/buy/] 购买正版，谢谢合作！</p><p>学生凭学生证可免费申请</p><p>[https://sales.jetbrains.com/hc/zh-cn/articles/207154369-学生授权申请方式] 正版授权！</p><p>创业公司可5折购买</p><p>[https://www.jetbrains.com/shop/eform/startup] 正版授权！</p><p>2.新电脑，新开始，可惜是windows电脑。。</p><p>最近配置了新电脑，可惜不是自己心心念好久的mac。因此配置各种开发环境啥的都浪费了我一天时间。特别是功能强大的IDEA编译器，其破#解#方式好多都已经过时不能用，而我作死下载的还是最高版本2019.1.3，在网上费了老大劲搜索到的各种破解码以及破解方式，最好的一个方式是破解到了明年三月份，所谓的永久版的在我这里都行不通。。。</p><p>但是吧，我这个人有部分强迫症，总想一劳永逸，毕竟不想今后工作中的某个早晨美滋滋的吃完早餐坐在工位上准备开始撸代码时发现自己的IDEA无法正常使用，还需要各种破解等等，想想都可怕，因此下午开会学习结束之后继续寻找，终于功夫不负懒汉，解决方法找到啦。</p><p>3.操作步骤</p><p>提醒：</p><p>一定通过IDE菜单编辑javaagent参数，别瞎TM在bin目录下改！！！</p><p>一定通过IDE菜单编辑javaagent参数，别瞎TM在bin目录下改！！！</p><p>一定通过IDE菜单编辑javaagent参数，别瞎TM在bin目录下改！！！</p><p>一定通过IDE菜单编辑javaagent参数，别瞎TM在bin目录下改！！！</p><p>一定通过IDE菜单编辑javaagent参数，别瞎TM在bin目录下改！！！</p><p>一定通过IDE菜单编辑javaagent参数，别瞎TM在bin目录下改！！！</p><p>一定通过IDE菜单编辑javaagent参数，别瞎TM在bin目录下改！！！</p><p>一定通过IDE菜单编辑javaagent参数，别瞎TM在bin目录下改！！！</p><p>一定通过IDE菜单编辑javaagent参数，别瞎TM在bin目录下改！！！</p><p>一定通过IDE菜单编辑javaagent参数，别瞎TM在bin目录下改！！！</p><p>网上搜到好多教程都是在bin目录下改的，但是这都是不安全的，并且会造成更多的问题，IDEA非常强大，已经给你开放非常多的通道，按照我接下来步骤就可以。</p><p>先下载压缩包解压后得到jetbrains-agent.jar，把它放到你认为合适的文件夹内。这个没必要放到bin里，你想放哪里放哪里，但是路径不要有中文哈，切记切记！</p><p>下载页面：链接：https://pan.baidu.com/s/1_R2iWKnw5do8Qad_6x6hrw 提取码：s4d0*失效的话关注微信公众号“伊尹先生”，留言更新。微信公众号输入 IDEA，自动回复你链接</p><p>启动你的IDE，如果上来就需要注册，选择：试用（Evaluate for free）进入IDE</p><p>点击你要注册的IDE菜单：“Configure”-&gt; “Edit Custom VM Options …”</p><p>如果提示是否要创建文件，请点"Yes"。</p><p>操作如下图：</p><div `
export default class Detail extends PureComponent {
  render() {
    return (
      <ArticleWrapper>
        <AcTitle>
          Intellij IDEA 2019.1.3独门破解，亲测可用,永久版
        </AcTitle>
        <Article>
          <span dangerouslySetInnerHTML={{__html: p}}></span>
        </Article>
      </ArticleWrapper>
    )
  }
}
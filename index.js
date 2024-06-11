
<html lang="zh-CN"><head><meta charset="UTF-8"><style>.nodata  main {width:1000px;margin: auto;}</style></head><body class="nodata " style=""><div class="main_father clearfix d-flex justify-content-center " style="height:100%;"> <div class="container clearfix " id="mainBox"><main><div class="blog-content-box">
<div class="article-header-box">
<div class="article-header">
<div class="article-title-box">
<h1 class="title-article" id="articleContentId">(A卷,100分)- Linux发行版的数量（Java & JS & Python）</h1>
</div>
</div>
</div>
<div id="blogHuaweiyunAdvert"></div>

        <div id="article_content" class="article_content clearfix">
        <link rel="stylesheet" href="https://csdnimg.cn/release/blogv2/dist/mdeditor/css/editerView/kdoc_html_views-1a98987dfd.css">
        <link rel="stylesheet" href="https://csdnimg.cn/release/blogv2/dist/mdeditor/css/editerView/ck_htmledit_views-044f2cf1dc.css">
                <div id="content_views" class="htmledit_views">
                    <h4 id="main-toc">题目描述</h4> 
<p>Linux操作系统有多个发行版&#xff0c;distrowatch.com提供了各个发行版的资料。这些发行版互相存在关联&#xff0c;例如Ubuntu基于Debian开发&#xff0c;而Mint又基于Ubuntu开发&#xff0c;那么我们认为Mint同Debian也存在关联。</p> 
<p>发行版集是一个或多个相关存在关联的操作系统发行版&#xff0c;集合内不包含没有关联的发行版。</p> 
<p>给你一个 n * n 的矩阵 isConnected&#xff0c;其中 isConnected[i][j] &#61; 1 表示第 i 个发行版和第 j 个发行版直接关联&#xff0c;而 isConnected[i][j] &#61; 0 表示二者不直接相连。</p> 
<p>返回最大的发行版集中发行版的数量。</p> 
<p></p> 
<h4 id="%E8%BE%93%E5%85%A5%E6%8F%8F%E8%BF%B0">输入描述</h4> 
<p>第一行输入发行版的总数量N&#xff0c;</p> 
<p>之后每行表示各发行版间是否直接相关</p> 
<p></p> 
<h4 id="%E8%BE%93%E5%87%BA%E6%8F%8F%E8%BF%B0">输出描述</h4> 
<p>输出最大的发行版集中发行版的数量</p> 
<p></p> 
<h4>备注</h4> 
<p>1 ≤ N ≤ 200</p> 
<p></p> 
<h4 id="%E7%94%A8%E4%BE%8B">用例</h4> 
<table border="1" cellpadding="1" cellspacing="1" style="width:500px;"><tbody><tr><td style="width:86px;">输入</td><td style="width:412px;">4<br /> 1 1 0 0<br /> 1 1 1 0<br /> 0 1 1 0<br /> 0 0 0 1</td></tr><tr><td style="width:86px;">输出</td><td style="width:412px;">3</td></tr><tr><td style="width:86px;">说明</td><td style="width:412px;"> <p>Debian(1)和Unbuntu(2)相关</p> <p>Mint(3)和Ubuntu(2)相关&#xff0c;</p> <p>EeulerOS(4)和另外三个都不相关&#xff0c;</p> <p>所以存在两个发行版集&#xff0c;发行版集中发行版的数量分别是3和1&#xff0c;所以输出3。</p> </td></tr></tbody></table> 
<p></p> 
<h4 id="%E9%A2%98%E7%9B%AE%E8%A7%A3%E6%9E%90">题目解析</h4> 
<p>本题可以利用并查集求解&#xff0c;本题要求的就是各个连通分量的节点数&#xff0c;并输出最大的连通分量的节点数。</p> 
<p>如果大家对并查集还不了解&#xff0c;可以看下这个入门视频&#xff1a;</p> 
<p><a href="https://www.bilibili.com/video/BV1VM4y1K7FV/?spm_id_from&#61;333.337.search-card.all.click&amp;vd_source&#61;b5105a99a0628dd906e154263279c518" rel="nofollow" title="《算法训练营》进阶篇 01 并查集_哔哩哔哩_bilibili">《算法训练营》进阶篇 01 并查集_哔哩哔哩_bilibili</a></p> 
<p>学会并查集数据结构后&#xff0c;本题的解题难度就很小了&#xff0c;本题题解可以参考</p> 
<p><a href="https://blog.csdn.net/qfc_128220/article/details/127588130" title="华为OD机试 - 发广播_伏城之外的博客-CSDN博客_信道分配 华为od">华为OD机试 - 发广播_伏城之外的博客-CSDN博客_信道分配 华为od</a></p> 
<p></p> 
<p>解决完本题&#xff0c;可以继续尝试2022.Q4题库的其他并查集算法题&#xff1a;</p> 
<p><a href="https://fcqian.blog.csdn.net/article/details/128385756" rel="nofollow" title="华为OD机试 - 计算快递主站点_伏城之外的博客-CSDN博客">华为OD机试 - 计算快递主站点_伏城之外的博客-CSDN博客</a></p> 
<p><a href="https://fcqian.blog.csdn.net/article/details/128263014" rel="nofollow" title="华为OD机试 - 开心消消乐_伏城之外的博客-CSDN博客">华为OD机试 - 开心消消乐_伏城之外的博客-CSDN博客</a></p> 
<p><a href="https://fcqian.blog.csdn.net/article/details/128228285" rel="nofollow" title="华为OD机试 - 机器人_伏城之外的博客-CSDN博客">华为OD机试 - 机器人_伏城之外的博客-CSDN博客</a></p> 
<p><a href="https://fcqian.blog.csdn.net/article/details/128228170" rel="nofollow" title="华为OD机试 - 快递业务站_伏城之外的博客-CSDN博客">华为OD机试 - 快递业务站_伏城之外的博客-CSDN博客</a></p> 
<p></p> 
<h4 id="%E7%AE%97%E6%B3%95%E6%BA%90%E7%A0%81">JavaScript算法源码</h4> 
<pre><code class="language-javascript">/* JavaScript Node ACM模式 控制台输入获取 */
const readline &#61; require(&#34;readline&#34;);

const rl &#61; readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines &#61; [];
let n;
rl.on(&#34;line&#34;, (line) &#61;&gt; {
  lines.push(line);

  if (lines.length &#61;&#61;&#61; 1) {
    n &#61; lines[0] - 0;
  }

  if (n &amp;&amp; lines.length &#61;&#61;&#61; n &#43; 1) {
    lines.shift();
    const matrix &#61; lines.map((line) &#61;&gt; line.split(&#34; &#34;).map(Number));
    console.log(getResult(matrix, n));
    lines.length &#61; 0;
  }
});

function getResult(matrix, n) {
  const ufs &#61; new UnionFindSet(n);

  for (let i &#61; 0; i &lt; n; i&#43;&#43;) {
    for (let j &#61; i &#43; 1; j &lt; n; j&#43;&#43;) { // 这里j从i&#43;1开始&#xff0c;是因为矩阵是对称的
      if (matrix[i][j] &#61;&#61;&#61; 1) {
        ufs.union(i, j);
      }
    }
  }

  // connected对象的属性代表某个连通分量的顶级父节点&#xff0c;属性值代表该连通分量下的节点个数
  const connected &#61; {};

  for (let i &#61; 0; i &lt; n; i&#43;&#43;) {
    const fa &#61; ufs.find(ufs.fa[i]);
    connected[fa] ? connected[fa]&#43;&#43; : (connected[fa] &#61; 1);
  }

  // 返回最大节点数
  return Math.max.apply(null, Object.values(connected));
}

// 并查集实现
class UnionFindSet {
  constructor(n) {
    this.fa &#61; new Array(n).fill(0).map((_, i) &#61;&gt; i);
    this.count &#61; n;
  }

  find(x) {
    if (x !&#61;&#61; this.fa[x]) {
      return (this.fa[x] &#61; this.find(this.fa[x]));
    }
    return x;
  }

  union(x, y) {
    const x_fa &#61; this.find(x);
    const y_fa &#61; this.find(y);

    if (x_fa !&#61;&#61; y_fa) {
      this.fa[y_fa] &#61; x_fa;
      this.count--;
    }
  }
}
</code></pre> 
<p></p> 
<h4>Java算法源码</h4> 
<pre><code class="language-java">import java.util.HashMap;
import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner sc &#61; new Scanner(System.in);

    int n &#61; sc.nextInt();

    int[][] matrix &#61; new int[n][n];

    for (int i &#61; 0; i &lt; n; i&#43;&#43;) {
      for (int j &#61; 0; j &lt; n; j&#43;&#43;) {
        matrix[i][j] &#61; sc.nextInt();
      }
    }

    System.out.println(getResult(matrix, n));
  }

  public static int getResult(int[][] matrix, int n) {
    UnionFindSet ufs &#61; new UnionFindSet(n);

    for (int i &#61; 0; i &lt; n; i&#43;&#43;) {
      for (int j &#61; i &#43; 1; j &lt; n; j&#43;&#43;) { // j从i&#43;1开始&#xff0c;是因为矩阵是对称的
        if (matrix[i][j] &#61;&#61; 1) {
          ufs.union(i, j);
        }
      }
    }

    // connected的key代表某个连通分量的顶级父节点&#xff0c;value代表该连通分量下的节点个数
    HashMap&lt;Integer, Integer&gt; connected &#61; new HashMap&lt;&gt;();

    for (int i &#61; 0; i &lt; n; i&#43;&#43;) {
      Integer fa &#61; ufs.find(ufs.fa[i]);
      connected.put(fa, connected.getOrDefault(fa, 0) &#43; 1);
    }

    // 返回最大节点数
    return connected.values().stream().max((a, b) -&gt; a - b).get();
  }
}

// 并查集实现
class UnionFindSet {
  int[] fa;
  int count;

  public UnionFindSet(int n) {
    this.count &#61; n;
    this.fa &#61; new int[n];
    for (int i &#61; 0; i &lt; n; i&#43;&#43;) this.fa[i] &#61; i;
  }

  public int find(int x) {
    if (x !&#61; this.fa[x]) {
      return (this.fa[x] &#61; this.find(this.fa[x]));
    }
    return x;
  }

  public void union(int x, int y) {
    int x_fa &#61; this.find(x);
    int y_fa &#61; this.find(y);

    if (x_fa !&#61; y_fa) {
      this.fa[y_fa] &#61; x_fa;
      this.count--;
    }
  }
}
</code></pre> 
<p></p> 
<h4>Python算法源码</h4> 
<pre><code class="language-python"># 并查集
class UnionFindSet:
    def __init__(self, n):
        self.fa &#61; [idx for idx in range(n)]
        self.count &#61; n

    def find(self, x):
        if x !&#61; self.fa[x]:
            self.fa[x] &#61; self.find(self.fa[x])
            return self.fa[x]
        return x

    def union(self, x, y):
        x_fa &#61; self.find(x)
        y_fa &#61; self.find(y)

        if x_fa !&#61; y_fa:
            self.fa[y_fa] &#61; x_fa
            self.count -&#61; 1


n &#61; int(input())

matrix &#61; []
for i in range(n):
    matrix.append(list(map(int, input().split())))

ufs &#61; UnionFindSet(n)

for i in range(n):
    for j in range(i &#43; 1, n):  # 这里j从i&#43;1开始&#xff0c;是因为矩阵是对称的
        if matrix[i][j] &#61;&#61; 1:
            ufs.union(i, j)

# connected字典的属性代表某个连通分量的顶级父节点&#xff0c;属性值代表该连通分量下的节点个数
connected &#61; {}

for i in range(n):
    fa &#61; ufs.find(ufs.fa[i])
    connected[fa] &#61; connected.get(fa, 0) &#43; 1

# 返回最大节点数
print(max(connected.values()))
</code></pre>
                </div>
        </div>
        <div id="treeSkill"></div>
        <div id="blogExtensionBox" style="width:400px;margin:auto;margin-top:12px" class="blog-extension-box"></div>
    <script>
  $(function() {
    setTimeout(function () {
      var mathcodeList = document.querySelectorAll('.htmledit_views img.mathcode');
      if (mathcodeList.length > 0) {
        for (let i = 0; i < mathcodeList.length; i++) {
          if (mathcodeList[i].naturalWidth === 0 || mathcodeList[i].naturalHeight === 0) {
            var alt = mathcodeList[i].alt;
            alt = '\\(' + alt + '\\)';
            var curSpan = $('<span class="img-codecogs"></span>');
            curSpan.text(alt);
            $(mathcodeList[i]).before(curSpan);
            $(mathcodeList[i]).remove();
          }
        }
        MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
      }
    }, 1000)
  });
</script>
</div></html>


(function () {
  //面包屑导航
  function Rename(name) {
    if (/^\d+$/.test(name)) return `第 ${name} 课`;
    const dictionary = {
      fc: "辅助材料",
      g1: "同喜",
      g2: "同修",
      g3: "同德",
      u0: "入门篇",
      u1: "第一单元 信仰篇",
      u2: "第二单元 人生篇",
      xfzdrstd: "第 12-13-14 课",
      u3: "第三单元 社会篇",
      u4: "第四单元 利他篇",
      u5: "第五单元 佛传篇",
      u6: "第六单元 皈依篇",
      s1: "第一进度",
      s2: "第二进度",
      s3: "第三进度",
      s4: "第四进度",
      dcd: "菩提道次第略论",
      "01-dqjc": "01-道前基础",
      "02-yjszs": "02-依止善知识",
      "03-lsxf": "03-略示修法",
      "04-xmrs": "04-于有暇身劝受心要",
      "05-nswc": "05-念死无常与思恶趣苦",
      "06-gysb": "06-皈依三宝",
      "07-sxyg": "07-深信业果",
      "08-cllh": "08-出离轮回",
      "09-yptx": "09-愿菩提心",
      "10-xptx": "10-行菩提心",
      rxl: "入菩萨行论",
      "00-xl": "序论",
      "01-ly": "第一品 利益 ",
      "02-ch": "第二品 忏悔",
      "03-sc": "第三品 受持",
      "04-bfy": "第四品 不放逸",
      "05-hzz": "第五品 护正知",
      "06-ar": "第六品 安忍",
      "07-jj": "第七品 精进",
      "08-jl": "第八品 静虑",
      "09-zh": "第九品 智慧",
      "10-hx": "第十品 回向",
    };
    return dictionary[name.toLowerCase()] || name;
  }

  function generateBreadcrumbsFromURL(url) {
    const pathArray = url.split("/").filter((part) => part.length > 0);
    const breadcrumbs = [{ name: "首页", url: "/" }];
    let currentPath = "";

    pathArray.forEach((part, index) => {
      currentPath += `/${part}`;
      breadcrumbs.push({
        name: Rename(decodeURIComponent(part)),
        url: index === pathArray.length - 1 ? null : currentPath,
      });
    });

    return breadcrumbs;
  }

  // 使用当前页面的URL生成面包屑
  const currentURL = window.location.pathname;
  const dynamicBreadcrumbs = generateBreadcrumbsFromURL(currentURL);

  // 获取面包屑导航的容器
  const breadcrumbContainer = document.getElementById("breadcrumb");

  // 清空现有的内容
  breadcrumbContainer.innerHTML = "";

  // 动态生成面包屑导航
  dynamicBreadcrumbs.forEach((crumb, index) => {
    const li = document.createElement("li");
    if (crumb.url) {
      const a = document.createElement("a");
      a.href = crumb.url;
      a.textContent = crumb.name;
      li.appendChild(a);
    } else {
      li.textContent = crumb.name;
    }
    breadcrumbContainer.appendChild(li);
  });
})();

(function () {
  //返回顶部
  document.getElementById("backToTop").addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
})();

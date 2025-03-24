function Rename(name) {
  const dictionary = {
    g1: "同喜",
    g2: "同修",
    g3: "同德",
    u1: "第一单元",
    u2: "第二单元",
    u3: "第三单元",
    u4: "第四单元",
    u5: "第五单元",
    u6: "第六单元",
    u7: "第七单元",
    s1: "第一进度",
    s2: "第二进度",
    s3: "第三进度",
    s4: "第四进度",
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

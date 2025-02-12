function generateBreadcrumbsFromURL(url) {
    const pathArray = url.split("/").filter((part) => part.length > 0);
    const breadcrumbs = [
      { name: "首页", url: "/" },
    ];
    let currentPath = "";

    pathArray.forEach((part, index) => {
      currentPath += `/${part}`;
      breadcrumbs.push({
        name: decodeURIComponent(part.charAt(0).toUpperCase() + part.slice(1)),
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
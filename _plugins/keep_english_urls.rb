module Jekyll
  class KeepEnglishUrls < Jekyll::Generator
    priority :high

    def generate(site)
      puts "=== 插件开始运行 ==="  # 这行应该无论如何都能输出
      Jekyll.logger.info "EnglishPathGenerator: 正在处理 #{site.pages.size} 个页面"

      site.pages.each do |page|
        puts "处理文件: #{page.path}"  # 检查每个文件是否被遍历
        next if page.data["permalink"]

        original_path = page.path
        # 移除中文部分，保留字母、数字和斜杠
        english_path = original_path.gsub(/[\u4e00-\u9fa5]/, '')
        # 处理特定中文部分
        english_path = english_path.gsub('初级', '')
                          .gsub('单元', '')
                          .gsub('学员手册', '')
                          .gsub('第', '')
        english_path = "/#{english_path}/".gsub(/\/+/, '/')

        puts "原始路径: #{original_path} → 转换后: #{english_path}"  # 关键调试信息
        page.url = english_path
      end
    end
  end
end

import os, re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IGNORE_DIRS = {'.git', '_site', '_layouts', '_以往课程', '.vscode'}

# Convention: symlink name must be "target_name_chinese_annotation"
PATTERN = re.compile(r'^(.+)_[\u4e00-\u9fff].+$')

print('=' * 60)
print(' 软链接验证报告')
print('=' * 60)

ok, fail, skip = 0, 0, 0

for root, dirs, files in os.walk(ROOT):
    # Skip ignored dirs
    dirs[:] = [d for d in dirs if d not in IGNORE_DIRS and not d.startswith('.')]

    for name in dirs:
        full = os.path.join(root, name)
        if not os.path.islink(full):
            continue

        target = os.readlink(full)
        rel_dir = os.path.relpath(root, ROOT)
        rel_full = os.path.join(rel_dir, name) if rel_dir != '.' else name

        # Check: target exists?
        target_full = os.path.join(root, target) if not target.startswith('/') else target
        target_exists = os.path.exists(target_full)

        # Check: naming convention "target-chinese"
        m = PATTERN.match(name)
        convention_ok = m is not None and m.group(1) == target

        status = '√' if (convention_ok and target_exists) else '×'
        if status == '√':
            ok += 1
        else:
            fail += 1

        print(f'  {status}  {rel_full}')
        print(f'      目标: {target}')
        if not target_exists:
            print(f'      警告: 目标不存在')
        if not convention_ok:
            if m:
                print(f'      命名: 期望前缀 "{target}"，实际 "{m.group(1)}"')
            else:
                print(f'      命名: 缺少中文注释（格式: 原目录名-中文）')

print('=' * 60)
print(f'  通过: {ok}  |  违规: {fail}  |  总计: {ok+fail}')
print('=' * 60)

import base64
import re
import os

cwd = "/Users/anuroopraju/Documents/PQRS"

with open(f"{cwd}/style.css", "r", encoding="utf-8") as f:
    css_content = f.read()

with open(f"{cwd}/main.js", "r", encoding="utf-8") as f:
    js_content = f.read()

with open(f"{cwd}/index.html", "r", encoding="utf-8") as f:
    html_content = f.read()

# Replace <link rel="stylesheet" href="style.css"> with <style>...</style>
html_content = html_content.replace(
    '<link rel="stylesheet" href="style.css">',
    f'<style>\n{css_content}\n</style>'
)

# Replace <script src="main.js"></script> with <script>...</script>
html_content = html_content.replace(
    '<script src="main.js"></script>',
    f'<script>\n{js_content}\n</script>'
)

# Also create a clean CDN-ready template
cdn_template = html_content

# Inlined base64 version
asset_matches = set(re.findall(r'assets/([a-zA-Z0-9_\-\.]+)', html_content))
for asset in asset_matches:
    asset_path = f"{cwd}/assets/{asset}"
    if os.path.exists(asset_path):
        ext = asset.split(".")[-1].lower()
        mime = "image/jpeg" if ext in ["jpg", "jpeg"] else "image/png"
        with open(asset_path, "rb") as img_file:
            b64_str = base64.b64encode(img_file.read()).decode("utf-8")
        data_uri = f"data:{mime};base64,{b64_str}"
        html_content = html_content.replace(f"assets/{asset}", data_uri)
        print(f"Inlined asset: {asset}")

with open(f"{cwd}/bundle.html", "w", encoding="utf-8") as f:
    f.write(html_content)

with open(f"{cwd}/flexifunnels_template.html", "w", encoding="utf-8") as f:
    f.write(cdn_template)

print(f"bundle.html generated! Size: {os.path.getsize(f'{cwd}/bundle.html')} bytes")
print(f"flexifunnels_template.html generated! Size: {os.path.getsize(f'{cwd}/flexifunnels_template.html')} bytes")

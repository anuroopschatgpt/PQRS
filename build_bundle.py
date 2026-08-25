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

# Build the bulletproof multi-layer auto-executing script block
# Layer 1: Synchronous onerror trigger on dummy img tag (executes inside innerHTML)
# Layer 2: Raw core script container
# Layer 3: Direct Function evaluation
script_injection = f"""
<!-- ==========================================================================
     PQRS BULLETPROOF AUTO-EXECUTION ENGINE (Immune to innerHTML blocking)
     ========================================================================== -->
<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" style="display:none!important;position:absolute;width:0;height:0;opacity:0;pointer-events:none;" onerror="
(function(){{
  if (window.__PQRS_BOOTSTRAP_LOADED__) return;
  window.__PQRS_BOOTSTRAP_LOADED__ = true;
  var codeEl = document.getElementById('pqrs-bundle-core-script');
  if (codeEl) {{
    try {{
      var fn = new Function(codeEl.textContent || codeEl.innerText);
      fn();
    }} catch(e) {{
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.text = codeEl.textContent || codeEl.innerText;
      (document.head || document.body || document.documentElement).appendChild(s);
    }}
  }}
}})();
" onload="
(function(){{
  if (window.__PQRS_BOOTSTRAP_LOADED__) return;
  window.__PQRS_BOOTSTRAP_LOADED__ = true;
  var codeEl = document.getElementById('pqrs-bundle-core-script');
  if (codeEl) {{
    try {{
      var fn = new Function(codeEl.textContent || codeEl.innerText);
      fn();
    }} catch(e) {{
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.text = codeEl.textContent || codeEl.innerText;
      (document.head || document.body || document.documentElement).appendChild(s);
    }}
  }}
}})();
">

<script id="pqrs-bundle-core-script" type="text/javascript">
{js_content}
</script>

<script type="text/javascript">
(function(){{
  try {{
    if (!window.__PQRS_BOOTSTRAP_LOADED__) {{
      window.__PQRS_BOOTSTRAP_LOADED__ = true;
      var codeEl = document.getElementById('pqrs-bundle-core-script');
      if (codeEl) {{
        (new Function(codeEl.textContent || codeEl.innerText))();
      }}
    }}
  }} catch(e) {{}}
}})();
</script>
"""

# Replace <link rel="stylesheet" href="style.css"> with <style>...</style>
html_content = html_content.replace(
    '<link rel="stylesheet" href="style.css">',
    f'<style>\n{css_content}\n</style>'
)

# Replace <script src="main.js"></script> with bulletproof auto-execution script
html_content = html_content.replace(
    '<script src="main.js"></script>',
    script_injection
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

# Also create flexifunnels_custom_code.txt with separated CSS, HTML, and JS
with open(f"{cwd}/flexifunnels_custom_code.txt", "w", encoding="utf-8") as f:
    f.write("=== FLEXIFUNNELS SETUP GUIDE ===\n\n")
    f.write("METHOD 1 (RECOMMENDED - ONE SINGLE PASTE):\n")
    f.write("1. Open 'bundle.html'.\n")
    f.write("2. Copy the entire file content.\n")
    f.write("3. In FlexiFunnels visual builder, add a 'Custom HTML/JS' element on the page.\n")
    f.write("4. Paste the entire content into the Custom HTML element.\n")
    f.write("5. Save and publish!\n\n")
    f.write("=================================================================\n\n")
    f.write("METHOD 2 (IF USING PAGE SETTINGS -> CUSTOM CODE TABS):\n\n")
    f.write("--- TAB 1: CUSTOM CSS (Page Settings -> Custom CSS) ---\n")
    f.write("<style>\n" + css_content + "\n</style>\n\n")
    f.write("--- TAB 2: CUSTOM JAVASCRIPT (Page Settings -> Footer JS / Tracking Code) ---\n")
    f.write("<script>\n" + js_content + "\n</script>\n\n")

print(f"bundle.html generated! Size: {os.path.getsize(f'{cwd}/bundle.html')} bytes")
print(f"flexifunnels_template.html generated! Size: {os.path.getsize(f'{cwd}/flexifunnels_template.html')} bytes")
print(f"flexifunnels_custom_code.txt generated! Size: {os.path.getsize(f'{cwd}/flexifunnels_custom_code.txt')} bytes")

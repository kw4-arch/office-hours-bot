from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


ROOT = Path(__file__).resolve().parents[1]
FONT_PATH = Path(r"C:\Windows\Fonts\consola.ttf")
FONT_BOLD_PATH = Path(r"C:\Windows\Fonts\consolab.ttf")
OUTPUTS = [
    ("part-b-failing-test.txt", "part-b-failing-test.png", "TEST-FIRST FAILURE", "#ff7657"),
    ("part-b-passing-test-and-build.txt", "part-b-passing-test-and-build.png", "PASSING TEST + BUILD", "#7de29b"),
    ("part-c-failing-test.txt", "part-c-failing-test.png", "SECURITY TEST-FIRST FAILURE", "#ff7657"),
    ("part-c-passing-test-and-build.txt", "part-c-passing-test-and-build.png", "SECURITY FIX VERIFIED", "#7de29b"),
]


def render(source_name: str, output_name: str, label: str, accent: str) -> None:
    lines = (ROOT / "evidence" / source_name).read_text(encoding="utf-8").splitlines()
    body_font = ImageFont.truetype(str(FONT_PATH), 24)
    title_font = ImageFont.truetype(str(FONT_BOLD_PATH), 26)
    width = 1500
    line_height = 36
    top = 118
    height = top + max(1, len(lines)) * line_height + 60
    image = Image.new("RGB", (width, height), "#111715")
    draw = ImageDraw.Draw(image)

    draw.rounded_rectangle((28, 28, width - 28, height - 28), radius=18, fill="#17201d", outline="#35413c", width=2)
    for x, color in [(62, "#ff685f"), (93, "#f8c757"), (124, "#58c879")]:
        draw.ellipse((x - 9, 57 - 9, x + 9, 57 + 9), fill=color)
    draw.text((165, 43), label, font=title_font, fill=accent)
    draw.line((55, 92, width - 55, 92), fill="#35413c", width=2)

    y = top
    for line in lines:
        color = "#d9e3de"
        lowered = line.lower()
        if "failed" in lowered or "failure" in lowered or "assertionerror" in lowered:
            color = "#ff8b72"
        elif "passed" in lowered or "successfully" in lowered or line.startswith("PASS"):
            color = "#8ee8a7"
        elif line.startswith("RUN") or line.startswith("Next.js"):
            color = "#8bc7ff"
        draw.text((62, y), line, font=body_font, fill=color)
        y += line_height

    image.save(ROOT / "evidence" / output_name, format="PNG", optimize=True)


for item in OUTPUTS:
    render(*item)

#!/usr/bin/env python3
"""
DigiSurf Australia — Individual Logo Exports (600x600 each)
"""

import math
import os
from PIL import Image, ImageDraw, ImageFilter, ImageFont
import numpy as np

W, H = 600, 600
BG      = (5, 11, 24)
CYAN    = (0, 212, 255)
BLUE    = (59, 123, 255)
PURPLE  = (123, 95, 255)
NAVY    = (13, 26, 58)
WHITE   = (240, 246, 255)
MUTED   = (122, 143, 166)

# ── Helpers ───────────────────────────────────────────────────────────────────

def lerp_color(c1, c2, t):
    return tuple(int(c1[i] + (c2[i] - c1[i]) * t) for i in range(3))

def draw_glow_circle(img, cx, cy, r, color, alpha_max=120, layers=14):
    for i in range(layers):
        t = i / layers
        radius = int(r + (layers - i) * 4)
        alpha = int(alpha_max * (1 - t) * 0.45)
        layer = Image.new('RGBA', img.size, (0, 0, 0, 0))
        ld = ImageDraw.Draw(layer)
        ld.ellipse([cx - radius, cy - radius, cx + radius, cy + radius],
                   fill=(*color, alpha))
        img_rgba = img.convert('RGBA')
        img = Image.alpha_composite(img_rgba, layer).convert('RGB')
    return img

def draw_arc_gradient(draw, cx, cy, r, start_deg, end_deg, width, c1, c2, steps=400):
    for i in range(steps):
        t = i / (steps - 1)
        angle = math.radians(start_deg + (end_deg - start_deg) * t)
        color = lerp_color(c1, c2, t)
        for w_offset in range(-width // 2, width // 2 + 1):
            ri = r + w_offset
            x = cx + ri * math.cos(angle)
            y = cy + ri * math.sin(angle)
            draw.ellipse([x - 1.8, y - 1.8, x + 1.8, y + 1.8], fill=color)

def draw_wave_path(draw, cx, cy, r, c1, c2, thickness=14):
    # Outer arc (the D back)
    draw_arc_gradient(draw, cx, cy, r, 300, 420, thickness, c1, c2, steps=400)
    # Inner wave (the D belly with wave motion)
    inner_r = r * 0.55
    steps = 400
    for i in range(steps):
        t = i / (steps - 1)
        angle = math.radians(60 + (300 - 60) * t)
        wave = math.sin(t * math.pi * 2.5) * r * 0.2
        ri = inner_r + wave
        color = lerp_color(c2, c1, t)
        for w_offset in range(-thickness // 2 + 2, thickness // 2 - 1):
            rr = ri + w_offset
            x = cx + rr * math.cos(angle)
            y = cy + rr * math.sin(angle)
            draw.ellipse([x - 1.4, y - 1.4, x + 1.4, y + 1.4], fill=color)

def get_font(size, bold=False):
    search_dirs = [
        r"C:\Windows\Fonts",
        r"C:\Users\Cipher\AppData\Local\Microsoft\Windows\Fonts",
    ]
    candidates_bold    = ["arialbd.ttf", "Arial Bold.ttf", "DejaVuSans-Bold.ttf"]
    candidates_regular = ["arial.ttf",   "Arial.ttf",      "DejaVuSans.ttf"]
    candidates = candidates_bold if bold else candidates_regular
    for d in search_dirs:
        for f in candidates:
            path = os.path.join(d, f)
            if os.path.exists(path):
                try:
                    return ImageFont.truetype(path, size)
                except Exception:
                    pass
    return ImageFont.load_default()

def bg_gradient(img):
    draw = ImageDraw.Draw(img)
    for y in range(H):
        t = y / H
        c = lerp_color((8, 16, 42), BG, t)
        draw.line([(0, y), (W, y)], fill=c)
    return img

# ── VARIATION 1 — Glassmorphism Wave ─────────────────────────────────────────

def make_var1():
    img = Image.new('RGB', (W, H), BG)
    img = bg_gradient(img)

    cx, cy = W // 2, H // 2 - 40
    R = 140

    # Outer glow
    img = draw_glow_circle(img, cx, cy, R + 20, CYAN, alpha_max=80, layers=14)
    img = draw_glow_circle(img, cx, cy, R - 20, BLUE, alpha_max=100, layers=10)

    # Glass backing circle
    glass = Image.new('RGBA', img.size, (0, 0, 0, 0))
    gd = ImageDraw.Draw(glass)
    # Outer border ring
    gd.ellipse([cx - R - 3, cy - R - 3, cx + R + 3, cy + R + 3],
               fill=(13, 26, 78, 180), outline=(*CYAN, 140), width=3)
    # Inner slightly lighter circle
    gd.ellipse([cx - R + 12, cy - R + 12, cx + R - 12, cy + R - 12],
               fill=(20, 38, 90, 80))
    img_rgba = img.convert('RGBA')
    img = Image.alpha_composite(img_rgba, glass).convert('RGB')

    draw = ImageDraw.Draw(img)

    # The wave mark
    draw_wave_path(draw, cx, cy, int(R * 0.70), CYAN, BLUE, thickness=16)

    # Shimmer highlight
    shimmer = Image.new('RGBA', img.size, (0, 0, 0, 0))
    sd = ImageDraw.Draw(shimmer)
    sd.ellipse([cx - R + 20, cy - R + 14, cx + R - 60, cy - R // 2 + 10],
               fill=(255, 255, 255, 25))
    img_rgba = img.convert('RGBA')
    img = Image.alpha_composite(img_rgba, shimmer).convert('RGB')
    draw = ImageDraw.Draw(img)

    # Typography
    f_title = get_font(62, bold=True)
    f_sub   = get_font(20)
    f_tag   = get_font(13)

    title = "DIGISURF"
    sub   = "AUSTRALIA"
    tag   = "Variation 1  —  Glassmorphism Wave"

    tw = draw.textlength(title, font=f_title)
    ty = cy + R + 28
    draw.text(((W - tw) // 2, ty), title, fill=WHITE, font=f_title)

    sw = draw.textlength(sub, font=f_sub)
    draw.text(((W - sw) // 2, ty + 70), sub, fill=CYAN, font=f_sub)

    tw2 = draw.textlength(tag, font=f_tag)
    draw.text(((W - tw2) // 2, H - 36), tag, fill=MUTED, font=f_tag)

    img = img.filter(ImageFilter.SHARPEN)
    return img


# ── VARIATION 2 — Minimal Arc ─────────────────────────────────────────────────

def make_var2():
    img = Image.new('RGB', (W, H), BG)
    img = bg_gradient(img)

    cx, cy = W // 2, H // 2 - 40
    R = 130

    # Very soft glow
    img = draw_glow_circle(img, cx, cy, R, CYAN, alpha_max=40, layers=10)
    draw = ImageDraw.Draw(img)

    # Outer arc — the D shape, bold single stroke
    draw_arc_gradient(draw, cx, cy, R, 292, 428, 18, CYAN, BLUE, steps=600)

    # Inner wave arc — thinner
    inner_r = int(R * 0.58)
    draw_arc_gradient(draw, cx, cy, inner_r, 56, 292, 9, BLUE, CYAN, steps=400)

    # Bridge lines connecting inner to outer at ends
    for angle_deg in [292, 428 % 360]:
        angle = math.radians(angle_deg)
        ox_pt = cx + R * math.cos(angle)
        oy_pt = cy + R * math.sin(angle)
        ix_pt = cx + inner_r * math.cos(angle)
        iy_pt = cy + inner_r * math.sin(angle)
        draw.line([(ox_pt, oy_pt), (ix_pt, iy_pt)],
                  fill=lerp_color(CYAN, BLUE, 0.5), width=4)

    # End-cap dots — large
    for angle_deg, color in [(292, CYAN), (428 % 360, BLUE)]:
        angle = math.radians(angle_deg)
        px = cx + R * math.cos(angle)
        py = cy + R * math.sin(angle)
        # Glow
        draw.ellipse([px - 14, py - 14, px + 14, py + 14], fill=(*color[:3], 60))
        # Solid
        draw.ellipse([px - 8,  py - 8,  px + 8,  py + 8],  fill=color)

    # Inner end-cap
    draw.ellipse([cx + inner_r - 6, cy - 6, cx + inner_r + 6, cy + 6], fill=CYAN)

    # Typography
    f_title = get_font(62, bold=True)
    f_sub   = get_font(19)
    f_tag   = get_font(13)

    title = "DigiSurf"
    sub   = "A  U  S  T  R  A  L  I  A"
    tag   = "Variation 2  —  Minimal Arc"

    ty = cy + R + 30
    tw = draw.textlength(title, font=f_title)
    draw.text(((W - tw) // 2, ty), title, fill=WHITE, font=f_title)

    sw = draw.textlength(sub, font=f_sub)
    draw.text(((W - sw) // 2, ty + 70), sub, fill=CYAN, font=f_sub)

    tw2 = draw.textlength(tag, font=f_tag)
    draw.text(((W - tw2) // 2, H - 36), tag, fill=MUTED, font=f_tag)

    img = img.filter(ImageFilter.SHARPEN)
    return img


# ── VARIATION 3 — Digital Surf Mark ──────────────────────────────────────────

def make_var3():
    img = Image.new('RGB', (W, H), BG)
    img = bg_gradient(img)

    cx, cy = W // 2, H // 2 - 40
    R = 130

    # Glows
    img = draw_glow_circle(img, cx, cy, R, PURPLE, alpha_max=50, layers=10)
    img = draw_glow_circle(img, cx, cy, int(R * 0.5), CYAN, alpha_max=70, layers=8)
    draw = ImageDraw.Draw(img)

    # Generate nodes along the wave path
    node_count = 24
    nodes = []
    for i in range(node_count):
        t = i / (node_count - 1)
        if t < 0.5:
            angle = math.radians(300 + (420 - 300) * (t * 2))
            r_use = R
        else:
            t2 = (t - 0.5) * 2
            angle = math.radians(60 + (300 - 60) * t2)
            wave = math.sin(t2 * math.pi * 2.5) * R * 0.2
            r_use = R * 0.55 + wave
        x = cx + r_use * math.cos(angle)
        y = cy + r_use * math.sin(angle)
        nodes.append((x, y, t))

    # Connecting lines — segmented
    for i in range(len(nodes) - 1):
        x1, y1, t1 = nodes[i]
        x2, y2, t2 = nodes[i + 1]
        mid_t = (t1 + t2) / 2
        color = lerp_color(CYAN, PURPLE, mid_t)
        steps = 10
        for s in range(7):  # draw 70% of each segment (dashed feel)
            frac  = s / steps
            frac2 = (s + 0.7) / steps
            px  = x1 + (x2 - x1) * frac
            py  = y1 + (y2 - y1) * frac
            px2 = x1 + (x2 - x1) * frac2
            py2 = y1 + (y2 - y1) * frac2
            draw.line([(px, py), (px2, py2)], fill=color, width=3)

    # Node circles
    for idx, (x, y, t) in enumerate(nodes):
        color = lerp_color(CYAN, PURPLE, t)
        r_node = 9 if idx % 6 == 0 else (6 if idx % 3 == 0 else 4)
        # Glow ring
        draw.ellipse([x - r_node - 5, y - r_node - 5, x + r_node + 5, y + r_node + 5],
                     fill=(*color, 50))
        # Solid node
        draw.ellipse([x - r_node, y - r_node, x + r_node, y + r_node], fill=color)
        # Inner highlight dot
        if r_node >= 6:
            draw.ellipse([x - 2, y - 2, x + 2, y + 2], fill=WHITE)

    # Circuit branch lines off larger nodes
    for idx in [0, 6, 12, 18]:
        if idx < len(nodes):
            x, y, t = nodes[idx]
            color = lerp_color(CYAN, PURPLE, t)
            angle_offset = 45 * (idx % 4)
            bx = x + 18 * math.cos(math.radians(angle_offset))
            by = y + 18 * math.sin(math.radians(angle_offset))
            draw.line([(x, y), (bx, by)], fill=(*color, 180), width=2)
            draw.ellipse([bx - 4, by - 4, bx + 4, by + 4], fill=(*color, 220))

    # Typography
    f_title = get_font(62, bold=True)
    f_sub   = get_font(19)
    f_tag   = get_font(13)

    title = "DigiSurf"
    sub   = "AUSTRALIA"
    tag   = "Variation 3  —  Digital Surf Mark"

    ty = cy + R + 30
    tw = draw.textlength(title, font=f_title)
    draw.text(((W - tw) // 2, ty), title, fill=WHITE, font=f_title)

    sw = draw.textlength(sub, font=f_sub)
    draw.text(((W - sw) // 2, ty + 70), sub, fill=PURPLE, font=f_sub)

    tw2 = draw.textlength(tag, font=f_tag)
    draw.text(((W - tw2) // 2, H - 36), tag, fill=MUTED, font=f_tag)

    img = img.filter(ImageFilter.SHARPEN)
    return img


# ── Main ──────────────────────────────────────────────────────────────────────

def main():
    os.makedirs("output", exist_ok=True)

    v1 = make_var1()
    v1.save("output/logo-v1-glassmorphism.png", "PNG", dpi=(144, 144))
    print("Saved: logo-v1-glassmorphism.png")

    v2 = make_var2()
    v2.save("output/logo-v2-minimal-arc.png", "PNG", dpi=(144, 144))
    print("Saved: logo-v2-minimal-arc.png")

    v3 = make_var3()
    v3.save("output/logo-v3-digital-surf.png", "PNG", dpi=(144, 144))
    print("Saved: logo-v3-digital-surf.png")

    print("All 3 done.")

if __name__ == "__main__":
    main()

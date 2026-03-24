#!/usr/bin/env python3
"""
DigiSurf Australia — Logo Variations Generator
Creates 3 logo variation concepts on a dark navy canvas.
"""

import math
import os
from PIL import Image, ImageDraw, ImageFilter, ImageFont
import numpy as np

# ── Canvas setup ──────────────────────────────────────────────────────────────
W, H = 1200, 620
BG = (5, 11, 24)           # #050B18
CYAN = (0, 212, 255)       # #00D4FF
BLUE = (59, 123, 255)      # #3B7BFF
PURPLE = (123, 95, 255)    # #7B5FFF
NAVY = (13, 26, 58)        # #0D1A3A
WHITE = (240, 246, 255)    # #F0F6FF
MUTED = (122, 143, 166)    # #7A8FA6

SLOT_W = W // 3  # 400px per variation

# ── Helpers ───────────────────────────────────────────────────────────────────

def lerp_color(c1, c2, t):
    return tuple(int(c1[i] + (c2[i] - c1[i]) * t) for i in range(3))

def gradient_rect(draw, x0, y0, x1, y1, c1, c2, vertical=True):
    steps = (y1 - y0) if vertical else (x1 - x0)
    for i in range(steps):
        t = i / max(steps - 1, 1)
        color = lerp_color(c1, c2, t)
        if vertical:
            draw.line([(x0, y0 + i), (x1, y0 + i)], fill=color)
        else:
            draw.line([(x0 + i, y0), (x0 + i, y1)], fill=color)

def draw_glow_circle(img, cx, cy, r, color, alpha_max=120, layers=12):
    overlay = Image.new('RGBA', img.size, (0, 0, 0, 0))
    for i in range(layers):
        t = i / layers
        radius = int(r + (layers - i) * 3)
        alpha = int(alpha_max * (1 - t) * 0.4)
        layer = Image.new('RGBA', img.size, (0, 0, 0, 0))
        ld = ImageDraw.Draw(layer)
        ld.ellipse([cx - radius, cy - radius, cx + radius, cy + radius],
                   fill=(*color, alpha))
        overlay = Image.alpha_composite(overlay, layer)
    img_rgba = img.convert('RGBA')
    result = Image.alpha_composite(img_rgba, overlay)
    return result.convert('RGB')

def draw_arc_gradient(draw, cx, cy, r, start_deg, end_deg, width, c1, c2, steps=200):
    """Draw a thick arc with a colour gradient along its length."""
    for i in range(steps):
        t = i / (steps - 1)
        angle = math.radians(start_deg + (end_deg - start_deg) * t)
        color = lerp_color(c1, c2, t)
        # Draw multiple widths to fake thickness
        for w_offset in range(-width // 2, width // 2 + 1):
            ri = r + w_offset
            x = cx + ri * math.cos(angle)
            y = cy + ri * math.sin(angle)
            draw.ellipse([x - 1.5, y - 1.5, x + 1.5, y + 1.5], fill=color)

def draw_wave_path(draw, cx, cy, r, c1, c2, thickness=8):
    """
    Draw the stylised 'D' wave curl:
    A large arc from ~300° to ~60° (the outer D shape)
    with an inner wave from 60° back to 300°.
    """
    # Outer arc
    draw_arc_gradient(draw, cx, cy, r, 300, 420, thickness, c1, c2, steps=300)
    # Inner wave — sinusoidal variation on a smaller radius
    inner_r = r * 0.55
    steps = 300
    for i in range(steps):
        t = i / (steps - 1)
        angle = math.radians(60 + (300 - 60) * t)
        # Modulate radius to create wave shape
        wave = math.sin(t * math.pi * 2.5) * r * 0.18
        ri = inner_r + wave
        color = lerp_color(c2, c1, t)
        for w_offset in range(-thickness // 2 + 1, thickness // 2):
            rr = ri + w_offset
            x = cx + rr * math.cos(angle)
            y = cy + rr * math.sin(angle)
            draw.ellipse([x - 1.2, y - 1.2, x + 1.2, y + 1.2], fill=color)


# ── Font loading ──────────────────────────────────────────────────────────────

def get_font(size, bold=False):
    search_dirs = [
        r"C:\Windows\Fonts",
        r"C:\Users\Cipher\AppData\Local\Microsoft\Windows\Fonts",
        "/usr/share/fonts",
        "/System/Library/Fonts",
    ]
    candidates_bold = ["arialbd.ttf", "Arial Bold.ttf", "DejaVuSans-Bold.ttf", "NimbusSanL-Bol.otf"]
    candidates_regular = ["arial.ttf", "Arial.ttf", "DejaVuSans.ttf", "NimbusSanL-Reg.otf"]
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


# ── Variation 1: Glassmorphism Wave ──────────────────────────────────────────

def draw_var1(img, ox):
    """Glassmorphism Wave — layered translucent circles with the wave mark."""
    cx, cy = ox + SLOT_W // 2, H // 2 - 30
    R = 95

    # Background glass card
    card = Image.new('RGBA', img.size, (0, 0, 0, 0))
    card_d = ImageDraw.Draw(card)
    card_d.rounded_rectangle([ox + 30, 40, ox + SLOT_W - 30, H - 80],
                               radius=28, fill=(13, 26, 58, 100))
    img_rgba = img.convert('RGBA')
    img = Image.alpha_composite(img_rgba, card).convert('RGB')

    # Outer glow rings
    img = draw_glow_circle(img, cx, cy, R + 18, CYAN, alpha_max=60, layers=10)
    img = draw_glow_circle(img, cx, cy, R - 10, BLUE, alpha_max=80, layers=8)

    draw = ImageDraw.Draw(img)

    # Glass backing circle
    glass = Image.new('RGBA', img.size, (0, 0, 0, 0))
    gd = ImageDraw.Draw(glass)
    gd.ellipse([cx - R - 2, cy - R - 2, cx + R + 2, cy + R + 2],
               fill=(13, 26, 78, 160))
    gd.ellipse([cx - R - 2, cy - R - 2, cx + R + 2, cy + R + 2],
               outline=(*CYAN, 120), width=2)
    img_rgba = img.convert('RGBA')
    img = Image.alpha_composite(img_rgba, glass).convert('RGB')
    draw = ImageDraw.Draw(img)

    # Wave mark
    draw_wave_path(draw, cx, cy, R * 0.72, CYAN, BLUE, thickness=10)

    # Highlight shimmer on top of circle
    shimmer = Image.new('RGBA', img.size, (0, 0, 0, 0))
    sd = ImageDraw.Draw(shimmer)
    sd.ellipse([cx - R + 10, cy - R + 10, cx + R - 40, cy - R // 2],
               fill=(255, 255, 255, 30))
    img_rgba = img.convert('RGBA')
    img = Image.alpha_composite(img_rgba, shimmer).convert('RGB')
    draw = ImageDraw.Draw(img)

    # Label
    font_title = get_font(38, bold=True)
    font_sub = get_font(14)
    font_tag = get_font(11)

    title = "DIGISURF"
    sub = "AUSTRALIA"
    tag = "Variation 1 — Glassmorphism Wave"

    # Title with gradient simulation (draw twice: white then cyan offset)
    tw = draw.textlength(title, font=font_title)
    tx = ox + SLOT_W // 2 - tw // 2
    ty = cy + R + 22
    draw.text((tx, ty), title, fill=WHITE, font=font_title)

    sw = draw.textlength(sub, font=font_sub)
    draw.text((ox + SLOT_W // 2 - sw // 2, ty + 46), sub,
              fill=CYAN, font=font_sub)

    tagw = draw.textlength(tag, font=font_tag)
    draw.text((ox + SLOT_W // 2 - tagw // 2, H - 55), tag,
              fill=MUTED, font=font_tag)

    return img


# ── Variation 2: Minimal Arc ──────────────────────────────────────────────────

def draw_var2(img, ox):
    """Minimal Arc — a single clean crescent stroke with gradient."""
    cx, cy = ox + SLOT_W // 2, H // 2 - 30
    R = 88

    draw = ImageDraw.Draw(img)

    # Subtle background card outline
    card = Image.new('RGBA', img.size, (0, 0, 0, 0))
    cd = ImageDraw.Draw(card)
    cd.rounded_rectangle([ox + 30, 40, ox + SLOT_W - 30, H - 80],
                          radius=28, fill=(13, 26, 58, 50),
                          outline=(*BLUE, 40), width=1)
    img_rgba = img.convert('RGBA')
    img = Image.alpha_composite(img_rgba, card).convert('RGB')
    draw = ImageDraw.Draw(img)

    # Very soft glow
    img = draw_glow_circle(img, cx, cy, R, CYAN, alpha_max=35, layers=8)
    draw = ImageDraw.Draw(img)

    # Single outer arc — bold, the "D" shape
    draw_arc_gradient(draw, cx, cy, R, 290, 430, 14, CYAN, BLUE, steps=400)

    # Inner crescent arc — thinner
    inner_r = R * 0.60
    draw_arc_gradient(draw, cx, cy, int(inner_r), 55, 305, 7, BLUE, CYAN, steps=300)

    # End-cap dots
    # Start cap (cyan)
    ax = cx + R * math.cos(math.radians(290))
    ay = cy + R * math.sin(math.radians(290))
    draw.ellipse([ax - 6, ay - 6, ax + 6, ay + 6], fill=CYAN)

    # End cap (blue-purple)
    bx = cx + R * math.cos(math.radians(430 % 360))
    by = cy + R * math.sin(math.radians(430 % 360))
    draw.ellipse([bx - 6, by - 6, bx + 6, by + 6], fill=BLUE)

    # Text
    font_title = get_font(40, bold=True)
    font_sub = get_font(13)
    font_tag = get_font(11)

    title = "DigiSurf"
    sub = "A U S T R A L I A"
    tag = "Variation 2 — Minimal Arc"

    tw = draw.textlength(title, font=font_title)
    ty = cy + R + 22
    draw.text((ox + SLOT_W // 2 - tw // 2, ty), title, fill=WHITE, font=font_title)

    sw = draw.textlength(sub, font=font_sub)
    draw.text((ox + SLOT_W // 2 - sw // 2, ty + 48), sub, fill=CYAN, font=font_sub)

    tagw = draw.textlength(tag, font=font_tag)
    draw.text((ox + SLOT_W // 2 - tagw // 2, H - 55), tag, fill=MUTED, font=font_tag)

    return img


# ── Variation 3: Digital Surf Mark ───────────────────────────────────────────

def draw_var3(img, ox):
    """Digital Surf Mark — the wave shape rendered as circuit nodes & segments."""
    cx, cy = ox + SLOT_W // 2, H // 2 - 30
    R = 88

    draw = ImageDraw.Draw(img)

    card = Image.new('RGBA', img.size, (0, 0, 0, 0))
    cd = ImageDraw.Draw(card)
    cd.rounded_rectangle([ox + 30, 40, ox + SLOT_W - 30, H - 80],
                          radius=28, fill=(13, 26, 58, 60))
    img_rgba = img.convert('RGBA')
    img = Image.alpha_composite(img_rgba, card).convert('RGB')

    # Soft purple glow
    img = draw_glow_circle(img, cx, cy, R, PURPLE, alpha_max=45, layers=8)
    img = draw_glow_circle(img, cx, cy, R * 0.55, CYAN, alpha_max=55, layers=6)
    draw = ImageDraw.Draw(img)

    # Generate node points along the wave path
    node_count = 16
    nodes = []
    for i in range(node_count):
        t = i / (node_count - 1)
        # Outer arc portion: first half
        if t < 0.5:
            angle = math.radians(300 + (420 - 300) * (t * 2))
            r_use = R
        else:
            # Inner wave return
            t2 = (t - 0.5) * 2
            angle = math.radians(60 + (300 - 60) * t2)
            wave = math.sin(t2 * math.pi * 2.5) * R * 0.18
            r_use = R * 0.55 + wave
        x = cx + r_use * math.cos(angle)
        y = cy + r_use * math.sin(angle)
        nodes.append((x, y, t))

    # Draw connecting lines (segmented — dash style)
    for i in range(len(nodes) - 1):
        x1, y1, t1 = nodes[i]
        x2, y2, t2 = nodes[i + 1]
        mid_t = (t1 + t2) / 2
        color = lerp_color(CYAN, PURPLE, mid_t)
        # Dashed segment: draw only 70% of each line
        for frac in [f / 10 for f in range(7)]:
            px = x1 + (x2 - x1) * frac
            py = y1 + (y2 - y1) * frac
            px2 = x1 + (x2 - x1) * (frac + 0.06)
            py2 = y1 + (y2 - y1) * (frac + 0.06)
            draw.line([(px, py), (px2, py2)], fill=color, width=2)

    # Draw node circles
    for x, y, t in nodes:
        color = lerp_color(CYAN, PURPLE, t)
        r_node = 5 if (nodes.index((x, y, t)) % 4 == 0) else 3
        # Glow ring
        draw.ellipse([x - r_node - 3, y - r_node - 3, x + r_node + 3, y + r_node + 3],
                     fill=(*color[:3], 60) if len(color) >= 3 else color)
        draw.ellipse([x - r_node, y - r_node, x + r_node, y + r_node], fill=color)

    # Small circuit branch lines on larger nodes
    accent_nodes = [nodes[0], nodes[4], nodes[8], nodes[12]]
    for x, y, t in accent_nodes:
        color = lerp_color(CYAN, PURPLE, t)
        draw.line([(x, y), (x + 12, y - 8)], fill=(*color[:3], 140), width=1)
        draw.ellipse([x + 10, y - 10, x + 14, y - 6], fill=(*color[:3], 160))

    # Text
    font_title = get_font(38, bold=True)
    font_sub = get_font(13)
    font_tag = get_font(11)

    title = "DigiSurf"
    sub = "AUSTRALIA"
    tag = "Variation 3 — Digital Surf Mark"

    ty = cy + R + 22
    tw = draw.textlength(title, font=font_title)
    draw.text((ox + SLOT_W // 2 - tw // 2, ty), title, fill=WHITE, font=font_title)

    sw = draw.textlength(sub, font=font_sub)
    draw.text((ox + SLOT_W // 2 - sw // 2, ty + 48), sub, fill=PURPLE, font=font_sub)

    tagw = draw.textlength(tag, font=font_tag)
    draw.text((ox + SLOT_W // 2 - tagw // 2, H - 55), tag, fill=MUTED, font=font_tag)

    return img


# ── Dividers ──────────────────────────────────────────────────────────────────

def draw_dividers(img):
    draw = ImageDraw.Draw(img)
    for x in [SLOT_W, SLOT_W * 2]:
        for y in range(60, H - 60, 4):
            alpha = int(60 + 40 * math.sin(y * 0.05))
            draw.line([(x, y), (x, y + 2)],
                      fill=(59, 123, 255), width=1)
    return img


# ── Header label ─────────────────────────────────────────────────────────────

def draw_header(img):
    draw = ImageDraw.Draw(img)
    font = get_font(12)
    label = "DigiSurf Australia — Logo Variations"
    lw = draw.textlength(label, font=font)
    draw.text((W // 2 - lw // 2, 18), label, fill=MUTED, font=font)
    return img


# ── Main ──────────────────────────────────────────────────────────────────────

def main():
    os.makedirs("output", exist_ok=True)

    # Base canvas
    img = Image.new('RGB', (W, H), BG)

    # Very subtle radial gradient on bg
    draw = ImageDraw.Draw(img)
    gradient_rect(draw, 0, 0, W, H // 3,
                  (8, 16, 38), BG, vertical=True)

    img = draw_header(img)

    img = draw_var1(img, 0)
    img = draw_var2(img, SLOT_W)
    img = draw_var3(img, SLOT_W * 2)

    img = draw_dividers(img)

    # Final soft sharpen pass
    img = img.filter(ImageFilter.SHARPEN)

    out_path = "output/digisurf-logo-variations.png"
    img.save(out_path, "PNG", dpi=(144, 144))
    print(f"Saved: {out_path}")


if __name__ == "__main__":
    main()

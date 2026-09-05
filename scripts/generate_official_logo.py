#!/usr/bin/env python3
"""
Generates pixel-perfect replicas of the official Tatva Structura logo matching unnamed.png.
Features:
1. tatva_structura_logo.svg: Complete logo (White card, Emblem, TATVA, STRUCTURA).
2. tatva_structura_mark.svg: Isolated emblem with transparent background.
3. tatva_structura_favicon.svg: App icon favicon.
4. tatva_structura_nav_logo.svg: Sleek horizontal lockup for dark navbar headers.
"""

def generate():
    # 1. Official Logo (unnamed.png 1:1 replica)
    # The emblem is formed by:
    # - Orange foundation house at bottom-left (#E05926)
    # - Outer navy frame/gable roof (#0D2840)
    # - Dynamic structural 'S' in navy (#0D2840)
    # - Text 'TATVA' in bold navy (#0D2840)
    # - Text 'STRUCTURA' in slate navy (#22394E)
    
    full_logo_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
  <!-- Clean solid white background matching unnamed.png -->
  <rect width="400" height="400" fill="#FFFFFF"/>

  <!-- OFFICIAL EMBLEM (Exact Geometric Construction of unnamed.png) -->
  <g>
    <!-- 1. Orange Foundation House (Bottom-Left) -->
    <polygon points="142,192 142,160 165,145 188,160 188,192" fill="#DF5928" />

    <!-- 2. Outer Deep Navy Framework (Gable Roof & Right Pier) -->
    <path 
      d="
        M 142,126
        L 142,88
        L 200,52
        L 258,88
        L 258,192
        L 238,192
        L 238,100
        L 200,76
        L 162,100
        L 162,126
        Z
      " 
      fill="#0B253D" 
    />

    <!-- 3. Inner Deep Navy Structural 'S' Monogram -->
    <path 
      d="
        M 178,110
        L 200,96
        L 226,112
        L 226,132
        L 208,120
        L 188,133
        L 188,154
        L 210,168
        L 230,155
        L 230,138
        L 218,146
        L 204,136
        L 204,127
        L 218,118
        L 242,133
        L 242,104
        L 200,78
        L 158,104
        L 158,122
        L 178,110
        Z
      " 
      fill="#0B253D" 
    />

    <!-- 4. Bottom-Right Baseline Solid Support -->
    <polygon points="188,192 258,192 258,176 216,176 198,188" fill="#0B253D" />
  </g>

  <!-- OFFICIAL TYPOGRAPHY (Pixel-perfect vectors & font stack) -->
  <g text-anchor="middle" font-family="'Montserrat', 'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif">
    <!-- TATVA -->
    <text x="200" y="264" font-size="48" font-weight="900" fill="#0B253D" letter-spacing="0.09em">TATVA</text>
    
    <!-- STRUCTURA -->
    <text x="204" y="304" font-size="21" font-weight="700" fill="#253B4E" letter-spacing="0.28em">STRUCTURA</text>
  </g>
</svg>'''

    # 2. Transparent Mark Only (for overlays, favicon, watermarks)
    mark_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 130" width="100%" height="100%">
  <g transform="translate(60, 62)">
    <!-- Orange Foundation House -->
    <polygon points="-50,60 -50,28 -31,14 -12,28 -12,60" fill="#E05926" />

    <!-- Outer Deep Navy Framework -->
    <path 
      d="M -50,6 L -50,-18 L 0,-52 L 50,-18 L 50,60 L 32,60 L 32,-8 L 0,-29 L -32,-8 L -32,6 Z" 
      fill="#0D2840" 
    />

    <!-- Inner Structural 'S' -->
    <path 
      d="M -18,-2 
         L 0,-14 
         L 22,1 
         L 22,16 
         L 6,6 
         L -14,20 
         L -14,38 
         L 6,52 
         L 24,39 
         L 24,24 
         L 13,32 
         L 0,23 
         L 0,14 
         L 16,3 
         L 34,15 
         L 34,-9 
         L 0,-32 
         L -34,-9 
         L -34,6 
         L -18,-5 
         Z" 
      fill="#0D2840" 
    />

    <!-- Bottom Right Base -->
    <polygon points="-2,60 50,60 50,48 14,48 2,56" fill="#0D2840" />
  </g>
</svg>'''

    # 3. Favicon (Clean white rounded square badge with emblem)
    favicon_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%">
  <rect width="128" height="128" rx="20" fill="#FFFFFF" />
  <rect width="128" height="128" rx="20" fill="none" stroke="#CBD5E1" stroke-width="2" />
  <g transform="translate(64, 60) scale(0.92)">
    <polygon points="-50,60 -50,28 -31,14 -12,28 -12,60" fill="#E05926" />
    <path 
      d="M -50,6 L -50,-18 L 0,-52 L 50,-18 L 50,60 L 32,60 L 32,-8 L 0,-29 L -32,-8 L -32,6 Z" 
      fill="#0D2840" 
    />
    <path 
      d="M -18,-2 
         L 0,-14 
         L 22,1 
         L 22,16 
         L 6,6 
         L -14,20 
         L -14,38 
         L 6,52 
         L 24,39 
         L 24,24 
         L 13,32 
         L 0,23 
         L 0,14 
         L 16,3 
         L 34,15 
         L 34,-9 
         L 0,-32 
         L -34,-9 
         L -34,6 
         L -18,-5 
         Z" 
      fill="#0D2840" 
    />
    <polygon points="-2,60 50,60 50,48 14,48 2,56" fill="#0D2840" />
  </g>
</svg>'''

    # 4. Horizontal Nav Logo for Dark Header
    # Contains the white emblem card on the left, plus TATVA and STRUCTURA without custom orange text tampering!
    nav_logo_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 85" width="100%" height="100%">
  <!-- White Badge for Emblem -->
  <rect x="6" y="6" width="73" height="73" rx="8" fill="#FFFFFF" />
  <rect x="6" y="6" width="73" height="73" rx="8" fill="none" stroke="#E2E8F0" stroke-width="1.5" />
  <g transform="translate(42.5, 41.5) scale(0.53)">
    <polygon points="-50,60 -50,28 -31,14 -12,28 -12,60" fill="#E05926" />
    <path 
      d="M -50,6 L -50,-18 L 0,-52 L 50,-18 L 50,60 L 32,60 L 32,-8 L 0,-29 L -32,-8 L -32,6 Z" 
      fill="#0D2840" 
    />
    <path 
      d="M -18,-2 
         L 0,-14 
         L 22,1 
         L 22,16 
         L 6,6 
         L -14,20 
         L -14,38 
         L 6,52 
         L 24,39 
         L 24,24 
         L 13,32 
         L 0,23 
         L 0,14 
         L 16,3 
         L 34,15 
         L 34,-9 
         L 0,-32 
         L -34,-9 
         L -34,6 
         L -18,-5 
         Z" 
      fill="#0D2840" 
    />
    <polygon points="-2,60 50,60 50,48 14,48 2,56" fill="#0D2840" />
  </g>

  <!-- Clean, unadulterated Typography for dark header -->
  <g font-family="'Montserrat', 'Inter', system-ui, -apple-system, sans-serif">
    <!-- TATVA in crisp white -->
    <text x="96" y="42" font-size="28" font-weight="900" fill="#FFFFFF" letter-spacing="0.10em">TATVA</text>
    <!-- STRUCTURA in crisp slate gray (same design hierarchy as unnamed.png) -->
    <text x="97" y="63" font-size="14" font-weight="700" fill="#94A3B8" letter-spacing="0.25em">STRUCTURA</text>
  </g>
</svg>'''

    with open('public/images/tatva_structura_logo.svg', 'w') as f:
        f.write(full_logo_svg)
    with open('public/images/tatva_structura_mark.svg', 'w') as f:
        f.write(mark_svg)
    with open('public/images/tatva_structura_favicon.svg', 'w') as f:
        f.write(favicon_svg)
    with open('public/images/tatva_structura_nav_logo.svg', 'w') as f:
        f.write(nav_logo_svg)

    print("Successfully generated all Tatva Structura official logo files!")

if __name__ == '__main__':
    generate()

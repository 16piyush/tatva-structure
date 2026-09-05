#!/usr/bin/env python3
"""
Generates pixel-perfect Tatva Structura SVG logos matching unnamed.png.
"""

def generate_svgs():
    # 1. Exact replica of user uploaded unnamed.png (White background, Emblem on top, TATVA STRUCTURA below)
    full_logo_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" width="100%" height="100%">
  <!-- Background (crisp clean white like unnamed.png) -->
  <rect width="300" height="300" fill="#FFFFFF"/>
  
  <!-- EMBLEM: Centered horizontally at X=150 -->
  <g transform="translate(150, 92) scale(1.05)">
    <!-- 1. Orange Foundation Gable House (Bottom Left) -->
    <polygon points="-44,48 -44,14 -22,-2 0,14 0,48" fill="#E25822" />

    <!-- 2. Outer Deep Navy Framework (Gable Roof & Right Pier) -->
    <path 
      d="
        M -44,-8
        L -44,-24
        L 0,-56
        L 44,-24
        L 44,48
        L 26,48
        L 26,-18
        L 0,-36
        L -26,-18
        L -26,-8
        Z
      " 
      fill="#0E2841" 
    />

    <!-- 3. Inner Deep Navy 'S' Structural Geometry -->
    <path 
      d="
        M -22,-2
        L 0,-18
        L 26,-2
        L 26,14
        L 0,14
        L 0,30
        L 26,30
        L 26,48
        L -2,48
        L -2,30
        L 9,30
        L 9,24
        L -17,24
        L -17,-5
        L 9,-5
        L 9,-11
        L 0,-17
        L -13,-8
        Z
      " 
      fill="#0E2841" 
    />
  </g>

  <!-- TYPOGRAPHY: Exact match of unnamed.png -->
  <g text-anchor="middle" font-family="'Montserrat', 'Inter', 'Cabinet Grotesk', -apple-system, sans-serif">
    <!-- TATVA -->
    <text x="150" y="208" font-size="40" font-weight="900" fill="#0E2841" letter-spacing="0.10em">TATVA</text>
    <!-- STRUCTURA -->
    <text x="153" y="238" font-size="19" font-weight="700" fill="#22394E" letter-spacing="0.26em">STRUCTURA</text>
  </g>
</svg>
'''

    # 2. Transparent Emblem Mark (Only the iconic house/'S'/orange geometry)
    mark_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
  <g transform="translate(60, 58) scale(1.05)">
    <!-- Orange Foundation Gable House -->
    <polygon points="-44,48 -44,14 -22,-2 0,14 0,48" fill="#E25822" />

    <!-- Outer Deep Navy Framework -->
    <path 
      d="
        M -44,-8
        L -44,-24
        L 0,-56
        L 44,-24
        L 44,48
        L 26,48
        L 26,-18
        L 0,-36
        L -26,-18
        L -26,-8
        Z
      " 
      fill="#0E2841" 
    />

    <!-- Inner Deep Navy 'S' Structure -->
    <path 
      d="
        M -22,-2
        L 0,-18
        L 26,-2
        L 26,14
        L 0,14
        L 0,30
        L 26,30
        L 26,48
        L -2,48
        L -2,30
        L 9,30
        L 9,24
        L -17,24
        L -17,-5
        L 9,-5
        L 9,-11
        L 0,-17
        L -13,-8
        Z
      " 
      fill="#0E2841" 
    />
  </g>
</svg>
'''

    # 3. Favicon & App Badge with White Card Container
    favicon_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%">
  <rect width="128" height="128" rx="20" fill="#FFFFFF" />
  <rect width="128" height="128" rx="20" fill="none" stroke="#E2E8F0" stroke-width="4" />
  <g transform="translate(64, 62) scale(1.08)">
    <polygon points="-44,48 -44,14 -22,-2 0,14 0,48" fill="#E25822" />
    <path 
      d="
        M -44,-8
        L -44,-24
        L 0,-56
        L 44,-24
        L 44,48
        L 26,48
        L 26,-18
        L 0,-36
        L -26,-18
        L -26,-8
        Z
      " 
      fill="#0E2841" 
    />
    <path 
      d="
        M -22,-2
        L 0,-18
        L 26,-2
        L 26,14
        L 0,14
        L 0,30
        L 26,30
        L 26,48
        L -2,48
        L -2,30
        L 9,30
        L 9,24
        L -17,24
        L -17,-5
        L 9,-5
        L 9,-11
        L 0,-17
        L -13,-8
        Z
      " 
      fill="#0E2841" 
    />
  </g>
</svg>
'''

    # 4. Horizontal Lockup for Navbar and Headers
    nav_logo_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 85" width="100%" height="100%">
  <!-- Emblem in white rounded badge -->
  <g transform="translate(42, 42)">
    <rect x="-36" y="-36" width="72" height="72" rx="10" fill="#FFFFFF" />
    <g transform="scale(0.58)">
      <polygon points="-44,48 -44,14 -22,-2 0,14 0,48" fill="#E25822" />
      <path 
        d="
          M -44,-8
          L -44,-24
          L 0,-56
          L 44,-24
          L 44,48
          L 26,48
          L 26,-18
          L 0,-36
          L -26,-18
          L -26,-8
          Z
        " 
        fill="#0E2841" 
      />
      <path 
        d="
          M -22,-2
          L 0,-18
          L 26,-2
          L 26,14
          L 0,14
          L 0,30
          L 26,30
          L 26,48
          L -2,48
          L -2,30
          L 9,30
          L 9,24
          L -17,24
          L -17,-5
          L 9,-5
          L 9,-11
          L 0,-17
          L -13,-8
          Z
        " 
        fill="#0E2841" 
      />
    </g>
  </g>

  <!-- Typography -->
  <g font-family="'Montserrat', 'Inter', 'Cabinet Grotesk', -apple-system, sans-serif">
    <text x="92" y="42" font-size="28" font-weight="900" fill="#FFFFFF" letter-spacing="0.08em">
      TATVA<tspan fill="#F27D26">STRUCTURA</tspan>
    </text>
    <text x="94" y="65" font-size="10.5" font-weight="600" fill="#94A3B8" letter-spacing="0.22em" font-family="'JetBrains Mono', monospace">
      STRUCTURAL DESIGN CONSULTANCY
    </text>
  </g>
</svg>
'''

    with open('public/images/tatva_structura_logo.svg', 'w') as f:
        f.write(full_logo_svg)
    with open('public/images/tatva_structura_mark.svg', 'w') as f:
        f.write(mark_svg)
    with open('public/images/tatva_structura_favicon.svg', 'w') as f:
        f.write(favicon_svg)
    with open('public/images/tatva_structura_nav_logo.svg', 'w') as f:
        f.write(nav_logo_svg)
    print("Generated pixel-perfect SVG logos in public/images/")

if __name__ == '__main__':
    generate_svgs()

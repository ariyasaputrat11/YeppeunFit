# **Yeppeun Fit** 

**Yeppeun Fit** is a modern women's fashion affiliate website designed to showcase curated fashion collections and make shopping easier through direct affiliate links. 

The website focuses on a clean, minimal, and premium fashion catalog experience where users can discover outfit inspirations and directly visit shopping platforms. 

# **Project Overview** 

Yeppeun Fit was created as a lightweight fashion discovery platform. 

The main concept: 

- Curated women's fashion collections 

- Product catalog system 

- Category-based browsing • Affiliate shopping links • Responsive design • Modern fashion-style UI 

This project does not sell products directly. All products are curated recommendations connected through affiliate links. 

# **Features** 

## **Homepage** 

Homepage includes: 

- Hero section 

- Fashion introduction 

- Collection showcase 

- Why Yeppeun Fit section 

- Trending section 

- Social media section 

- Footer 

Features: 

Modern landing page Responsive layout Smooth animations 

Collection navigation 

1 

# **Collection System** 

Yeppeun Fit uses a category-based collection system. 

Users can browse: 

- Tops Collection 

- Outerwear Collection 

- Knits Collection 

- Activewear Collection 

- Skirts Collection 

- Daily Wear Collection 

Flow: 

```
Homepage
   ↓
Collection Category
   ↓
Product List
   ↓
Affiliate Shopping Link
```

# **Product System** 

Products are managed using JSON data. 

Location: 

```
data/
 └── products.json
```

Each product contains: 

```
{
"id":1,
"code":"YF-B001",
"category":"tops",
"name":"Oversize Basic Top",
"description":"Product description",
"price":79000,
"image":"top-01.webp",
"badge":"Best Seller",
"rating":4.9,
```

2 

```
"reviews":325,
"affiliate":"AFFILIATE_LINK",
"active":true
}
```

Product features: 

Product code Category filtering Product image Price display Badge system Rating system 

Review count Affiliate button 

# **Category System** 

Category data is stored separately. 

Location: 

```
data/
 └── categories.json
```

Category controls: 

- Collection name 

- Banner image 

- Description 

- Product grouping 

Example: 

```
collection.html?category=tops
```

will display: 

```
Tops Collection
↓
All products with category "tops"
```

3 

# **Design System** 

Yeppeun Fit uses a clean fashion-inspired design. 

Design principles: 

- Minimal • Elegant • Easy navigation • Premium spacing • Mobile friendly 

Typography: 

```
Inter Font
```

Color style: 

```
Black
White
Soft Gray
Yellow Accent (Rating)
```

# **Animation System** 

Yeppeun Fit uses two animation systems. 

## **1. Scroll Animation** 

File: 

```
assets/js/animation.js
```

Function: 

- Fade-up animation 

- Reveal elements while scrolling 

- Smooth appearance 

Applied to: 

- Collection cards 

- Product cards 

- Sections 

4 

• Banner 

## **2. Page Transition** 

File: 

```
assets/js/transition.js
```

Function: 

- Page enter animation 

- Page exit animation 

- Smooth navigation between pages 

Flow: 

```
Click Link
 ↓
Fade Out
 ↓
Open Page
 ↓
Fade In
```

# **Responsive Design** 

Supported devices: 

Desktop 

Tablet 

Mobile 

Responsive features: 

- Mobile navigation 

- Product grid adjustment 

- Banner resizing 

- Image optimization 

5 

# **Project Structure** 

```
YeppeunHub
│
├── assets
│   │
│   ├── css
│   │   └── style.css
│   │
│   ├── js
│   │   ├── app.js
│   │   ├── collection.js
│   │   ├── animation.js
│   │   └── transition.js
│   │
│   └── images
│       ├── hero
│       ├── collection
│       └── products
│
├── data
│   ├── products.json
│   └── categories.json
│
├── index.html
├── collection.html
└── README.md
```

# **Technology Used** 

## **Frontend** 

- HTML5 

- CSS3 

- Vanilla JavaScript 

## **Data** 

- JSON Database 

## **Deployment** 

- GitHub Repository 

- GitHub Pages 

6 

# **Development Journey** 

## **Phase 1 — Initial Setup** 

Created: 

- Project structure • Homepage layout • Basic styling • Navigation system 

## **Phase 2 — Collection System** 

Implemented: 

- Category pages • Dynamic product filtering • JSON product management 

## **Phase 3 — Product Catalog** 

Added: 

- Product cards • Product images • Pricing • Affiliate links 

## **Phase 4 — UI Enhancement** 

Improved: 

- Card design • Hover animation • Banner layout • Responsive behavior 

## **Phase 5 — Premium Features** 

Added: 

- Fade-up animation 

7 









<!-- Start of picture text -->
sf<br><!-- End of picture text -->



Q ~ 2 a il 







ao 


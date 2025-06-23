<!DOCTYPE html>
<html lang="en">
<head>
    <!-- SEO Meta -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="referrer" content="no-referrer-when-downgrade">
    <title>Estrella Records Madrid | Est 2025</title>
    <meta name="description" content="Discover Estrella Records, a hub for independent music and artists. Browse our gallery and find useful links.">
    <meta name="keywords" content="Estrella Records, Independent Music, Music Label, Gallery, Artist Links, Techno, House, Rave, Madrid">

    <!-- Favicon and Icons -->
    <link rel="icon" type="image/x-icon" href="/icons/favicon.ico" />
    <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png">
    <link rel="icon" type="image/png" sizes="48x48" href="/icons/favicon-48x48.png">
    <link rel="icon" type="image/png" sizes="192x192" href="/icons/android-chrome-192x192.png">
    <link rel="icon" type="image/png" sizes="512x512" href="/icons/android-chrome-512x512.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
    <link rel="manifest" href="/icons/site.webmanifest" />
    <meta name="theme-color" content="#FA843C" />




    
    <!-- Open Graph -->
    <meta property="og:title" content="Estrella Records">
    <meta property="og:description" content="Explore music, art, and creativity with Estrella Records.">
    <meta property="og:image" content="https://estrellarecords.com/pics/metapic.png">
    <meta property="og:url" content="https://estrellarecords.com">
    <meta name="twitter:card" content="summary_large_image">

    <!-- jQuery -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

    <!-- Magnific Popup -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js"></script>

    <!-- Analytics -->
    <script async data-id="101465921" src="https://static.getclicky.com/js"></script>

    <!-- Stylesheet -->
    <link rel="stylesheet" type="text/css" href="1.css" media="screen" />

    <!-- Inline styles for overlay links -->
    <style>
        .svg-overlay-link {
            position: absolute;
            font-family: 'Times New Roman', Times, serif;
            font-size: 8pt;
            color: white;
            text-decoration: none;
            pointer-events: auto;
            opacity: 0;
            transition: opacity 1s ease;
        }
        .svg-overlay-link#gallery-link {
            top: 245px; left: 230px;
        }
        .svg-overlay-link#links-link {
            top: 245px; left: 290px;
        }
        .show-links .svg-overlay-link {
            opacity: 1;
        }
    </style>
</head>
<body>

<!-- SVG Logo & Animation -->
<svg id="logo" viewBox="-70 -70 300 194" role="img" aria-labelledby="logoTitle logoDesc">
    <title id="logoTitle">Estrella Records Logo</title>
    <desc id="logoDesc">A glowing heptagram with Estrella Records text and animated button links.</desc>

    <defs>
        <radialGradient id="grad">
            <stop offset="25%" stop-color="#ECEEEA" />
            <stop offset="26%" stop-color="#ECEEEA" />
            <stop offset="26%" stop-color="yellow" />
            <stop offset="30%" stop-color="yellow" />
            <stop offset="30%" stop-color="rgb(250, 132, 60)" />
            <stop offset="60%" stop-color="rgba(250, 132, 60, 0.5)" /> 
            <stop offset="100%" stop-color="rgba(250, 132, 60, 0)" />
        </radialGradient>

        <path id="star" d="M50,10 L61,30 L85,32 L68,50 L74,75 L50,60 L26,75 L32,50 L15,32 L39,30 Z" transform="scale(0.500)" />

        <g id="title" font-weight="550">
            <text style="font-family: 'Times New Roman', Times, serif;" x="47" y="32" font-size="20">Estrella</text>
            <text style="font-family: 'Times New Roman', Times, serif;" x="50" y="49" font-size="15.5">Records</text>
        </g>

        <filter id="blur" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1" />
        </filter>
        <filter id="blur4" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
        </filter>

        <mask id="m">
            <rect x="0" y="0" width="150" height="50" fill="#000" />
            <circle cx="50" cy="50" r="20" fill="#000" />
            <use href="#title" fill="#fff" filter="url(#blur)" />
        </mask>
    </defs>

    <path d="M 250 54 a 1 1 0 0 0 0 -40 h -26 a 1 1 0 0 0 0 40 z" fill="#FFFFFF">
        <animate attributeName="d" values="M 300 54 a 1 1 0 0 0 0 -40 h 0 a 1 1 0 0 0 0 40 z; M 220 54 a 1 1 0 0 0 0 -40 h -200 a 1 1 0 0 0 0 40 z; M 20 54 a 1 1 0 0 0 0 -40 h 0 a 1 1 0 0 0 0 40 z" dur="3s" begin="0s" repeatCount="none" fill="freeze" />
    </path>

    <g transform="translate(202 0)">
        <use href="#title" fill="#F7FFCC" />
        <animateTransform attributeName="transform" attributeType="XML" type="translate" values="262 0; 0 0" dur="2s" begin="1s" fill="freeze" />
    </g>

    <rect fill="gold" mask="url(#m)" x="200" y="10" width="12" height="60" filter="url(#blur)">
        <animate attributeName="x" values="200;35" dur="1.5s" begin="3s" fill="freeze" />
    </rect>

    <g id="starMovement" opacity="0" transform="translate(-30, -19)">
        <g id="starRotation">
            <use href="#star" fill="rgb(250, 132, 60)" />
            <circle cx="25" cy="23" r="2.5" fill="black" />
            <animateTransform attributeName="transform" type="rotate" values="0 25 23;-360 25 23" dur="2s" repeatCount="3" />
        </g>
        <animate attributeName="opacity" values="0;1" dur=".8s" begin="4.5s" fill="freeze" />
        <animateTransform attributeName="transform" type="translate" values="-30,-19; -30, -19; -4.5,11.5" dur="4.5s" begin="0s" fill="freeze" />
    </g>

    <circle cx="20" cy="34" r="0" fill="url(#grad)" filter="url(#blur4)" opacity="0.9">
        <animate attributeName="r" values="0;80;0" dur=".6s" begin="4.5s" fill="freeze" />
    </circle>

    <!-- Original Button Group (now removed interactivity) -->
    <g id="buttons" opacity="0">
        <text x="52" y="62" font-size="8" fill="white">| Gallery |</text>
        <text x="90" y="62" font-size="8" fill="white">| Links |</text>
    </g>

    <animate attributeName="opacity" xlink:href="#buttons" values="0;1" dur="2s" begin="4.5s" fill="freeze" />
</svg>

<!-- HTML Overlay Buttons (replacing SVG links) -->
<a href="#gallery" id="gallery-link" class="svg-overlay-link" role="link" aria-label="Gallery" onclick="clicky.log('#/G','G');">| Gallery |</a>
<a href="#links" id="links-link" class="svg-overlay-link" role="link" aria-label="Links">| Links |</a>

<!-- Script to show HTML links after animation -->
<script>
    setTimeout(() => {
        document.body.classList.add('show-links');
    }, 4500);
</script>

<!-- Fallback for no JavaScript -->
<noscript>
    <style>
        .svg-overlay-link {
            opacity: 1 !important;
        }
    </style>
    <p style="color: white; background: black; padding: 10px;">This site requires JavaScript for full functionality. Please enable it in your browser.</p>
</noscript>

<!-- Custom JS -->
<script src="1.js"></script>

</body>
</html>

/* Persists the dark/light mode choice across page loads using
   localStorage, and mirrors it onto body[data-mode] so the CSS can
   key off either that attribute or the toggle's own native :checked
   state (see style.css) — the toggle works even with this script
   disabled, this file only adds memory (and a system-preference
   default on first visit) on top. */
(function () {
  var KEY = "color-mode"; // "light" | "dark"

  function getSystemPreference() {
    try {
      return window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    } catch (e) {
      return "light";
    }
  }

  function applyStoredState(toggle) {
    var stored = null;
    try {
      stored = localStorage.getItem(KEY);
    } catch (e) {
      // localStorage unavailable (private browsing, sandboxed
      // preview, etc.) — falls back to the system preference for
      // this page; it just won't carry over to the next one.
    }
    var mode = stored || getSystemPreference();
    toggle.checked = mode === "dark";
    document.body.setAttribute("data-mode", mode);
  }

  function saveState(mode) {
    try {
      localStorage.setItem(KEY, mode);
    } catch (e) {
      /* ignore — see note above */
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    var toggle = document.querySelector(".mode-toggle");
    if (!toggle) return;

    applyStoredState(toggle);

    toggle.addEventListener("change", function () {
      var mode = toggle.checked ? "dark" : "light";
      document.body.setAttribute("data-mode", mode);
      saveState(mode);
    });
  });
})();

/* Scatters background images randomly across the page — random
   position, random rotation, no overlap — using a shuffled grid so
   placement stays fast and collision-free even with many images.

   Each entry in BG_IMAGES can set:
     src     — path to the image, relative to this file
     weight  — how often it gets picked relative to the others
               (default 1). An image with weight 3 shows up roughly
               3x as often as one with weight 1.
     minSize / maxSize — this image's own random size range in px
               (defaults to DEFAULT_MIN_SIZE/DEFAULT_MAX_SIZE below
               if omitted), so different pictures can have their own
               scale — e.g. a small icon vs. a bigger illustration.
     link       — optional. If set, this particular image becomes a
                  clickable link (with a little hover pop) instead of
                  purely decorative. Any image without a link stays
                  non-interactive, same as before.
     linkTarget — optional, defaults to "_blank" (opens in a new tab).
                  Set to "_self" to navigate in the same tab instead.
     linkLabel  — optional accessible label for the link (used as both
                  the image's alt text and its aria-label).

   Purely decorative, so if JS is disabled the page just shows the
   plain background color instead — no functionality is lost. */
(function () {
  // capture the script's own resolved URL *synchronously*, while
  // document.currentScript is still valid — this lets us resolve
  // image paths relative to script.js itself (which always lives
  // at the site root) rather than relative to whatever page loaded
  // it, so this works correctly from nested pages like
  // projects/routeboxer.html too.
  var thisScript = document.currentScript;
  var baseDir = thisScript
    ? thisScript.src.substring(0, thisScript.src.lastIndexOf("/") + 1)
    : "";

  var BG_IMAGES = [
    { src: "images/bg-sprites/penguin.png", weight: 1.5, minSize: 100, maxSize: 180, link: "https://drive.google.com/file/d/1IsYBn-oH_NGcHubr2UL1nCdNH8uljZcy/view?usp=sharing", linkLabel: "CV" },
    { src: "images/bg-sprites/miku.png", weight: 1, minSize: 100, maxSize: 180 },
    { src: "images/bg-sprites/miku2.png", weight: 0.3, minSize: 70, maxSize: 120 },
    { src: "images/bg-sprites/i3d.png", weight: 0.5, minSize: 70, maxSize: 90, link: "https://www.i3d.design", linkLabel: "i3d" },
    { src: "images/bg-sprites/pixel_palette.png", weight: 0.5, minSize: 70, maxSize: 120, link: "https://palettelab-nus.github.io", linkLabel: "palette" },
    { src: "images/bg-sprites/mimikyu.png", weight: 0.1, minSize: 90, maxSize: 110 },
    { src: "images/bg-sprites/mimikyu2.png", weight: 0.1, minSize: 90, maxSize: 110 },
    { src: "images/bg-sprites/buto1.png", weight: 0.25, minSize: 90, maxSize: 150 },
    { src: "images/bg-sprites/buto2.png", weight: 0.25, minSize: 90, maxSize: 150 },
    { src: "images/bg-sprites/fugi1.png", weight: 0.1, minSize: 90, maxSize: 150 },
    { src: "images/bg-sprites/fugi2.png", weight: 0.5, minSize: 90, maxSize: 150 },
    { src: "images/bg-sprites/fugi3.png", weight: 0.1, minSize: 90, maxSize: 150 },
    { src: "images/bg-sprites/fugi4.png", weight: 0.1, minSize: 90, maxSize: 150 },
    { src: "images/bg-sprites/hi1.png", weight: 0.1, minSize: 50, maxSize: 110 },
    { src: "images/bg-sprites/cinna1.png", weight: 0.5, minSize: 90, maxSize: 150 },
    { src: "images/bg-sprites/cinnaandbuto1.png", weight: 0.1, minSize: 150, maxSize: 250 },
    { src: "images/bg-sprites/pompom.png", weight: 0.1, minSize: 90, maxSize: 110 },
    { src: "images/bg-sprites/concho1.png", weight: 0.1, minSize: 90, maxSize: 110 },
    { src: "images/bg-sprites/yui1.png", weight: 0.1, minSize: 90, maxSize: 110 },
    { src: "images/bg-sprites/balatro1.png", weight: 0.5, minSize: 90, maxSize: 110 },
    { src: "images/bg-sprites/balatro2.png", weight: 0.1, minSize: 90, maxSize: 110 },
    { src: "images/bg-sprites/aegis.png", weight: 0.1, minSize: 90, maxSize: 110 },
    { src: "images/bg-sprites/osaka.png", weight: 0.3, minSize: 90, maxSize: 110 },
    { src: "images/bg-sprites/tom.png", weight: 0.1, minSize: 90, maxSize: 110 },
    { src: "images/bg-sprites/senic.png", weight: 0.1, minSize: 90, maxSize: 110 },
    { src: "images/bg-sprites/penguin2.png", weight: 0.1, minSize: 90, maxSize: 110 }
  ];

  var CELL_SIZE = 190;         // tightened back up from 220 so more cells
                                // fit per area — denser pattern overall
  var DENSITY = 0.55;          // fraction of grid cells that get filled
                                // (raised from 0.32 — the neighbor-spacing
                                // rule below still caps how tight this can
                                // actually get, so this pushes placement
                                // attempts toward that structural ceiling
                                // rather than causing real overlap)
  var DEFAULT_MIN_SIZE = 55;   // px — used when an image doesn't set its own minSize
  var DEFAULT_MAX_SIZE = 115;  // px — used when an image doesn't set its own maxSize
  var JITTER = 0.5;            // how far images can drift from their cell center (0-1 of cell size)

  // sizes scale down on narrow/mobile viewports and up toward their full
  // declared range on wide desktop viewports, so a 250px sprite doesn't
  // dominate a phone screen but can still reach its full size on desktop
  var SCALE_REFERENCE_WIDTH = 1280; // viewport width where scale = 1.0
  var MIN_SCALE = 0.45;
  var MAX_SCALE = 1.15;

  function getSizeScale(viewportWidth) {
    var scale = viewportWidth / SCALE_REFERENCE_WIDTH;
    if (scale < MIN_SCALE) return MIN_SCALE;
    if (scale > MAX_SCALE) return MAX_SCALE;
    return scale;
  }

  // accepts either a plain "path/to/image.png" string or a
  // { src, weight, minSize, maxSize } object, so both styles work
  function normalizeEntry(entry) {
    if (typeof entry === "string") {
      return { src: entry, weight: 1 };
    }
    return entry;
  }

  function pickWeighted(images) {
    var total = 0;
    var i;
    for (i = 0; i < images.length; i++) {
      total += normalizeEntry(images[i]).weight || 1;
    }
    var r = Math.random() * total;
    for (var j = 0; j < images.length; j++) {
      var entry = normalizeEntry(images[j]);
      r -= entry.weight || 1;
      if (r <= 0) return entry;
    }
    return normalizeEntry(images[images.length - 1]);
  }

  function scatterBackground() {
    if (!BG_IMAGES.length) return;

    var docHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight
    );
    var pageWidth = document.documentElement.clientWidth;
    var sizeScale = getSizeScale(pageWidth);

    var cols = Math.max(1, Math.floor(pageWidth / CELL_SIZE));
    var rows = Math.max(1, Math.ceil(docHeight / CELL_SIZE));

    var filled = {}; // "row,col" -> true, once an image is placed there
    var placements = [];

    function key(r, c) { return r + "," + c; }

    // a cell only counts as "free" if none of its 8 neighbors (or
    // itself) already has an image — this is what stops images from
    // landing right next to each other and reading as a cluster
    function isFree(r, c) {
      for (var dr = -1; dr <= 1; dr++) {
        for (var dc = -1; dc <= 1; dc++) {
          if (filled[key(r + dr, c + dc)]) return false;
        }
      }
      return true;
    }

    function tryPlace(r, c) {
      if (r < 0 || c < 0 || r >= rows || c >= cols) return false;
      if (!isFree(r, c)) return false;
      filled[key(r, c)] = true;
      placements.push([r, c]);
      return true;
    }

    // pass 1: random attempts across the whole grid, respecting spacing —
    // this is what keeps things from clustering
    var allCells = [];
    for (var r1 = 0; r1 < rows; r1++) {
      for (var c1 = 0; c1 < cols; c1++) {
        allCells.push([r1, c1]);
      }
    }
    for (var i = allCells.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = allCells[i];
      allCells[i] = allCells[j];
      allCells[j] = tmp;
    }
    for (var a = 0; a < allCells.length; a++) {
      if (Math.random() < DENSITY) {
        tryPlace(allCells[a][0], allCells[a][1]);
      }
    }

    // pass 2: coverage guarantee — walk the grid in coarse 2x2 sectors
    // and make sure each sector has at least one image, so no region
    // of the page is left completely empty by chance
    for (var sr = 0; sr < rows; sr += 2) {
      for (var sc = 0; sc < cols; sc += 2) {
        var sectorHasImage = false;
        for (var dr2 = 0; dr2 < 2 && !sectorHasImage; dr2++) {
          for (var dc2 = 0; dc2 < 2 && !sectorHasImage; dc2++) {
            if (filled[key(sr + dr2, sc + dc2)]) sectorHasImage = true;
          }
        }
        if (!sectorHasImage) {
          // pick a random cell within this sector and force-place it
          var options = [];
          for (var dr3 = 0; dr3 < 2; dr3++) {
            for (var dc3 = 0; dc3 < 2; dc3++) {
              var rr = sr + dr3, cc = sc + dc3;
              if (rr < rows && cc < cols) options.push([rr, cc]);
            }
          }
          if (options.length) {
            var choice = options[Math.floor(Math.random() * options.length)];
            filled[key(choice[0], choice[1])] = true;
            placements.push(choice);
          }
        }
      }
    }

    var layer = document.createElement("div");
    layer.className = "bg-scatter-layer";
    layer.style.height = docHeight + "px";
    layer.setAttribute("aria-hidden", "true");
    document.body.insertBefore(layer, document.body.firstChild);

    for (var n = 0; n < placements.length; n++) {
      var row = placements[n][0];
      var col = placements[n][1];

      var baseX = col * CELL_SIZE;
      var baseY = row * CELL_SIZE;
      var jitterX = (Math.random() - 0.5) * CELL_SIZE * JITTER;
      var jitterY = (Math.random() - 0.5) * CELL_SIZE * JITTER;

      var picked = pickWeighted(BG_IMAGES);
      var minSize = picked.minSize != null ? picked.minSize : DEFAULT_MIN_SIZE;
      var maxSize = picked.maxSize != null ? picked.maxSize : DEFAULT_MAX_SIZE;
      var size = (minSize + Math.random() * (maxSize - minSize)) * sizeScale;
      var angle = Math.random() * 360;

      // entries with a "link" become clickable <a> wrappers (with a
      // little hover pop as a hint); everything else stays a plain,
      // non-interactive <span> like before
      var isLinked = !!picked.link;
      var slot = document.createElement(isLinked ? "a" : "span");
      slot.className = "bg-scatter-slot";
      slot.style.left = Math.max(0, baseX + jitterX) + "px";
      slot.style.top = Math.max(0, baseY + jitterY) + "px";
      slot.style.width = size + "px";
      slot.style.setProperty("--rot", angle + "deg");

      if (isLinked) {
        slot.href = picked.link;
        slot.target = picked.linkTarget || "_blank";
        slot.rel = "noopener noreferrer";
        if (picked.linkLabel) slot.setAttribute("aria-label", picked.linkLabel);
      }

      var img = document.createElement("img");
      img.src = baseDir + picked.src;
      img.alt = picked.linkLabel || "";
      img.draggable = false;

      slot.appendChild(img);
      layer.appendChild(slot);
    }
  }

  document.addEventListener("DOMContentLoaded", scatterBackground);
})();

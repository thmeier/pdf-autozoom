// Function to determine if the document is in landscape or portrait mode
function getOrientation() {
  const page = document.querySelector('embed') || document.querySelector('object');
  if (!page) return null;

  // Accessing the page's width and height
  const pageWidth = page.offsetWidth;
  const pageHeight = page.offsetHeight;

  return pageWidth > pageHeight ? 'landscape' : 'portrait';
}

// Function to set zoom based on orientation
function setZoomBasedOnOrientation() {
  const PAGE_FIT = 2;
  const PAGE_WIDTH = 3;

  const orientation = getOrientation();
  var scaleSelect = document.getElementById('scaleSelect');

  if (orientation === 'portrait') {
    // Set page-width zoom (Fit to Width)
    //document.body.style.zoom = '100%';
    scaleSelect.selectedIndex = PAGE_WIDTH;

  } else if (orientation === 'landscape') {
    // Set page-fit zoom (Fit to Page)
    //document.body.style.zoom = 'auto';
    scaleSelect.selectedIndex = PAGE_FIT;
  }

  var change = new Event('change');
  scaleSelect.dispatchEvent(change);
}

// Run the zoom function whenever the document is loaded or resized
window.addEventListener('load', setZoomBasedOnOrientation);
window.addEventListener('resize', setZoomBasedOnOrientation);

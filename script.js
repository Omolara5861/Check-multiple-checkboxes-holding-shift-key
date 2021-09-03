(function () { // encapsulating variables with IIFE
    let lastcheck = null; // no checkboxes clicked yet
  
    // get desired checkboxes
    const checkboxes = document.querySelectorAll('div.inbox input[type=checkbox]');
  
    // loop over checkboxes to add event listener
    Array.prototype.forEach.call(checkboxes, function (cbx, idx) {
      cbx.addEventListener('click', function (evt) {
  
        // test for shift key, not first checkbox, and not same checkbox
        if ( evt.shiftKey && null !== lastcheck && idx !== lastcheck ) {
  
          // get range of checks between last-checkbox and shift-checkbox
          // Math.min/max does our sorting for us
          Array.prototype.slice.call(checkboxes, Math.min(lastcheck, idx), Math.max(lastcheck, idx))
            // and loop over each
            .forEach(function (ccbx) {
              ccbx.checked = true;
          });
        }
        lastcheck = idx ;// set this checkbox as last-checked for later
      });
    });
  }());
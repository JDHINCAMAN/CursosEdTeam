var elements = document.getElementsByClassName("card");
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener(
    "mouseenter",
    function () {
      this.className += " bg-primary text-white";
    },
    false
  );
  elements[i].addEventListener(
    "mouseout",
    function () {
      this.className = " card d-inline-block";
    },
    false
  );
}

(function () {
  "use strict";

  var forms = document.querySelectorAll(".needs-validation");

  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var _js_admin_dynamic_fields_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/admin-dynamic-fields.js */ "./assets/js/admin-dynamic-fields.js");
/* harmony import */ var _js_admin_dynamic_fields_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_admin_dynamic_fields_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_addBottle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/addBottle.js */ "./assets/js/addBottle.js");
/* harmony import */ var _js_addBottle_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_addBottle_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _js_filtre_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/filtre.js */ "./assets/js/filtre.js");
/* harmony import */ var _js_filtre_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_filtre_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _js_preview_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/preview.js */ "./assets/js/preview.js");
/* harmony import */ var _js_preview_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_preview_js__WEBPACK_IMPORTED_MODULE_4__);
/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */





console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉');

/***/ }),

/***/ "./assets/js/addBottle.js":
/*!********************************!*\
  !*** ./assets/js/addBottle.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
document.addEventListener('click', function (e) {
  if (e.target.classList.contains('add-to-cellar-btn')) {
    e.preventDefault();
    var bottleId = e.target.dataset.id;
    fetch("/my-cave/add-bottle/".concat(bottleId), {
      method: 'POST',
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    }).then(function (res) {
      return res.json();
    }).then(function (data) {
      console.log("Réponse JSON :", data); // ← voir ce que Symfony retourne vraiment
      if (data.success) {
        // insère la bouteille dynamiquement
      } else {
        alert('Erreur : ' + (data.error || 'Inconnue'));
      }
    })["catch"](function (error) {
      console.error('Erreur réseau ou serveur', error);
    });
  }
});

/***/ }),

/***/ "./assets/js/admin-dynamic-fields.js":
/*!*******************************************!*\
  !*** ./assets/js/admin-dynamic-fields.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
document.addEventListener('DOMContentLoaded', function () {
  var countrySelect = document.querySelector('.js-country select');
  var regionSelect = document.querySelector('.js-region select');
  var grapeSelect = document.querySelector('.js-grape select');
  if (!countrySelect || !regionSelect || !grapeSelect) return;
  countrySelect.addEventListener('change', function () {
    var countryId = this.value;
    if (!countryId) return;

    // Récupère les régions
    fetch("/admin/regions-by-country/".concat(countryId)).then(function (response) {
      return response.json();
    }).then(function (data) {
      regionSelect.innerHTML = '';
      data.forEach(function (region) {
        var option = document.createElement('option');
        option.value = region.id;
        option.textContent = region.name;
        regionSelect.appendChild(option);
      });
    });

    // Récupère les cépages
    fetch("/admin/grapes-by-country/".concat(countryId)).then(function (response) {
      return response.json();
    }).then(function (data) {
      grapeSelect.innerHTML = '';
      data.forEach(function (grape) {
        var option = document.createElement('option');
        option.value = grape.id;
        option.textContent = grape.name;
        grapeSelect.appendChild(option);
      });
    });
  });
});

/***/ }),

/***/ "./assets/js/filtre.js":
/*!*****************************!*\
  !*** ./assets/js/filtre.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
__webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
__webpack_require__(/*! core-js/modules/web.url-search-params.js */ "./node_modules/core-js/modules/web.url-search-params.js");
__webpack_require__(/*! core-js/modules/web.url-search-params.delete.js */ "./node_modules/core-js/modules/web.url-search-params.delete.js");
__webpack_require__(/*! core-js/modules/web.url-search-params.has.js */ "./node_modules/core-js/modules/web.url-search-params.has.js");
__webpack_require__(/*! core-js/modules/web.url-search-params.size.js */ "./node_modules/core-js/modules/web.url-search-params.size.js");
document.addEventListener('DOMContentLoaded', function () {
  var grapeSelect = document.querySelector('select[name="grape_id"]');
  var countrySelect = document.querySelector('select[name="country_id"]');
  var regionSelect = document.querySelector('select[name="region_id"]');
  var resultsDiv = document.querySelector('#results');
  var updateRegions = function updateRegions() {
    var countryId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    fetch("/api/regions?country_id=".concat(countryId)).then(function (res) {
      return res.json();
    }).then(function (data) {
      regionSelect.innerHTML = '<option value="">-- Région --</option>';
      data.forEach(function (region) {
        var opt = document.createElement('option');
        opt.value = region.id;
        opt.textContent = region.name;
        regionSelect.appendChild(opt);
      });
    });
  };
  var updateGrapes = function updateGrapes() {
    var countryId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var currentValue = grapeSelect.value;
    fetch("/api/grapes?country_id=".concat(countryId)).then(function (res) {
      return res.json();
    }).then(function (data) {
      grapeSelect.innerHTML = '<option value="">-- Cépage --</option>';
      var valueStillValid = false;
      data.forEach(function (grape) {
        var opt = document.createElement('option');
        opt.value = grape.id;
        opt.textContent = grape.name;
        if (grape.id === parseInt(currentValue)) {
          valueStillValid = true;
        }
        grapeSelect.appendChild(opt);
      });
      if (valueStillValid) {
        grapeSelect.value = currentValue;
      } else {
        grapeSelect.value = ''; // réinitialise si plus dispo
      }
    });
  };
  var updateCountries = function updateCountries() {
    var grapeId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var currentValue = countrySelect.value;
    fetch("/api/countries?grape_id=".concat(grapeId)).then(function (res) {
      return res.json();
    }).then(function (data) {
      countrySelect.innerHTML = '<option value="">-- Pays --</option>';
      var valueStillValid = false;
      data.forEach(function (country) {
        var opt = document.createElement('option');
        opt.value = country.id;
        opt.textContent = country.name;
        if (country.id === parseInt(currentValue)) {
          valueStillValid = true;
        }
        countrySelect.appendChild(opt);
      });
      if (valueStillValid) {
        countrySelect.value = currentValue;
      } else {
        countrySelect.value = '';
      }
    });
  };
  var fetchFilteredResults = function fetchFilteredResults() {
    var params = new URLSearchParams();
    ['name', 'year', 'grape_id', 'country_id', 'region_id'].forEach(function (field) {
      var el = document.querySelector("[name=\"".concat(field, "\"]"));
      if (el && el.value) {
        params.append(field, el.value);
      }
    });
    resultsDiv.innerHTML = 'Chargement...';
    fetch("/my-cave/filter?".concat(params.toString())).then(function (res) {
      if (!res.ok) throw new Error('Erreur AJAX : ' + res.status);
      return res.text();
    }).then(function (html) {
      resultsDiv.innerHTML = html;
    })["catch"](function (err) {
      resultsDiv.innerHTML = "<p>Erreur : ".concat(err.message, "</p>");
      console.error(err);
    });
  };
  grapeSelect.addEventListener('change', function (e) {
    updateCountries(e.target.value);
    fetchFilteredResults();
  });
  countrySelect.addEventListener('change', function (e) {
    updateRegions(e.target.value);
    updateGrapes(e.target.value);
    fetchFilteredResults();
  });
  regionSelect.addEventListener('change', fetchFilteredResults);
  document.querySelector('input[name="name"]').addEventListener('input', fetchFilteredResults);
  document.querySelector('input[name="year"]').addEventListener('input', fetchFilteredResults);
});

/***/ }),

/***/ "./assets/js/preview.js":
/*!******************************!*\
  !*** ./assets/js/preview.js ***!
  \******************************/
/***/ (() => {

function previewImage(input) {
  var file = input.files[0];
  var preview = document.getElementById('preview-image');
  if (file) {
    var reader = new FileReader();
    reader.onload = function (e) {
      preview.src = e.target.result;
      preview.style.display = 'flex';
    };
    reader.readAsDataURL(file);
  } else {
    preview.src = "#";
    preview.style.display = 'none';
  }
}

/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_dat-559c55"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyxPQUFPLEVBQUVpRCxvQkFBb0IsQ0FBQztFQUM1RmxELFFBQVEsQ0FBQ3NCLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDckIsZ0JBQWdCLENBQUMsT0FBTyxFQUFFaUQsb0JBQW9CLENBQUM7QUFDaEcsQ0FBQyxDQUFDLEM7Ozs7Ozs7Ozs7QUNySEYsU0FBU2MsWUFBWUEsQ0FBQ0MsS0FBSyxFQUFFO0VBQ3JCLElBQU1DLElBQUksR0FBR0QsS0FBSyxDQUFDRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0VBQzNCLElBQU1DLE9BQU8sR0FBR3BFLFFBQVEsQ0FBQ3FFLGNBQWMsQ0FBQyxlQUFlLENBQUM7RUFFeEQsSUFBSUgsSUFBSSxFQUFFO0lBQ04sSUFBTUksTUFBTSxHQUFHLElBQUlDLFVBQVUsQ0FBQyxDQUFDO0lBQy9CRCxNQUFNLENBQUNFLE1BQU0sR0FBRyxVQUFTdEUsQ0FBQyxFQUFFO01BQ3hCa0UsT0FBTyxDQUFDSyxHQUFHLEdBQUd2RSxDQUFDLENBQUNDLE1BQU0sQ0FBQ3VFLE1BQU07TUFDN0JOLE9BQU8sQ0FBQ08sS0FBSyxDQUFDQyxPQUFPLEdBQUcsTUFBTTtJQUNsQyxDQUFDO0lBQ0ROLE1BQU0sQ0FBQ08sYUFBYSxDQUFDWCxJQUFJLENBQUM7RUFDOUIsQ0FBQyxNQUFNO0lBQ0hFLE9BQU8sQ0FBQ0ssR0FBRyxHQUFHLEdBQUc7SUFDakJMLE9BQU8sQ0FBQ08sS0FBSyxDQUFDQyxPQUFPLEdBQUcsTUFBTTtFQUNsQztBQUNKLEM7Ozs7Ozs7Ozs7OztBQ2ZKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWRkQm90dGxlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hZG1pbi1keW5hbWljLWZpZWxkcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZmlsdHJlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wcmV2aWV3LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8qXHJcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcclxuICpcclxuICogVGhpcyBmaWxlIHdpbGwgYmUgaW5jbHVkZWQgb250byB0aGUgcGFnZSB2aWEgdGhlIGltcG9ydG1hcCgpIFR3aWcgZnVuY3Rpb24sXHJcbiAqIHdoaWNoIHNob3VsZCBhbHJlYWR5IGJlIGluIHlvdXIgYmFzZS5odG1sLnR3aWcuXHJcbiAqL1xyXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcclxuaW1wb3J0ICcuL2pzL2FkbWluLWR5bmFtaWMtZmllbGRzLmpzJztcclxuaW1wb3J0ICcuL2pzL2FkZEJvdHRsZS5qcyc7XHJcbmltcG9ydCAnLi9qcy9maWx0cmUuanMnO1xyXG5pbXBvcnQgJy4vanMvcHJldmlldy5qcyc7XHJcbmNvbnNvbGUubG9nKCdUaGlzIGxvZyBjb21lcyBmcm9tIGFzc2V0cy9hcHAuanMgLSB3ZWxjb21lIHRvIEFzc2V0TWFwcGVyISDwn46JJyk7XHJcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FkZC10by1jZWxsYXItYnRuJykpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGJvdHRsZUlkID0gZS50YXJnZXQuZGF0YXNldC5pZDtcclxuXHJcbiAgICAgICAgZmV0Y2goYC9teS1jYXZlL2FkZC1ib3R0bGUvJHtib3R0bGVJZH1gLCB7XHJcbiAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCcsXHJcbiAgICB9XHJcbn0pXHJcbi50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4udGhlbihkYXRhID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiUsOpcG9uc2UgSlNPTiA6XCIsIGRhdGEpOyAvLyDihpAgdm9pciBjZSBxdWUgU3ltZm9ueSByZXRvdXJuZSB2cmFpbWVudFxyXG4gICAgaWYgKGRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgIC8vIGluc8OocmUgbGEgYm91dGVpbGxlIGR5bmFtaXF1ZW1lbnRcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWxlcnQoJ0VycmV1ciA6ICcgKyAoZGF0YS5lcnJvciB8fCAnSW5jb25udWUnKSk7XHJcbiAgICB9XHJcbn0pXHJcbi5jYXRjaChlcnJvciA9PiB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJldXIgcsOpc2VhdSBvdSBzZXJ2ZXVyJywgZXJyb3IpO1xyXG59KVxyXG5cclxuICAgIH19KTsiLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gICAgY29uc3QgY291bnRyeVNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1jb3VudHJ5IHNlbGVjdCcpO1xyXG4gICAgY29uc3QgcmVnaW9uU2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXJlZ2lvbiBzZWxlY3QnKTtcclxuICAgIGNvbnN0IGdyYXBlU2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWdyYXBlIHNlbGVjdCcpO1xyXG5cclxuICAgIGlmICghY291bnRyeVNlbGVjdCB8fCAhcmVnaW9uU2VsZWN0IHx8ICFncmFwZVNlbGVjdCkgcmV0dXJuO1xyXG5cclxuICAgIGNvdW50cnlTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IGNvdW50cnlJZCA9IHRoaXMudmFsdWU7XHJcblxyXG4gICAgICAgIGlmICghY291bnRyeUlkKSByZXR1cm47XHJcblxyXG4gICAgICAgIC8vIFLDqWN1cMOocmUgbGVzIHLDqWdpb25zXHJcbiAgICAgICAgZmV0Y2goYC9hZG1pbi9yZWdpb25zLWJ5LWNvdW50cnkvJHtjb3VudHJ5SWR9YClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIHJlZ2lvblNlbGVjdC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgICAgIGRhdGEuZm9yRWFjaChyZWdpb24gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbi52YWx1ZSA9IHJlZ2lvbi5pZDtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSByZWdpb24ubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICByZWdpb25TZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gUsOpY3Vww6hyZSBsZXMgY8OpcGFnZXNcclxuICAgICAgICBmZXRjaChgL2FkbWluL2dyYXBlcy1ieS1jb3VudHJ5LyR7Y291bnRyeUlkfWApXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBncmFwZVNlbGVjdC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgICAgIGRhdGEuZm9yRWFjaChncmFwZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnZhbHVlID0gZ3JhcGUuaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gZ3JhcGUubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICBncmFwZVNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn0pOyIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgICBjb25zdCBncmFwZVNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdFtuYW1lPVwiZ3JhcGVfaWRcIl0nKTtcclxuICAgIGNvbnN0IGNvdW50cnlTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3RbbmFtZT1cImNvdW50cnlfaWRcIl0nKTtcclxuICAgIGNvbnN0IHJlZ2lvblNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdFtuYW1lPVwicmVnaW9uX2lkXCJdJyk7XHJcbiAgICBjb25zdCByZXN1bHRzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3VsdHMnKTtcclxuXHJcbiAgICBjb25zdCB1cGRhdGVSZWdpb25zID0gKGNvdW50cnlJZCA9ICcnKSA9PiB7XHJcbiAgICAgICAgZmV0Y2goYC9hcGkvcmVnaW9ucz9jb3VudHJ5X2lkPSR7Y291bnRyeUlkfWApXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIHJlZ2lvblNlbGVjdC5pbm5lckhUTUwgPSAnPG9wdGlvbiB2YWx1ZT1cIlwiPi0tIFLDqWdpb24gLS08L29wdGlvbj4nO1xyXG4gICAgICAgICAgICAgICAgZGF0YS5mb3JFYWNoKHJlZ2lvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0LnZhbHVlID0gcmVnaW9uLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdC50ZXh0Q29udGVudCA9IHJlZ2lvbi5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlZ2lvblNlbGVjdC5hcHBlbmRDaGlsZChvcHQpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCB1cGRhdGVHcmFwZXMgPSAoY291bnRyeUlkID0gJycpID0+IHtcclxuICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IGdyYXBlU2VsZWN0LnZhbHVlO1xyXG5cclxuICAgIGZldGNoKGAvYXBpL2dyYXBlcz9jb3VudHJ5X2lkPSR7Y291bnRyeUlkfWApXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGdyYXBlU2VsZWN0LmlubmVySFRNTCA9ICc8b3B0aW9uIHZhbHVlPVwiXCI+LS0gQ8OpcGFnZSAtLTwvb3B0aW9uPic7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZVN0aWxsVmFsaWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIGRhdGEuZm9yRWFjaChncmFwZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICAgICAgICAgIG9wdC52YWx1ZSA9IGdyYXBlLmlkO1xyXG4gICAgICAgICAgICAgICAgb3B0LnRleHRDb250ZW50ID0gZ3JhcGUubmFtZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZ3JhcGUuaWQgPT09IHBhcnNlSW50KGN1cnJlbnRWYWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZVN0aWxsVmFsaWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGdyYXBlU2VsZWN0LmFwcGVuZENoaWxkKG9wdCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKHZhbHVlU3RpbGxWYWxpZCkge1xyXG4gICAgICAgICAgICAgICAgZ3JhcGVTZWxlY3QudmFsdWUgPSBjdXJyZW50VmFsdWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBncmFwZVNlbGVjdC52YWx1ZSA9ICcnOyAvLyByw6lpbml0aWFsaXNlIHNpIHBsdXMgZGlzcG9cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG59O1xyXG5cclxuICAgIGNvbnN0IHVwZGF0ZUNvdW50cmllcyA9IChncmFwZUlkID0gJycpID0+IHtcclxuICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IGNvdW50cnlTZWxlY3QudmFsdWU7XHJcblxyXG4gICAgZmV0Y2goYC9hcGkvY291bnRyaWVzP2dyYXBlX2lkPSR7Z3JhcGVJZH1gKVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBjb3VudHJ5U2VsZWN0LmlubmVySFRNTCA9ICc8b3B0aW9uIHZhbHVlPVwiXCI+LS0gUGF5cyAtLTwvb3B0aW9uPic7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZVN0aWxsVmFsaWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIGRhdGEuZm9yRWFjaChjb3VudHJ5ID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgb3B0LnZhbHVlID0gY291bnRyeS5pZDtcclxuICAgICAgICAgICAgICAgIG9wdC50ZXh0Q29udGVudCA9IGNvdW50cnkubmFtZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY291bnRyeS5pZCA9PT0gcGFyc2VJbnQoY3VycmVudFZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlU3RpbGxWYWxpZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY291bnRyeVNlbGVjdC5hcHBlbmRDaGlsZChvcHQpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmICh2YWx1ZVN0aWxsVmFsaWQpIHtcclxuICAgICAgICAgICAgICAgIGNvdW50cnlTZWxlY3QudmFsdWUgPSBjdXJyZW50VmFsdWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb3VudHJ5U2VsZWN0LnZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxufTtcclxuXHJcbiAgICBjb25zdCBmZXRjaEZpbHRlcmVkUmVzdWx0cyA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XHJcbiAgICAgICAgWyduYW1lJywgJ3llYXInLCAnZ3JhcGVfaWQnLCAnY291bnRyeV9pZCcsICdyZWdpb25faWQnXS5mb3JFYWNoKGZpZWxkID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbbmFtZT1cIiR7ZmllbGR9XCJdYCk7XHJcbiAgICAgICAgICAgIGlmIChlbCAmJiBlbC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgcGFyYW1zLmFwcGVuZChmaWVsZCwgZWwudmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJlc3VsdHNEaXYuaW5uZXJIVE1MID0gJ0NoYXJnZW1lbnQuLi4nO1xyXG5cclxuICAgICAgICBmZXRjaChgL215LWNhdmUvZmlsdGVyPyR7cGFyYW1zLnRvU3RyaW5nKCl9YClcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghcmVzLm9rKSB0aHJvdyBuZXcgRXJyb3IoJ0VycmV1ciBBSkFYIDogJyArIHJlcy5zdGF0dXMpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy50ZXh0KCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKGh0bWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0c0Rpdi5pbm5lckhUTUwgPSBodG1sO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdHNEaXYuaW5uZXJIVE1MID0gYDxwPkVycmV1ciA6ICR7ZXJyLm1lc3NhZ2V9PC9wPmA7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBncmFwZVNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xyXG4gICAgICAgIHVwZGF0ZUNvdW50cmllcyhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgZmV0Y2hGaWx0ZXJlZFJlc3VsdHMoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvdW50cnlTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcclxuICAgICAgICB1cGRhdGVSZWdpb25zKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICB1cGRhdGVHcmFwZXMoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIGZldGNoRmlsdGVyZWRSZXN1bHRzKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZWdpb25TZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZmV0Y2hGaWx0ZXJlZFJlc3VsdHMpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cIm5hbWVcIl0nKS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZldGNoRmlsdGVyZWRSZXN1bHRzKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJ5ZWFyXCJdJykuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmZXRjaEZpbHRlcmVkUmVzdWx0cyk7XHJcbn0pOyIsImZ1bmN0aW9uIHByZXZpZXdJbWFnZShpbnB1dCkge1xyXG4gICAgICAgIGNvbnN0IGZpbGUgPSBpbnB1dC5maWxlc1swXTtcclxuICAgICAgICBjb25zdCBwcmV2aWV3ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXZpZXctaW1hZ2UnKTtcclxuXHJcbiAgICAgICAgaWYgKGZpbGUpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgIHByZXZpZXcuc3JjID0gZS50YXJnZXQucmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgcHJldmlldy5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHByZXZpZXcuc3JjID0gXCIjXCI7XHJcbiAgICAgICAgICAgIHByZXZpZXcuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB9XHJcbiAgICB9IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJwcmV2ZW50RGVmYXVsdCIsImJvdHRsZUlkIiwiZGF0YXNldCIsImlkIiwiZmV0Y2giLCJjb25jYXQiLCJtZXRob2QiLCJoZWFkZXJzIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwic3VjY2VzcyIsImFsZXJ0IiwiZXJyb3IiLCJjb3VudHJ5U2VsZWN0IiwicXVlcnlTZWxlY3RvciIsInJlZ2lvblNlbGVjdCIsImdyYXBlU2VsZWN0IiwiY291bnRyeUlkIiwidmFsdWUiLCJyZXNwb25zZSIsImlubmVySFRNTCIsImZvckVhY2giLCJyZWdpb24iLCJvcHRpb24iLCJjcmVhdGVFbGVtZW50IiwidGV4dENvbnRlbnQiLCJuYW1lIiwiYXBwZW5kQ2hpbGQiLCJncmFwZSIsInJlc3VsdHNEaXYiLCJ1cGRhdGVSZWdpb25zIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwib3B0IiwidXBkYXRlR3JhcGVzIiwiY3VycmVudFZhbHVlIiwidmFsdWVTdGlsbFZhbGlkIiwicGFyc2VJbnQiLCJ1cGRhdGVDb3VudHJpZXMiLCJncmFwZUlkIiwiY291bnRyeSIsImZldGNoRmlsdGVyZWRSZXN1bHRzIiwicGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwiZmllbGQiLCJlbCIsImFwcGVuZCIsInRvU3RyaW5nIiwib2siLCJFcnJvciIsInN0YXR1cyIsInRleHQiLCJodG1sIiwiZXJyIiwibWVzc2FnZSIsInByZXZpZXdJbWFnZSIsImlucHV0IiwiZmlsZSIsImZpbGVzIiwicHJldmlldyIsImdldEVsZW1lbnRCeUlkIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsInNyYyIsInJlc3VsdCIsInN0eWxlIiwiZGlzcGxheSIsInJlYWRBc0RhdGFVUkwiXSwic291cmNlUm9vdCI6IiJ9
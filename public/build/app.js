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
/* harmony import */ var _js_cave_plus_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/cave-plus.js */ "./assets/js/cave-plus.js");
/* harmony import */ var _js_cave_plus_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_js_cave_plus_js__WEBPACK_IMPORTED_MODULE_5__);
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

function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
__webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
__webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
__webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
__webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
__webpack_require__(/*! core-js/modules/es.object.proto.js */ "./node_modules/core-js/modules/es.object.proto.js");
__webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
document.addEventListener('DOMContentLoaded', function () {
  var resultsContainer = document.getElementById('results');
  if (!resultsContainer) {
    console.error('#results introuvable');
    return;
  }
  resultsContainer.addEventListener('click', /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(e) {
      var btn, bottleId, res, data, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            btn = e.target;
            if (btn.classList.contains('add-to-cellar-btn')) {
              _context.n = 1;
              break;
            }
            return _context.a(2);
          case 1:
            e.preventDefault();
            bottleId = btn.dataset.id;
            if (bottleId) {
              _context.n = 2;
              break;
            }
            console.error('data-id manquant sur le bouton');
            return _context.a(2);
          case 2:
            _context.p = 2;
            _context.n = 3;
            return fetch("/my-cave/add-bottle/".concat(bottleId), {
              method: 'POST',
              headers: {
                'X-Requested-With': 'XMLHttpRequest'
              }
            });
          case 3:
            res = _context.v;
            if (res.ok) {
              _context.n = 4;
              break;
            }
            throw new Error("Statut HTTP ".concat(res.status));
          case 4:
            _context.n = 5;
            return res.json();
          case 5:
            data = _context.v;
            if (data.success) {
              _context.n = 6;
              break;
            }
            alert('Erreur lors de l’ajout : ' + (data.error || 'Inconnue'));
            return _context.a(2);
          case 6:
            // Recharge la page pour afficher la cave à jour
            window.location.reload();
            _context.n = 8;
            break;
          case 7:
            _context.p = 7;
            _t = _context.v;
            console.error('Ajout échoué :', _t);
            alert('Échec de l’ajout, veuillez réessayer.');
          case 8:
            return _context.a(2);
        }
      }, _callee, null, [[2, 7]]);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
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

/***/ "./assets/js/cave-plus.js":
/*!********************************!*\
  !*** ./assets/js/cave-plus.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
// cave-plus.js

document.addEventListener('DOMContentLoaded', function () {
  // Récupération des données injectées par Twig
  var bottles = window.allBottlesFromBackend || [];
  var perPage = 12;
  var currentPage = 1;

  // Sélecteurs du DOM (ID ou classes fallback)
  var grid = document.getElementById('bottles-grid') || document.querySelector('.shelf');
  var pag = document.getElementById('pagination') || document.querySelector('.pagination');
  if (!grid || !pag) {
    console.error('🛑 #bottles-grid (ou .shelf) ou #pagination (ou .pagination) introuvable');
    return;
  }

  // Calcule le nombre total de pages
  function getTotalPages() {
    return Math.ceil(bottles.length / perPage);
  }

  // Affiche les bouteilles pour la page courante
  function renderGrid() {
    grid.innerHTML = '';
    var start = (currentPage - 1) * perPage;
    var pageItems = bottles.slice(start, start + perPage);
    pageItems.forEach(function (b) {
      // Wrapper .bottle
      var bottleWrapper = document.createElement('div');
      bottleWrapper.className = 'bottle';

      // Carte .bottle-card
      var card = document.createElement('a');
      card.className = 'bottle-card';
      card.href = "/bottle/".concat(b.id);

      // Titre
      var title = document.createElement('p');
      title.textContent = "".concat(b.name, " (").concat(b.year, ")");
      card.appendChild(title);

      // Image
      var img = document.createElement('img');
      img.src = b.imageUrl;
      img.alt = b.name;
      card.appendChild(img);

      // Formulaire de retrait INSIDE de la card
      var form = document.createElement('form');
      form.method = 'POST';
      form.action = "/my-cave/bottle/".concat(b.id, "/remove");
      var button = document.createElement('button');
      button.type = 'submit';
      button.className = 'btn';
      button.textContent = 'Retirer';
      form.appendChild(button);
      card.appendChild(form);

      // Assemblage dans le DOM
      bottleWrapper.appendChild(card);
      grid.appendChild(bottleWrapper);
    });
  }

  // Affiche la pagination
  function renderPagination() {
    pag.innerHTML = '';
    var totalPages = getTotalPages();
    if (totalPages <= 1) return;

    // Bouton Précédent
    var btnPrev = document.createElement('button');
    btnPrev.type = 'button';
    btnPrev.textContent = '‹';
    btnPrev.disabled = currentPage === 1;
    btnPrev.addEventListener('click', function () {
      if (currentPage > 1) {
        currentPage--;
        update();
      }
    });
    pag.appendChild(btnPrev);

    // Numéros de pages
    var _loop = function _loop(i) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.textContent = i;
      if (i === currentPage) btn.classList.add('active');
      btn.addEventListener('click', function () {
        currentPage = i;
        update();
      });
      pag.appendChild(btn);
    };
    for (var i = 1; i <= totalPages; i++) {
      _loop(i);
    }

    // Bouton Suivant
    var btnNext = document.createElement('button');
    btnNext.type = 'button';
    btnNext.textContent = '›';
    btnNext.disabled = currentPage === totalPages;
    btnNext.addEventListener('click', function () {
      if (currentPage < totalPages) {
        currentPage++;
        update();
      }
    });
    pag.appendChild(btnNext);
  }

  // Met à jour la grille et la pagination
  function update() {
    renderGrid();
    renderPagination();
  }
  window.updateCave = update;
  // Initialisation
  update();
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-184b9d"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RyxVQUFTekssQ0FBQyxFQUFFO01BQ3hCc0ssT0FBTyxDQUFDMUMsR0FBRyxHQUFHNUgsQ0FBQyxDQUFDb0UsTUFBTSxDQUFDc0csTUFBTTtNQUM3QkosT0FBTyxDQUFDSyxLQUFLLENBQUNDLE9BQU8sR0FBRyxNQUFNO0lBQ2xDLENBQUM7SUFDREwsTUFBTSxDQUFDTSxhQUFhLENBQUNULElBQUksQ0FBQztFQUM5QixDQUFDLE1BQU07SUFDSEUsT0FBTyxDQUFDMUMsR0FBRyxHQUFHLEdBQUc7SUFDakIwQyxPQUFPLENBQUNLLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE1BQU07RUFDbEM7QUFDSixDOzs7Ozs7Ozs7Ozs7QUNmSiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FkZEJvdHRsZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWRtaW4tZHluYW1pYy1maWVsZHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NhdmUtcGx1cy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZmlsdHJlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wcmV2aWV3LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8qXHJcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcclxuICpcclxuICogVGhpcyBmaWxlIHdpbGwgYmUgaW5jbHVkZWQgb250byB0aGUgcGFnZSB2aWEgdGhlIGltcG9ydG1hcCgpIFR3aWcgZnVuY3Rpb24sXHJcbiAqIHdoaWNoIHNob3VsZCBhbHJlYWR5IGJlIGluIHlvdXIgYmFzZS5odG1sLnR3aWcuXHJcbiAqL1xyXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcclxuaW1wb3J0ICcuL2pzL2FkbWluLWR5bmFtaWMtZmllbGRzLmpzJztcclxuaW1wb3J0ICcuL2pzL2FkZEJvdHRsZS5qcyc7XHJcbmltcG9ydCAnLi9qcy9maWx0cmUuanMnO1xyXG5pbXBvcnQgJy4vanMvcHJldmlldy5qcyc7XHJcbmltcG9ydCAnLi9qcy9jYXZlLXBsdXMuanMnO1xyXG5jb25zb2xlLmxvZygnVGhpcyBsb2cgY29tZXMgZnJvbSBhc3NldHMvYXBwLmpzIC0gd2VsY29tZSB0byBBc3NldE1hcHBlciEg8J+OiScpO1xyXG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gIGNvbnN0IHJlc3VsdHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0cycpO1xyXG4gIGlmICghcmVzdWx0c0NvbnRhaW5lcikge1xyXG4gICAgY29uc29sZS5lcnJvcignI3Jlc3VsdHMgaW50cm91dmFibGUnKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIHJlc3VsdHNDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyBlID0+IHtcclxuICAgIGNvbnN0IGJ0biA9IGUudGFyZ2V0O1xyXG4gICAgaWYgKCFidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdhZGQtdG8tY2VsbGFyLWJ0bicpKSByZXR1cm47XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgYm90dGxlSWQgPSBidG4uZGF0YXNldC5pZDtcclxuICAgIGlmICghYm90dGxlSWQpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignZGF0YS1pZCBtYW5xdWFudCBzdXIgbGUgYm91dG9uJyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgL215LWNhdmUvYWRkLWJvdHRsZS8ke2JvdHRsZUlkfWAsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7ICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0JyB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKGBTdGF0dXQgSFRUUCAke3Jlcy5zdGF0dXN9YCk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICAgICAgaWYgKCFkYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICBhbGVydCgnRXJyZXVyIGxvcnMgZGUgbOKAmWFqb3V0IDogJyArIChkYXRhLmVycm9yIHx8ICdJbmNvbm51ZScpKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFJlY2hhcmdlIGxhIHBhZ2UgcG91ciBhZmZpY2hlciBsYSBjYXZlIMOgIGpvdXJcclxuICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Fqb3V0IMOpY2hvdcOpIDonLCBlcnIpO1xyXG4gICAgICBhbGVydCgnw4ljaGVjIGRlIGzigJlham91dCwgdmV1aWxsZXogcsOpZXNzYXllci4nKTtcclxuICAgIH1cclxuICB9KTtcclxufSk7IiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICAgIGNvbnN0IGNvdW50cnlTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtY291bnRyeSBzZWxlY3QnKTtcclxuICAgIGNvbnN0IHJlZ2lvblNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1yZWdpb24gc2VsZWN0Jyk7XHJcbiAgICBjb25zdCBncmFwZVNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1ncmFwZSBzZWxlY3QnKTtcclxuXHJcbiAgICBpZiAoIWNvdW50cnlTZWxlY3QgfHwgIXJlZ2lvblNlbGVjdCB8fCAhZ3JhcGVTZWxlY3QpIHJldHVybjtcclxuXHJcbiAgICBjb3VudHJ5U2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBjb3VudHJ5SWQgPSB0aGlzLnZhbHVlO1xyXG5cclxuICAgICAgICBpZiAoIWNvdW50cnlJZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAvLyBSw6ljdXDDqHJlIGxlcyByw6lnaW9uc1xyXG4gICAgICAgIGZldGNoKGAvYWRtaW4vcmVnaW9ucy1ieS1jb3VudHJ5LyR7Y291bnRyeUlkfWApXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZWdpb25TZWxlY3QuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgICAgICAgICBkYXRhLmZvckVhY2gocmVnaW9uID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb24udmFsdWUgPSByZWdpb24uaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gcmVnaW9uLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVnaW9uU2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFLDqWN1cMOocmUgbGVzIGPDqXBhZ2VzXHJcbiAgICAgICAgZmV0Y2goYC9hZG1pbi9ncmFwZXMtYnktY291bnRyeS8ke2NvdW50cnlJZH1gKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgZ3JhcGVTZWxlY3QuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgICAgICAgICBkYXRhLmZvckVhY2goZ3JhcGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbi52YWx1ZSA9IGdyYXBlLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGdyYXBlLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JhcGVTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59KTsiLCIvLyBjYXZlLXBsdXMuanNcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgLy8gUsOpY3Vww6lyYXRpb24gZGVzIGRvbm7DqWVzIGluamVjdMOpZXMgcGFyIFR3aWdcclxuICBjb25zdCBib3R0bGVzID0gd2luZG93LmFsbEJvdHRsZXNGcm9tQmFja2VuZCB8fCBbXTtcclxuICBjb25zdCBwZXJQYWdlID0gMTI7XHJcbiAgbGV0IGN1cnJlbnRQYWdlID0gMTtcclxuXHJcbiAgLy8gU8OpbGVjdGV1cnMgZHUgRE9NIChJRCBvdSBjbGFzc2VzIGZhbGxiYWNrKVxyXG4gIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm90dGxlcy1ncmlkJykgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoZWxmJyk7XHJcbiAgY29uc3QgcGFnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2luYXRpb24nKSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnaW5hdGlvbicpO1xyXG4gIGlmICghZ3JpZCB8fCAhcGFnKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCfwn5uRICNib3R0bGVzLWdyaWQgKG91IC5zaGVsZikgb3UgI3BhZ2luYXRpb24gKG91IC5wYWdpbmF0aW9uKSBpbnRyb3V2YWJsZScpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLy8gQ2FsY3VsZSBsZSBub21icmUgdG90YWwgZGUgcGFnZXNcclxuICBmdW5jdGlvbiBnZXRUb3RhbFBhZ2VzKCkge1xyXG4gICAgcmV0dXJuIE1hdGguY2VpbChib3R0bGVzLmxlbmd0aCAvIHBlclBhZ2UpO1xyXG4gIH1cclxuXHJcbiAgLy8gQWZmaWNoZSBsZXMgYm91dGVpbGxlcyBwb3VyIGxhIHBhZ2UgY291cmFudGVcclxuICBmdW5jdGlvbiByZW5kZXJHcmlkKCkge1xyXG4gICAgZ3JpZC5pbm5lckhUTUwgPSAnJztcclxuICAgIGNvbnN0IHN0YXJ0ID0gKGN1cnJlbnRQYWdlIC0gMSkgKiBwZXJQYWdlO1xyXG4gICAgY29uc3QgcGFnZUl0ZW1zID0gYm90dGxlcy5zbGljZShzdGFydCwgc3RhcnQgKyBwZXJQYWdlKTtcclxuXHJcbiAgICBwYWdlSXRlbXMuZm9yRWFjaChiID0+IHtcclxuICAgICAgLy8gV3JhcHBlciAuYm90dGxlXHJcbiAgICAgIGNvbnN0IGJvdHRsZVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgYm90dGxlV3JhcHBlci5jbGFzc05hbWUgPSAnYm90dGxlJztcclxuXHJcbiAgICAgIC8vIENhcnRlIC5ib3R0bGUtY2FyZFxyXG4gICAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICBjYXJkLmNsYXNzTmFtZSA9ICdib3R0bGUtY2FyZCc7XHJcbiAgICAgIGNhcmQuaHJlZiA9IGAvYm90dGxlLyR7Yi5pZH1gO1xyXG5cclxuICAgICAgLy8gVGl0cmVcclxuICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gYCR7Yi5uYW1lfSAoJHtiLnllYXJ9KWA7XHJcbiAgICAgIGNhcmQuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG5cclxuICAgICAgLy8gSW1hZ2VcclxuICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgIGltZy5zcmMgPSBiLmltYWdlVXJsO1xyXG4gICAgICBpbWcuYWx0ID0gYi5uYW1lO1xyXG4gICAgICBjYXJkLmFwcGVuZENoaWxkKGltZyk7XHJcblxyXG4gICAgICAvLyBGb3JtdWxhaXJlIGRlIHJldHJhaXQgSU5TSURFIGRlIGxhIGNhcmRcclxuICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICAgICAgZm9ybS5tZXRob2QgPSAnUE9TVCc7XHJcbiAgICAgIGZvcm0uYWN0aW9uID0gYC9teS1jYXZlL2JvdHRsZS8ke2IuaWR9L3JlbW92ZWA7XHJcbiAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICBidXR0b24udHlwZSA9ICdzdWJtaXQnO1xyXG4gICAgICBidXR0b24uY2xhc3NOYW1lID0gJ2J0bic7XHJcbiAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdSZXRpcmVyJztcclxuICAgICAgZm9ybS5hcHBlbmRDaGlsZChidXR0b24pO1xyXG4gICAgICBjYXJkLmFwcGVuZENoaWxkKGZvcm0pO1xyXG5cclxuICAgICAgLy8gQXNzZW1ibGFnZSBkYW5zIGxlIERPTVxyXG4gICAgICBib3R0bGVXcmFwcGVyLmFwcGVuZENoaWxkKGNhcmQpO1xyXG4gICAgICBncmlkLmFwcGVuZENoaWxkKGJvdHRsZVdyYXBwZXIpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBBZmZpY2hlIGxhIHBhZ2luYXRpb25cclxuICBmdW5jdGlvbiByZW5kZXJQYWdpbmF0aW9uKCkge1xyXG4gICAgcGFnLmlubmVySFRNTCA9ICcnO1xyXG4gICAgY29uc3QgdG90YWxQYWdlcyA9IGdldFRvdGFsUGFnZXMoKTtcclxuICAgIGlmICh0b3RhbFBhZ2VzIDw9IDEpIHJldHVybjtcclxuXHJcbiAgICAvLyBCb3V0b24gUHLDqWPDqWRlbnRcclxuICAgIGNvbnN0IGJ0blByZXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGJ0blByZXYudHlwZSA9ICdidXR0b24nO1xyXG4gICAgYnRuUHJldi50ZXh0Q29udGVudCA9ICfigLknO1xyXG4gICAgYnRuUHJldi5kaXNhYmxlZCA9IGN1cnJlbnRQYWdlID09PSAxO1xyXG4gICAgYnRuUHJldi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgaWYgKGN1cnJlbnRQYWdlID4gMSkge1xyXG4gICAgICAgIGN1cnJlbnRQYWdlLS07XHJcbiAgICAgICAgdXBkYXRlKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcGFnLmFwcGVuZENoaWxkKGJ0blByZXYpO1xyXG5cclxuICAgIC8vIE51bcOpcm9zIGRlIHBhZ2VzXHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSB0b3RhbFBhZ2VzOyBpKyspIHtcclxuICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgIGJ0bi50eXBlID0gJ2J1dHRvbic7XHJcbiAgICAgIGJ0bi50ZXh0Q29udGVudCA9IGk7XHJcbiAgICAgIGlmIChpID09PSBjdXJyZW50UGFnZSkgYnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgY3VycmVudFBhZ2UgPSBpO1xyXG4gICAgICAgIHVwZGF0ZSgpO1xyXG4gICAgICB9KTtcclxuICAgICAgcGFnLmFwcGVuZENoaWxkKGJ0bik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQm91dG9uIFN1aXZhbnRcclxuICAgIGNvbnN0IGJ0bk5leHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGJ0bk5leHQudHlwZSA9ICdidXR0b24nO1xyXG4gICAgYnRuTmV4dC50ZXh0Q29udGVudCA9ICfigLonO1xyXG4gICAgYnRuTmV4dC5kaXNhYmxlZCA9IGN1cnJlbnRQYWdlID09PSB0b3RhbFBhZ2VzO1xyXG4gICAgYnRuTmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgaWYgKGN1cnJlbnRQYWdlIDwgdG90YWxQYWdlcykge1xyXG4gICAgICAgIGN1cnJlbnRQYWdlKys7XHJcbiAgICAgICAgdXBkYXRlKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcGFnLmFwcGVuZENoaWxkKGJ0bk5leHQpO1xyXG4gIH1cclxuXHJcbiAgLy8gTWV0IMOgIGpvdXIgbGEgZ3JpbGxlIGV0IGxhIHBhZ2luYXRpb25cclxuICBmdW5jdGlvbiB1cGRhdGUoKSB7XHJcbiAgICByZW5kZXJHcmlkKCk7XHJcbiAgICByZW5kZXJQYWdpbmF0aW9uKCk7XHJcbiAgfVxyXG4gICAgd2luZG93LnVwZGF0ZUNhdmUgPSB1cGRhdGU7XHJcbiAgLy8gSW5pdGlhbGlzYXRpb25cclxuICB1cGRhdGUoKTtcclxufSk7XHJcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgICBjb25zdCBncmFwZVNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdFtuYW1lPVwiZ3JhcGVfaWRcIl0nKTtcclxuICAgIGNvbnN0IGNvdW50cnlTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3RbbmFtZT1cImNvdW50cnlfaWRcIl0nKTtcclxuICAgIGNvbnN0IHJlZ2lvblNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdFtuYW1lPVwicmVnaW9uX2lkXCJdJyk7XHJcbiAgICBjb25zdCByZXN1bHRzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3VsdHMnKTtcclxuXHJcbiAgICBjb25zdCB1cGRhdGVSZWdpb25zID0gKGNvdW50cnlJZCA9ICcnKSA9PiB7XHJcbiAgICAgICAgZmV0Y2goYC9hcGkvcmVnaW9ucz9jb3VudHJ5X2lkPSR7Y291bnRyeUlkfWApXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIHJlZ2lvblNlbGVjdC5pbm5lckhUTUwgPSAnPG9wdGlvbiB2YWx1ZT1cIlwiPi0tIFLDqWdpb24gLS08L29wdGlvbj4nO1xyXG4gICAgICAgICAgICAgICAgZGF0YS5mb3JFYWNoKHJlZ2lvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0LnZhbHVlID0gcmVnaW9uLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdC50ZXh0Q29udGVudCA9IHJlZ2lvbi5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlZ2lvblNlbGVjdC5hcHBlbmRDaGlsZChvcHQpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCB1cGRhdGVHcmFwZXMgPSAoY291bnRyeUlkID0gJycpID0+IHtcclxuICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IGdyYXBlU2VsZWN0LnZhbHVlO1xyXG5cclxuICAgIGZldGNoKGAvYXBpL2dyYXBlcz9jb3VudHJ5X2lkPSR7Y291bnRyeUlkfWApXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGdyYXBlU2VsZWN0LmlubmVySFRNTCA9ICc8b3B0aW9uIHZhbHVlPVwiXCI+LS0gQ8OpcGFnZSAtLTwvb3B0aW9uPic7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZVN0aWxsVmFsaWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIGRhdGEuZm9yRWFjaChncmFwZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICAgICAgICAgIG9wdC52YWx1ZSA9IGdyYXBlLmlkO1xyXG4gICAgICAgICAgICAgICAgb3B0LnRleHRDb250ZW50ID0gZ3JhcGUubmFtZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZ3JhcGUuaWQgPT09IHBhcnNlSW50KGN1cnJlbnRWYWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZVN0aWxsVmFsaWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGdyYXBlU2VsZWN0LmFwcGVuZENoaWxkKG9wdCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKHZhbHVlU3RpbGxWYWxpZCkge1xyXG4gICAgICAgICAgICAgICAgZ3JhcGVTZWxlY3QudmFsdWUgPSBjdXJyZW50VmFsdWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBncmFwZVNlbGVjdC52YWx1ZSA9ICcnOyAvLyByw6lpbml0aWFsaXNlIHNpIHBsdXMgZGlzcG9cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG59O1xyXG5cclxuICAgIGNvbnN0IHVwZGF0ZUNvdW50cmllcyA9IChncmFwZUlkID0gJycpID0+IHtcclxuICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IGNvdW50cnlTZWxlY3QudmFsdWU7XHJcblxyXG4gICAgZmV0Y2goYC9hcGkvY291bnRyaWVzP2dyYXBlX2lkPSR7Z3JhcGVJZH1gKVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBjb3VudHJ5U2VsZWN0LmlubmVySFRNTCA9ICc8b3B0aW9uIHZhbHVlPVwiXCI+LS0gUGF5cyAtLTwvb3B0aW9uPic7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZVN0aWxsVmFsaWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIGRhdGEuZm9yRWFjaChjb3VudHJ5ID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgb3B0LnZhbHVlID0gY291bnRyeS5pZDtcclxuICAgICAgICAgICAgICAgIG9wdC50ZXh0Q29udGVudCA9IGNvdW50cnkubmFtZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY291bnRyeS5pZCA9PT0gcGFyc2VJbnQoY3VycmVudFZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlU3RpbGxWYWxpZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY291bnRyeVNlbGVjdC5hcHBlbmRDaGlsZChvcHQpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmICh2YWx1ZVN0aWxsVmFsaWQpIHtcclxuICAgICAgICAgICAgICAgIGNvdW50cnlTZWxlY3QudmFsdWUgPSBjdXJyZW50VmFsdWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb3VudHJ5U2VsZWN0LnZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxufTtcclxuXHJcbiAgICBjb25zdCBmZXRjaEZpbHRlcmVkUmVzdWx0cyA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XHJcbiAgICAgICAgWyduYW1lJywgJ3llYXInLCAnZ3JhcGVfaWQnLCAnY291bnRyeV9pZCcsICdyZWdpb25faWQnXS5mb3JFYWNoKGZpZWxkID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbbmFtZT1cIiR7ZmllbGR9XCJdYCk7XHJcbiAgICAgICAgICAgIGlmIChlbCAmJiBlbC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgcGFyYW1zLmFwcGVuZChmaWVsZCwgZWwudmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJlc3VsdHNEaXYuaW5uZXJIVE1MID0gJ0NoYXJnZW1lbnQuLi4nO1xyXG5cclxuICAgICAgICBmZXRjaChgL215LWNhdmUvZmlsdGVyPyR7cGFyYW1zLnRvU3RyaW5nKCl9YClcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghcmVzLm9rKSB0aHJvdyBuZXcgRXJyb3IoJ0VycmV1ciBBSkFYIDogJyArIHJlcy5zdGF0dXMpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy50ZXh0KCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKGh0bWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0c0Rpdi5pbm5lckhUTUwgPSBodG1sO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdHNEaXYuaW5uZXJIVE1MID0gYDxwPkVycmV1ciA6ICR7ZXJyLm1lc3NhZ2V9PC9wPmA7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBncmFwZVNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xyXG4gICAgICAgIHVwZGF0ZUNvdW50cmllcyhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgZmV0Y2hGaWx0ZXJlZFJlc3VsdHMoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvdW50cnlTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcclxuICAgICAgICB1cGRhdGVSZWdpb25zKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICB1cGRhdGVHcmFwZXMoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIGZldGNoRmlsdGVyZWRSZXN1bHRzKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZWdpb25TZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZmV0Y2hGaWx0ZXJlZFJlc3VsdHMpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cIm5hbWVcIl0nKS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZldGNoRmlsdGVyZWRSZXN1bHRzKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJ5ZWFyXCJdJykuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmZXRjaEZpbHRlcmVkUmVzdWx0cyk7XHJcbn0pOyIsImZ1bmN0aW9uIHByZXZpZXdJbWFnZShpbnB1dCkge1xyXG4gICAgICAgIGNvbnN0IGZpbGUgPSBpbnB1dC5maWxlc1swXTtcclxuICAgICAgICBjb25zdCBwcmV2aWV3ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXZpZXctaW1hZ2UnKTtcclxuXHJcbiAgICAgICAgaWYgKGZpbGUpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgIHByZXZpZXcuc3JjID0gZS50YXJnZXQucmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgcHJldmlldy5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHByZXZpZXcuc3JjID0gXCIjXCI7XHJcbiAgICAgICAgICAgIHByZXZpZXcuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB9XHJcbiAgICB9IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJlIiwidCIsInIiLCJTeW1ib2wiLCJuIiwiaXRlcmF0b3IiLCJvIiwidG9TdHJpbmdUYWciLCJpIiwiYyIsInByb3RvdHlwZSIsIkdlbmVyYXRvciIsInUiLCJPYmplY3QiLCJjcmVhdGUiLCJfcmVnZW5lcmF0b3JEZWZpbmUyIiwiZiIsInAiLCJ5IiwiRyIsInYiLCJhIiwiZCIsImJpbmQiLCJsZW5ndGgiLCJsIiwiVHlwZUVycm9yIiwiY2FsbCIsImRvbmUiLCJ2YWx1ZSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJnZXRQcm90b3R5cGVPZiIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiZGlzcGxheU5hbWUiLCJfcmVnZW5lcmF0b3IiLCJ3IiwibSIsImRlZmluZVByb3BlcnR5IiwiX3JlZ2VuZXJhdG9yRGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiX2ludm9rZSIsInJlcXVpcmUiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJQcm9taXNlIiwicmVzb2x2ZSIsInRoZW4iLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3VtZW50cyIsImFwcGx5IiwiX25leHQiLCJfdGhyb3ciLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZXN1bHRzQ29udGFpbmVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJlcnJvciIsIl9yZWYiLCJfY2FsbGVlIiwiYnRuIiwiYm90dGxlSWQiLCJyZXMiLCJkYXRhIiwiX3QiLCJfY29udGV4dCIsInRhcmdldCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicHJldmVudERlZmF1bHQiLCJkYXRhc2V0IiwiaWQiLCJmZXRjaCIsImNvbmNhdCIsIm1ldGhvZCIsImhlYWRlcnMiLCJvayIsIkVycm9yIiwic3RhdHVzIiwianNvbiIsInN1Y2Nlc3MiLCJhbGVydCIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiX3giLCJjb3VudHJ5U2VsZWN0IiwicXVlcnlTZWxlY3RvciIsInJlZ2lvblNlbGVjdCIsImdyYXBlU2VsZWN0IiwiY291bnRyeUlkIiwicmVzcG9uc2UiLCJpbm5lckhUTUwiLCJmb3JFYWNoIiwicmVnaW9uIiwib3B0aW9uIiwiY3JlYXRlRWxlbWVudCIsInRleHRDb250ZW50IiwibmFtZSIsImFwcGVuZENoaWxkIiwiZ3JhcGUiLCJib3R0bGVzIiwiYWxsQm90dGxlc0Zyb21CYWNrZW5kIiwicGVyUGFnZSIsImN1cnJlbnRQYWdlIiwiZ3JpZCIsInBhZyIsImdldFRvdGFsUGFnZXMiLCJNYXRoIiwiY2VpbCIsInJlbmRlckdyaWQiLCJzdGFydCIsInBhZ2VJdGVtcyIsInNsaWNlIiwiYiIsImJvdHRsZVdyYXBwZXIiLCJjbGFzc05hbWUiLCJjYXJkIiwiaHJlZiIsInRpdGxlIiwieWVhciIsImltZyIsInNyYyIsImltYWdlVXJsIiwiYWx0IiwiZm9ybSIsImFjdGlvbiIsImJ1dHRvbiIsInR5cGUiLCJyZW5kZXJQYWdpbmF0aW9uIiwidG90YWxQYWdlcyIsImJ0blByZXYiLCJkaXNhYmxlZCIsInVwZGF0ZSIsIl9sb29wIiwiYWRkIiwiYnRuTmV4dCIsInVwZGF0ZUNhdmUiLCJyZXN1bHRzRGl2IiwidXBkYXRlUmVnaW9ucyIsInVuZGVmaW5lZCIsIm9wdCIsInVwZGF0ZUdyYXBlcyIsImN1cnJlbnRWYWx1ZSIsInZhbHVlU3RpbGxWYWxpZCIsInBhcnNlSW50IiwidXBkYXRlQ291bnRyaWVzIiwiZ3JhcGVJZCIsImNvdW50cnkiLCJmZXRjaEZpbHRlcmVkUmVzdWx0cyIsInBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsImZpZWxkIiwiZWwiLCJhcHBlbmQiLCJ0b1N0cmluZyIsInRleHQiLCJodG1sIiwiZXJyIiwibWVzc2FnZSIsInByZXZpZXdJbWFnZSIsImlucHV0IiwiZmlsZSIsImZpbGVzIiwicHJldmlldyIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJyZXN1bHQiLCJzdHlsZSIsImRpc3BsYXkiLCJyZWFkQXNEYXRhVVJMIl0sInNvdXJjZVJvb3QiOiIifQ==
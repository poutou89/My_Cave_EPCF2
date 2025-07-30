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
/* harmony import */ var _js_menu_burger_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/menu-burger.js */ "./assets/js/menu-burger.js");
/* harmony import */ var _js_menu_burger_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_js_menu_burger_js__WEBPACK_IMPORTED_MODULE_6__);
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

/***/ "./assets/js/menu-burger.js":
/*!**********************************!*\
  !*** ./assets/js/menu-burger.js ***!
  \**********************************/
/***/ (() => {

document.addEventListener('DOMContentLoaded', function () {
  var nav = document.querySelector('header nav');
  var burger = nav.querySelector('.burger');
  burger.addEventListener('click', function () {
    nav.classList.toggle('open');
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFNBQVMsQ0FBQytGLE1BQU0sQ0FBQyxNQUFNLENBQUM7RUFDOUIsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDLEM7Ozs7Ozs7Ozs7QUNQRixTQUFTQyxZQUFZQSxDQUFDQyxLQUFLLEVBQUU7RUFDckIsSUFBTUMsSUFBSSxHQUFHRCxLQUFLLENBQUNFLEtBQUssQ0FBQyxDQUFDLENBQUM7RUFDM0IsSUFBTUMsT0FBTyxHQUFHbEgsUUFBUSxDQUFDRyxjQUFjLENBQUMsZUFBZSxDQUFDO0VBRXhELElBQUk2RyxJQUFJLEVBQUU7SUFDTixJQUFNRyxNQUFNLEdBQUcsSUFBSUMsVUFBVSxDQUFDLENBQUM7SUFDL0JELE1BQU0sQ0FBQ0UsTUFBTSxHQUFHLFVBQVM1SyxDQUFDLEVBQUU7TUFDeEJ5SyxPQUFPLENBQUM3QyxHQUFHLEdBQUc1SCxDQUFDLENBQUNvRSxNQUFNLENBQUN5RyxNQUFNO01BQzdCSixPQUFPLENBQUNLLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE1BQU07SUFDbEMsQ0FBQztJQUNETCxNQUFNLENBQUNNLGFBQWEsQ0FBQ1QsSUFBSSxDQUFDO0VBQzlCLENBQUMsTUFBTTtJQUNIRSxPQUFPLENBQUM3QyxHQUFHLEdBQUcsR0FBRztJQUNqQjZDLE9BQU8sQ0FBQ0ssS0FBSyxDQUFDQyxPQUFPLEdBQUcsTUFBTTtFQUNsQztBQUNKLEM7Ozs7Ozs7Ozs7OztBQ2ZKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWRkQm90dGxlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hZG1pbi1keW5hbWljLWZpZWxkcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY2F2ZS1wbHVzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9maWx0cmUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL21lbnUtYnVyZ2VyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wcmV2aWV3LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8qXHJcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcclxuICpcclxuICogVGhpcyBmaWxlIHdpbGwgYmUgaW5jbHVkZWQgb250byB0aGUgcGFnZSB2aWEgdGhlIGltcG9ydG1hcCgpIFR3aWcgZnVuY3Rpb24sXHJcbiAqIHdoaWNoIHNob3VsZCBhbHJlYWR5IGJlIGluIHlvdXIgYmFzZS5odG1sLnR3aWcuXHJcbiAqL1xyXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcclxuaW1wb3J0ICcuL2pzL2FkbWluLWR5bmFtaWMtZmllbGRzLmpzJztcclxuaW1wb3J0ICcuL2pzL2FkZEJvdHRsZS5qcyc7XHJcbmltcG9ydCAnLi9qcy9maWx0cmUuanMnO1xyXG5pbXBvcnQgJy4vanMvcHJldmlldy5qcyc7XHJcbmltcG9ydCAnLi9qcy9jYXZlLXBsdXMuanMnO1xyXG5pbXBvcnQgJy4vanMvbWVudS1idXJnZXIuanMnO1xyXG5jb25zb2xlLmxvZygnVGhpcyBsb2cgY29tZXMgZnJvbSBhc3NldHMvYXBwLmpzIC0gd2VsY29tZSB0byBBc3NldE1hcHBlciEg8J+OiScpO1xyXG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gIGNvbnN0IHJlc3VsdHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0cycpO1xyXG4gIGlmICghcmVzdWx0c0NvbnRhaW5lcikge1xyXG4gICAgY29uc29sZS5lcnJvcignI3Jlc3VsdHMgaW50cm91dmFibGUnKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIHJlc3VsdHNDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyBlID0+IHtcclxuICAgIGNvbnN0IGJ0biA9IGUudGFyZ2V0O1xyXG4gICAgaWYgKCFidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdhZGQtdG8tY2VsbGFyLWJ0bicpKSByZXR1cm47XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgYm90dGxlSWQgPSBidG4uZGF0YXNldC5pZDtcclxuICAgIGlmICghYm90dGxlSWQpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignZGF0YS1pZCBtYW5xdWFudCBzdXIgbGUgYm91dG9uJyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgL215LWNhdmUvYWRkLWJvdHRsZS8ke2JvdHRsZUlkfWAsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7ICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0JyB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKGBTdGF0dXQgSFRUUCAke3Jlcy5zdGF0dXN9YCk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICAgICAgaWYgKCFkYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICBhbGVydCgnRXJyZXVyIGxvcnMgZGUgbOKAmWFqb3V0IDogJyArIChkYXRhLmVycm9yIHx8ICdJbmNvbm51ZScpKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFJlY2hhcmdlIGxhIHBhZ2UgcG91ciBhZmZpY2hlciBsYSBjYXZlIMOgIGpvdXJcclxuICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Fqb3V0IMOpY2hvdcOpIDonLCBlcnIpO1xyXG4gICAgICBhbGVydCgnw4ljaGVjIGRlIGzigJlham91dCwgdmV1aWxsZXogcsOpZXNzYXllci4nKTtcclxuICAgIH1cclxuICB9KTtcclxufSk7IiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICAgIGNvbnN0IGNvdW50cnlTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtY291bnRyeSBzZWxlY3QnKTtcclxuICAgIGNvbnN0IHJlZ2lvblNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1yZWdpb24gc2VsZWN0Jyk7XHJcbiAgICBjb25zdCBncmFwZVNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1ncmFwZSBzZWxlY3QnKTtcclxuXHJcbiAgICBpZiAoIWNvdW50cnlTZWxlY3QgfHwgIXJlZ2lvblNlbGVjdCB8fCAhZ3JhcGVTZWxlY3QpIHJldHVybjtcclxuXHJcbiAgICBjb3VudHJ5U2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBjb3VudHJ5SWQgPSB0aGlzLnZhbHVlO1xyXG5cclxuICAgICAgICBpZiAoIWNvdW50cnlJZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAvLyBSw6ljdXDDqHJlIGxlcyByw6lnaW9uc1xyXG4gICAgICAgIGZldGNoKGAvYWRtaW4vcmVnaW9ucy1ieS1jb3VudHJ5LyR7Y291bnRyeUlkfWApXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZWdpb25TZWxlY3QuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgICAgICAgICBkYXRhLmZvckVhY2gocmVnaW9uID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb24udmFsdWUgPSByZWdpb24uaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gcmVnaW9uLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVnaW9uU2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFLDqWN1cMOocmUgbGVzIGPDqXBhZ2VzXHJcbiAgICAgICAgZmV0Y2goYC9hZG1pbi9ncmFwZXMtYnktY291bnRyeS8ke2NvdW50cnlJZH1gKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgZ3JhcGVTZWxlY3QuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgICAgICAgICBkYXRhLmZvckVhY2goZ3JhcGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbi52YWx1ZSA9IGdyYXBlLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGdyYXBlLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JhcGVTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59KTsiLCIvLyBjYXZlLXBsdXMuanNcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgLy8gUsOpY3Vww6lyYXRpb24gZGVzIGRvbm7DqWVzIGluamVjdMOpZXMgcGFyIFR3aWdcclxuICBjb25zdCBib3R0bGVzID0gd2luZG93LmFsbEJvdHRsZXNGcm9tQmFja2VuZCB8fCBbXTtcclxuICBjb25zdCBwZXJQYWdlID0gMTI7XHJcbiAgbGV0IGN1cnJlbnRQYWdlID0gMTtcclxuXHJcbiAgLy8gU8OpbGVjdGV1cnMgZHUgRE9NIChJRCBvdSBjbGFzc2VzIGZhbGxiYWNrKVxyXG4gIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm90dGxlcy1ncmlkJykgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoZWxmJyk7XHJcbiAgY29uc3QgcGFnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2luYXRpb24nKSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnaW5hdGlvbicpO1xyXG4gIGlmICghZ3JpZCB8fCAhcGFnKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCfwn5uRICNib3R0bGVzLWdyaWQgKG91IC5zaGVsZikgb3UgI3BhZ2luYXRpb24gKG91IC5wYWdpbmF0aW9uKSBpbnRyb3V2YWJsZScpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLy8gQ2FsY3VsZSBsZSBub21icmUgdG90YWwgZGUgcGFnZXNcclxuICBmdW5jdGlvbiBnZXRUb3RhbFBhZ2VzKCkge1xyXG4gICAgcmV0dXJuIE1hdGguY2VpbChib3R0bGVzLmxlbmd0aCAvIHBlclBhZ2UpO1xyXG4gIH1cclxuXHJcbiAgLy8gQWZmaWNoZSBsZXMgYm91dGVpbGxlcyBwb3VyIGxhIHBhZ2UgY291cmFudGVcclxuICBmdW5jdGlvbiByZW5kZXJHcmlkKCkge1xyXG4gICAgZ3JpZC5pbm5lckhUTUwgPSAnJztcclxuICAgIGNvbnN0IHN0YXJ0ID0gKGN1cnJlbnRQYWdlIC0gMSkgKiBwZXJQYWdlO1xyXG4gICAgY29uc3QgcGFnZUl0ZW1zID0gYm90dGxlcy5zbGljZShzdGFydCwgc3RhcnQgKyBwZXJQYWdlKTtcclxuXHJcbiAgICBwYWdlSXRlbXMuZm9yRWFjaChiID0+IHtcclxuICAgICAgLy8gV3JhcHBlciAuYm90dGxlXHJcbiAgICAgIGNvbnN0IGJvdHRsZVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgYm90dGxlV3JhcHBlci5jbGFzc05hbWUgPSAnYm90dGxlJztcclxuXHJcbiAgICAgIC8vIENhcnRlIC5ib3R0bGUtY2FyZFxyXG4gICAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICBjYXJkLmNsYXNzTmFtZSA9ICdib3R0bGUtY2FyZCc7XHJcbiAgICAgIGNhcmQuaHJlZiA9IGAvYm90dGxlLyR7Yi5pZH1gO1xyXG5cclxuICAgICAgLy8gVGl0cmVcclxuICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gYCR7Yi5uYW1lfSAoJHtiLnllYXJ9KWA7XHJcbiAgICAgIGNhcmQuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG5cclxuICAgICAgLy8gSW1hZ2VcclxuICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgIGltZy5zcmMgPSBiLmltYWdlVXJsO1xyXG4gICAgICBpbWcuYWx0ID0gYi5uYW1lO1xyXG4gICAgICBjYXJkLmFwcGVuZENoaWxkKGltZyk7XHJcblxyXG4gICAgICAvLyBGb3JtdWxhaXJlIGRlIHJldHJhaXQgSU5TSURFIGRlIGxhIGNhcmRcclxuICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICAgICAgZm9ybS5tZXRob2QgPSAnUE9TVCc7XHJcbiAgICAgIGZvcm0uYWN0aW9uID0gYC9teS1jYXZlL2JvdHRsZS8ke2IuaWR9L3JlbW92ZWA7XHJcbiAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICBidXR0b24udHlwZSA9ICdzdWJtaXQnO1xyXG4gICAgICBidXR0b24uY2xhc3NOYW1lID0gJ2J0bic7XHJcbiAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdSZXRpcmVyJztcclxuICAgICAgZm9ybS5hcHBlbmRDaGlsZChidXR0b24pO1xyXG4gICAgICBjYXJkLmFwcGVuZENoaWxkKGZvcm0pO1xyXG5cclxuICAgICAgLy8gQXNzZW1ibGFnZSBkYW5zIGxlIERPTVxyXG4gICAgICBib3R0bGVXcmFwcGVyLmFwcGVuZENoaWxkKGNhcmQpO1xyXG4gICAgICBncmlkLmFwcGVuZENoaWxkKGJvdHRsZVdyYXBwZXIpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBBZmZpY2hlIGxhIHBhZ2luYXRpb25cclxuICBmdW5jdGlvbiByZW5kZXJQYWdpbmF0aW9uKCkge1xyXG4gICAgcGFnLmlubmVySFRNTCA9ICcnO1xyXG4gICAgY29uc3QgdG90YWxQYWdlcyA9IGdldFRvdGFsUGFnZXMoKTtcclxuICAgIGlmICh0b3RhbFBhZ2VzIDw9IDEpIHJldHVybjtcclxuXHJcbiAgICAvLyBCb3V0b24gUHLDqWPDqWRlbnRcclxuICAgIGNvbnN0IGJ0blByZXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGJ0blByZXYudHlwZSA9ICdidXR0b24nO1xyXG4gICAgYnRuUHJldi50ZXh0Q29udGVudCA9ICfigLknO1xyXG4gICAgYnRuUHJldi5kaXNhYmxlZCA9IGN1cnJlbnRQYWdlID09PSAxO1xyXG4gICAgYnRuUHJldi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgaWYgKGN1cnJlbnRQYWdlID4gMSkge1xyXG4gICAgICAgIGN1cnJlbnRQYWdlLS07XHJcbiAgICAgICAgdXBkYXRlKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcGFnLmFwcGVuZENoaWxkKGJ0blByZXYpO1xyXG5cclxuICAgIC8vIE51bcOpcm9zIGRlIHBhZ2VzXHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSB0b3RhbFBhZ2VzOyBpKyspIHtcclxuICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgIGJ0bi50eXBlID0gJ2J1dHRvbic7XHJcbiAgICAgIGJ0bi50ZXh0Q29udGVudCA9IGk7XHJcbiAgICAgIGlmIChpID09PSBjdXJyZW50UGFnZSkgYnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgY3VycmVudFBhZ2UgPSBpO1xyXG4gICAgICAgIHVwZGF0ZSgpO1xyXG4gICAgICB9KTtcclxuICAgICAgcGFnLmFwcGVuZENoaWxkKGJ0bik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQm91dG9uIFN1aXZhbnRcclxuICAgIGNvbnN0IGJ0bk5leHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGJ0bk5leHQudHlwZSA9ICdidXR0b24nO1xyXG4gICAgYnRuTmV4dC50ZXh0Q29udGVudCA9ICfigLonO1xyXG4gICAgYnRuTmV4dC5kaXNhYmxlZCA9IGN1cnJlbnRQYWdlID09PSB0b3RhbFBhZ2VzO1xyXG4gICAgYnRuTmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgaWYgKGN1cnJlbnRQYWdlIDwgdG90YWxQYWdlcykge1xyXG4gICAgICAgIGN1cnJlbnRQYWdlKys7XHJcbiAgICAgICAgdXBkYXRlKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcGFnLmFwcGVuZENoaWxkKGJ0bk5leHQpO1xyXG4gIH1cclxuXHJcbiAgLy8gTWV0IMOgIGpvdXIgbGEgZ3JpbGxlIGV0IGxhIHBhZ2luYXRpb25cclxuICBmdW5jdGlvbiB1cGRhdGUoKSB7XHJcbiAgICByZW5kZXJHcmlkKCk7XHJcbiAgICByZW5kZXJQYWdpbmF0aW9uKCk7XHJcbiAgfVxyXG4gICAgd2luZG93LnVwZGF0ZUNhdmUgPSB1cGRhdGU7XHJcbiAgLy8gSW5pdGlhbGlzYXRpb25cclxuICB1cGRhdGUoKTtcclxufSk7XHJcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgICBjb25zdCBncmFwZVNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdFtuYW1lPVwiZ3JhcGVfaWRcIl0nKTtcclxuICAgIGNvbnN0IGNvdW50cnlTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3RbbmFtZT1cImNvdW50cnlfaWRcIl0nKTtcclxuICAgIGNvbnN0IHJlZ2lvblNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdFtuYW1lPVwicmVnaW9uX2lkXCJdJyk7XHJcbiAgICBjb25zdCByZXN1bHRzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3VsdHMnKTtcclxuXHJcbiAgICBjb25zdCB1cGRhdGVSZWdpb25zID0gKGNvdW50cnlJZCA9ICcnKSA9PiB7XHJcbiAgICAgICAgZmV0Y2goYC9hcGkvcmVnaW9ucz9jb3VudHJ5X2lkPSR7Y291bnRyeUlkfWApXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIHJlZ2lvblNlbGVjdC5pbm5lckhUTUwgPSAnPG9wdGlvbiB2YWx1ZT1cIlwiPi0tIFLDqWdpb24gLS08L29wdGlvbj4nO1xyXG4gICAgICAgICAgICAgICAgZGF0YS5mb3JFYWNoKHJlZ2lvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0LnZhbHVlID0gcmVnaW9uLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdC50ZXh0Q29udGVudCA9IHJlZ2lvbi5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlZ2lvblNlbGVjdC5hcHBlbmRDaGlsZChvcHQpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCB1cGRhdGVHcmFwZXMgPSAoY291bnRyeUlkID0gJycpID0+IHtcclxuICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IGdyYXBlU2VsZWN0LnZhbHVlO1xyXG5cclxuICAgIGZldGNoKGAvYXBpL2dyYXBlcz9jb3VudHJ5X2lkPSR7Y291bnRyeUlkfWApXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGdyYXBlU2VsZWN0LmlubmVySFRNTCA9ICc8b3B0aW9uIHZhbHVlPVwiXCI+LS0gQ8OpcGFnZSAtLTwvb3B0aW9uPic7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZVN0aWxsVmFsaWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIGRhdGEuZm9yRWFjaChncmFwZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICAgICAgICAgIG9wdC52YWx1ZSA9IGdyYXBlLmlkO1xyXG4gICAgICAgICAgICAgICAgb3B0LnRleHRDb250ZW50ID0gZ3JhcGUubmFtZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZ3JhcGUuaWQgPT09IHBhcnNlSW50KGN1cnJlbnRWYWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZVN0aWxsVmFsaWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGdyYXBlU2VsZWN0LmFwcGVuZENoaWxkKG9wdCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKHZhbHVlU3RpbGxWYWxpZCkge1xyXG4gICAgICAgICAgICAgICAgZ3JhcGVTZWxlY3QudmFsdWUgPSBjdXJyZW50VmFsdWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBncmFwZVNlbGVjdC52YWx1ZSA9ICcnOyAvLyByw6lpbml0aWFsaXNlIHNpIHBsdXMgZGlzcG9cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG59O1xyXG5cclxuICAgIGNvbnN0IHVwZGF0ZUNvdW50cmllcyA9IChncmFwZUlkID0gJycpID0+IHtcclxuICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IGNvdW50cnlTZWxlY3QudmFsdWU7XHJcblxyXG4gICAgZmV0Y2goYC9hcGkvY291bnRyaWVzP2dyYXBlX2lkPSR7Z3JhcGVJZH1gKVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBjb3VudHJ5U2VsZWN0LmlubmVySFRNTCA9ICc8b3B0aW9uIHZhbHVlPVwiXCI+LS0gUGF5cyAtLTwvb3B0aW9uPic7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZVN0aWxsVmFsaWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIGRhdGEuZm9yRWFjaChjb3VudHJ5ID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgb3B0LnZhbHVlID0gY291bnRyeS5pZDtcclxuICAgICAgICAgICAgICAgIG9wdC50ZXh0Q29udGVudCA9IGNvdW50cnkubmFtZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY291bnRyeS5pZCA9PT0gcGFyc2VJbnQoY3VycmVudFZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlU3RpbGxWYWxpZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY291bnRyeVNlbGVjdC5hcHBlbmRDaGlsZChvcHQpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmICh2YWx1ZVN0aWxsVmFsaWQpIHtcclxuICAgICAgICAgICAgICAgIGNvdW50cnlTZWxlY3QudmFsdWUgPSBjdXJyZW50VmFsdWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb3VudHJ5U2VsZWN0LnZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxufTtcclxuXHJcbiAgICBjb25zdCBmZXRjaEZpbHRlcmVkUmVzdWx0cyA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XHJcbiAgICAgICAgWyduYW1lJywgJ3llYXInLCAnZ3JhcGVfaWQnLCAnY291bnRyeV9pZCcsICdyZWdpb25faWQnXS5mb3JFYWNoKGZpZWxkID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbbmFtZT1cIiR7ZmllbGR9XCJdYCk7XHJcbiAgICAgICAgICAgIGlmIChlbCAmJiBlbC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgcGFyYW1zLmFwcGVuZChmaWVsZCwgZWwudmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJlc3VsdHNEaXYuaW5uZXJIVE1MID0gJ0NoYXJnZW1lbnQuLi4nO1xyXG5cclxuICAgICAgICBmZXRjaChgL215LWNhdmUvZmlsdGVyPyR7cGFyYW1zLnRvU3RyaW5nKCl9YClcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghcmVzLm9rKSB0aHJvdyBuZXcgRXJyb3IoJ0VycmV1ciBBSkFYIDogJyArIHJlcy5zdGF0dXMpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy50ZXh0KCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKGh0bWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0c0Rpdi5pbm5lckhUTUwgPSBodG1sO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdHNEaXYuaW5uZXJIVE1MID0gYDxwPkVycmV1ciA6ICR7ZXJyLm1lc3NhZ2V9PC9wPmA7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBncmFwZVNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xyXG4gICAgICAgIHVwZGF0ZUNvdW50cmllcyhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgZmV0Y2hGaWx0ZXJlZFJlc3VsdHMoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvdW50cnlTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcclxuICAgICAgICB1cGRhdGVSZWdpb25zKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICB1cGRhdGVHcmFwZXMoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIGZldGNoRmlsdGVyZWRSZXN1bHRzKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZWdpb25TZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZmV0Y2hGaWx0ZXJlZFJlc3VsdHMpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cIm5hbWVcIl0nKS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZldGNoRmlsdGVyZWRSZXN1bHRzKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJ5ZWFyXCJdJykuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmZXRjaEZpbHRlcmVkUmVzdWx0cyk7XHJcbn0pOyIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyIG5hdicpO1xyXG4gIGNvbnN0IGJ1cmdlciA9IG5hdi5xdWVyeVNlbGVjdG9yKCcuYnVyZ2VyJyk7XHJcblxyXG4gIGJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIG5hdi5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuJyk7XHJcbiAgfSk7XHJcbn0pOyIsImZ1bmN0aW9uIHByZXZpZXdJbWFnZShpbnB1dCkge1xyXG4gICAgICAgIGNvbnN0IGZpbGUgPSBpbnB1dC5maWxlc1swXTtcclxuICAgICAgICBjb25zdCBwcmV2aWV3ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXZpZXctaW1hZ2UnKTtcclxuXHJcbiAgICAgICAgaWYgKGZpbGUpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgIHByZXZpZXcuc3JjID0gZS50YXJnZXQucmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgcHJldmlldy5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHByZXZpZXcuc3JjID0gXCIjXCI7XHJcbiAgICAgICAgICAgIHByZXZpZXcuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB9XHJcbiAgICB9IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJlIiwidCIsInIiLCJTeW1ib2wiLCJuIiwiaXRlcmF0b3IiLCJvIiwidG9TdHJpbmdUYWciLCJpIiwiYyIsInByb3RvdHlwZSIsIkdlbmVyYXRvciIsInUiLCJPYmplY3QiLCJjcmVhdGUiLCJfcmVnZW5lcmF0b3JEZWZpbmUyIiwiZiIsInAiLCJ5IiwiRyIsInYiLCJhIiwiZCIsImJpbmQiLCJsZW5ndGgiLCJsIiwiVHlwZUVycm9yIiwiY2FsbCIsImRvbmUiLCJ2YWx1ZSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJnZXRQcm90b3R5cGVPZiIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiZGlzcGxheU5hbWUiLCJfcmVnZW5lcmF0b3IiLCJ3IiwibSIsImRlZmluZVByb3BlcnR5IiwiX3JlZ2VuZXJhdG9yRGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiX2ludm9rZSIsInJlcXVpcmUiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJQcm9taXNlIiwicmVzb2x2ZSIsInRoZW4iLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3VtZW50cyIsImFwcGx5IiwiX25leHQiLCJfdGhyb3ciLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZXN1bHRzQ29udGFpbmVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJlcnJvciIsIl9yZWYiLCJfY2FsbGVlIiwiYnRuIiwiYm90dGxlSWQiLCJyZXMiLCJkYXRhIiwiX3QiLCJfY29udGV4dCIsInRhcmdldCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicHJldmVudERlZmF1bHQiLCJkYXRhc2V0IiwiaWQiLCJmZXRjaCIsImNvbmNhdCIsIm1ldGhvZCIsImhlYWRlcnMiLCJvayIsIkVycm9yIiwic3RhdHVzIiwianNvbiIsInN1Y2Nlc3MiLCJhbGVydCIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiX3giLCJjb3VudHJ5U2VsZWN0IiwicXVlcnlTZWxlY3RvciIsInJlZ2lvblNlbGVjdCIsImdyYXBlU2VsZWN0IiwiY291bnRyeUlkIiwicmVzcG9uc2UiLCJpbm5lckhUTUwiLCJmb3JFYWNoIiwicmVnaW9uIiwib3B0aW9uIiwiY3JlYXRlRWxlbWVudCIsInRleHRDb250ZW50IiwibmFtZSIsImFwcGVuZENoaWxkIiwiZ3JhcGUiLCJib3R0bGVzIiwiYWxsQm90dGxlc0Zyb21CYWNrZW5kIiwicGVyUGFnZSIsImN1cnJlbnRQYWdlIiwiZ3JpZCIsInBhZyIsImdldFRvdGFsUGFnZXMiLCJNYXRoIiwiY2VpbCIsInJlbmRlckdyaWQiLCJzdGFydCIsInBhZ2VJdGVtcyIsInNsaWNlIiwiYiIsImJvdHRsZVdyYXBwZXIiLCJjbGFzc05hbWUiLCJjYXJkIiwiaHJlZiIsInRpdGxlIiwieWVhciIsImltZyIsInNyYyIsImltYWdlVXJsIiwiYWx0IiwiZm9ybSIsImFjdGlvbiIsImJ1dHRvbiIsInR5cGUiLCJyZW5kZXJQYWdpbmF0aW9uIiwidG90YWxQYWdlcyIsImJ0blByZXYiLCJkaXNhYmxlZCIsInVwZGF0ZSIsIl9sb29wIiwiYWRkIiwiYnRuTmV4dCIsInVwZGF0ZUNhdmUiLCJyZXN1bHRzRGl2IiwidXBkYXRlUmVnaW9ucyIsInVuZGVmaW5lZCIsIm9wdCIsInVwZGF0ZUdyYXBlcyIsImN1cnJlbnRWYWx1ZSIsInZhbHVlU3RpbGxWYWxpZCIsInBhcnNlSW50IiwidXBkYXRlQ291bnRyaWVzIiwiZ3JhcGVJZCIsImNvdW50cnkiLCJmZXRjaEZpbHRlcmVkUmVzdWx0cyIsInBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsImZpZWxkIiwiZWwiLCJhcHBlbmQiLCJ0b1N0cmluZyIsInRleHQiLCJodG1sIiwiZXJyIiwibWVzc2FnZSIsIm5hdiIsImJ1cmdlciIsInRvZ2dsZSIsInByZXZpZXdJbWFnZSIsImlucHV0IiwiZmlsZSIsImZpbGVzIiwicHJldmlldyIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJyZXN1bHQiLCJzdHlsZSIsImRpc3BsYXkiLCJyZWFkQXNEYXRhVVJMIl0sInNvdXJjZVJvb3QiOiIifQ==
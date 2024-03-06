"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductDetailsComponent = void 0;
var core_1 = require("@angular/core");
var products_1 = require("../products");
var forms_1 = require("@angular/forms");
var ProductDetailsComponent = function () {
    var _classDecorators = [(0, core_1.Component)({
            selector: 'app-product-details',
            templateUrl: './product-details.component.html',
            styleUrls: ['./product-details.component.css'],
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var ProductDetailsComponent = _classThis = /** @class */ (function () {
        function ProductDetailsComponent_1(route, cartService, formBuilder) {
            this.route = route;
            this.cartService = cartService;
            this.formBuilder = formBuilder;
            this.ratingForm = this.formBuilder.group({
                rating: [null, [forms_1.Validators.required, forms_1.Validators.min(0), forms_1.Validators.max(5)]]
            });
        }
        ProductDetailsComponent_1.prototype.addToCart = function (product) {
            this.cartService.addToCart(product);
            window.alert('Your product has been added to the cart!');
        };
        ProductDetailsComponent_1.prototype.rate = function () {
            if (this.product) {
                var newRating = this.ratingForm.value.rating;
                this.product.rating = (this.product.rating * this.product.cnt + newRating) / (this.product.cnt + 1);
                this.product.cnt++;
            }
        };
        ProductDetailsComponent_1.prototype.ngOnInit = function () {
            var routeParams = this.route.snapshot.paramMap;
            var productIdFromRoute = Number(routeParams.get('productId'));
            this.product = products_1.products.find(function (product) { return product.id === productIdFromRoute; });
        };
        return ProductDetailsComponent_1;
    }());
    __setFunctionName(_classThis, "ProductDetailsComponent");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ProductDetailsComponent = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ProductDetailsComponent = _classThis;
}();
exports.ProductDetailsComponent = ProductDetailsComponent;

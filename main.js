var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Inventory = /** @class */ (function () {
    function Inventory() {
        this.products = [];
    }
    Inventory.prototype.add_id_for_item = function () {
        var id = 0;
        for (var i = 0; i < this.products.length; i++) {
            id = Math.max(id, this.products[i].id);
        }
        return id + 1;
    };
    Inventory.prototype.add = function (new_Product) {
        new_Product.id = this.add_id_for_item();
        this.products.push(new_Product);
        return "Product Added";
    };
    Inventory.prototype.update = function (new_id, update_Product) {
        var flag = -1;
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].id == new_id) {
                flag = i;
            }
        }
        if (flag != -1) {
            this.products[flag] = __assign(__assign({}, this.products[flag]), update_Product);
            return "Product Updated";
        }
        else {
            return "Product not found";
        }
    };
    Inventory.prototype.retrieve_products_by_id = function (id) {
        var flag = -1;
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].id == id) {
                flag = i;
            }
        }
        if (flag != -1) {
            return this.products[flag];
        }
        else {
            return "Product not found";
        }
    };
    Inventory.prototype.calculate_total_price = function () {
        var total = 0;
        for (var i = 0; i < this.products.length; i++) {
            total += this.products[i].price * this.products[i].quantity;
        }
        return total;
    };
    return Inventory;
}());
function find_max(obj) {
    var max = obj[0];
    if (typeof obj[0] === "string") {
        for (var i = 1; i < obj.length; i++) {
            if (obj[i].length > max.length) {
                max = obj[i];
            }
        }
    }
    else {
        for (var i = 1; i < obj.length; i++) {
            if (obj[i] > max) {
                max = obj[i];
            }
        }
    }
    return max;
}
function fetchProductData(id) {
    return new Promise(function (resolve, reject) {
        console.log("A3");
        setTimeout(function () {
            var sampleProduct = {
                id: id,
                name: "ProductA1",
                quantity: 222,
                price: 111,
                category: "Electronics"
            };
            resolve(sampleProduct);
            console.log("A2");
        }, 3000);
        console.log("A1");
    });
}
function getProductData(id) {
    return __awaiter(this, void 0, void 0, function () {
        var product;
        return __generator(this, function (_a) {
            try {
                product = fetchProductData(id);
                console.log("Product fetched:", product);
            }
            catch (error) {
                console.error("Error fetching product:", error);
            }
            return [2 /*return*/];
        });
    });
}
getProductData(3);

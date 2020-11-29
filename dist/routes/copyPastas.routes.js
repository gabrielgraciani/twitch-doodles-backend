"use strict";
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
        while (_) try {
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var typeorm_1 = require("typeorm");
var CopyPastasRepositories_1 = __importDefault(require("../repositories/CopyPastasRepositories"));
var CreateCopyPastaService_1 = __importDefault(require("../services/CreateCopyPastaService"));
var DeleteCopyPastaService_1 = __importDefault(require("../services/DeleteCopyPastaService"));
var LikeCopyPastaService_1 = __importDefault(require("../services/LikeCopyPastaService"));
var UnlikeCopyPastaService_1 = __importDefault(require("../services/UnlikeCopyPastaService"));
var copyPastasRouter = express_1.Router();
copyPastasRouter.get('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var copyPastasRepository, copyPastas;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                copyPastasRepository = typeorm_1.getCustomRepository(CopyPastasRepositories_1.default);
                return [4 /*yield*/, copyPastasRepository.find({
                        order: { date: 'DESC' },
                    })];
            case 1:
                copyPastas = _a.sent();
                return [2 /*return*/, res.json(copyPastas)];
        }
    });
}); });
copyPastasRouter.post('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name_1, content, date, categories, createCopyPasta, copyPasta, err_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, name_1 = _a.name, content = _a.content, date = _a.date, categories = _a.categories;
                createCopyPasta = new CreateCopyPastaService_1.default();
                return [4 /*yield*/, createCopyPasta.execute({
                        name: name_1,
                        content: content,
                        date: date,
                        categories: categories,
                    })];
            case 1:
                copyPasta = _b.sent();
                return [2 /*return*/, res.json(copyPasta)];
            case 2:
                err_1 = _b.sent();
                return [2 /*return*/, res.status(400).json({ error: err_1.message })];
            case 3: return [2 /*return*/];
        }
    });
}); });
copyPastasRouter.delete('/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, deleteCopyPasta, copyPasta, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                deleteCopyPasta = new DeleteCopyPastaService_1.default();
                return [4 /*yield*/, deleteCopyPasta.execute(id)];
            case 1:
                copyPasta = _a.sent();
                return [2 /*return*/, res.json(copyPasta)];
            case 2:
                err_2 = _a.sent();
                return [2 /*return*/, res.status(400).json({ error: err_2.message })];
            case 3: return [2 /*return*/];
        }
    });
}); });
copyPastasRouter.post('/like/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, likeCopyPasta, responseLikeCopyPasta, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                likeCopyPasta = new LikeCopyPastaService_1.default();
                return [4 /*yield*/, likeCopyPasta.execute(id)];
            case 1:
                responseLikeCopyPasta = _a.sent();
                return [2 /*return*/, res.json(responseLikeCopyPasta)];
            case 2:
                err_3 = _a.sent();
                return [2 /*return*/, res.status(400).json({ error: err_3.message })];
            case 3: return [2 /*return*/];
        }
    });
}); });
copyPastasRouter.post('/unlike/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, unlikeCopyPasta, responseUnlikeCopyPasta, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                unlikeCopyPasta = new UnlikeCopyPastaService_1.default();
                return [4 /*yield*/, unlikeCopyPasta.execute(id)];
            case 1:
                responseUnlikeCopyPasta = _a.sent();
                return [2 /*return*/, res.json(responseUnlikeCopyPasta)];
            case 2:
                err_4 = _a.sent();
                return [2 /*return*/, res.status(400).json({ error: err_4.message })];
            case 3: return [2 /*return*/];
        }
    });
}); });
exports.default = copyPastasRouter;

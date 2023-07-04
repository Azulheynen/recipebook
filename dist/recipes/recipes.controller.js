"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipesController = void 0;
const create_recipe_dto_1 = require("./dto/create-recipe-dto");
const common_1 = require("@nestjs/common");
const recipes_service_1 = require("./recipes.service");
const update_recipe_dto_1 = require("./dto/update-recipe-dto");
let RecipesController = exports.RecipesController = class RecipesController {
    constructor(recipesService) {
        this.recipesService = recipesService;
    }
    async getRecipes() {
        const recipes = await this.recipesService.getRecipes();
        return recipes;
    }
    async getRecipe(id) {
        const recipe = await this.recipesService.getRecipe(id);
        if (!recipe)
            throw new common_1.HttpException('Recipe does not exist', common_1.HttpStatus.CONFLICT);
        return this.recipesService.getRecipe(id);
    }
    deleteUsers(id) {
        const recipeDeleted = this.recipesService.deleteRecipe(id);
        if (!recipeDeleted)
            throw new common_1.HttpException('Recipe does not exist', common_1.HttpStatus.CONFLICT);
        return `recipe with id : #${id} delete succesfully `;
    }
    createRecipe(newRecipe) {
        return this.recipesService.createRecipe(newRecipe);
    }
    updateRecipe(id, recipe) {
        return this.recipesService.updateRecipe(id, recipe);
    }
};
__decorate([
    (0, common_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RecipesController.prototype, "getRecipes", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RecipesController.prototype, "getRecipe", null);
__decorate([
    (0, common_1.Delete)('/delete'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], RecipesController.prototype, "deleteUsers", null);
__decorate([
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_recipe_dto_1.CreateRecipeDTO]),
    __metadata("design:returntype", void 0)
], RecipesController.prototype, "createRecipe", null);
__decorate([
    (0, common_1.Patch)('/update'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_recipe_dto_1.UpdateRecipeDto]),
    __metadata("design:returntype", void 0)
], RecipesController.prototype, "updateRecipe", null);
exports.RecipesController = RecipesController = __decorate([
    (0, common_1.Controller)('recipes'),
    __metadata("design:paramtypes", [recipes_service_1.RecipesService])
], RecipesController);
//# sourceMappingURL=recipes.controller.js.map
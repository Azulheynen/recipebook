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
exports.RecipesService = void 0;
const recipe_entity_1 = require("./recipe.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let RecipesService = exports.RecipesService = class RecipesService {
    constructor(recipeRepository) {
        this.recipeRepository = recipeRepository;
    }
    async getRecipes() {
        return this.recipeRepository.find();
    }
    async getRecipe(id) {
        const recipe = await this.recipeRepository.findOne({
            where: {
                id: id,
            },
        });
        return recipe;
    }
    async createRecipe(recipe) {
        const recipeFound = await this.recipeRepository.findOne({
            where: {
                name: recipe.name,
                id: recipe.id,
            },
        });
        if (recipeFound) {
            return new common_1.HttpException('recipe already created', common_1.HttpStatus.FOUND);
        }
        const newRecipe = this.recipeRepository.create(recipe);
        return await this.recipeRepository.save(newRecipe);
    }
    async deleteRecipe(id) {
        const deletedRecipe = await this.recipeRepository.delete({ id });
        if (deletedRecipe.affected === 0) {
            return new common_1.HttpException('User not found', common_1.HttpStatus.NOT_FOUND);
        }
        return deletedRecipe;
    }
    async updateRecipe(id, recipe) {
        const recipeFound = await this.recipeRepository.findOne({
            where: {
                id,
            },
        });
        if (!recipeFound) {
            return new common_1.HttpException('cant update recipe', common_1.HttpStatus.CONFLICT);
        }
        const updatedRecipe = Object.assign(recipeFound, recipe);
        return this.recipeRepository.save(updatedRecipe);
    }
};
exports.RecipesService = RecipesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(recipe_entity_1.Recipe)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RecipesService);
//# sourceMappingURL=recipes.service.js.map
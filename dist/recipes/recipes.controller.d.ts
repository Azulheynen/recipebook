import { CreateRecipeDTO } from './dto/create-recipe-dto';
import { HttpException } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { Recipe } from './recipe.entity';
import { UpdateRecipeDto } from './dto/update-recipe-dto';
export declare class RecipesController {
    private recipesService;
    constructor(recipesService: RecipesService);
    getRecipes(): Promise<Recipe[]>;
    getRecipe(id: number): Promise<Recipe>;
    deleteUsers(id: number): string;
    createRecipe(newRecipe: CreateRecipeDTO): Promise<Recipe | HttpException>;
    updateRecipe(id: number, recipe: UpdateRecipeDto): Promise<HttpException | (Recipe & UpdateRecipeDto)>;
}

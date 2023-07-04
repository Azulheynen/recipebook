import { CreateRecipeDTO } from './dto/create-recipe-dto';
import { Recipe } from './recipe.entity';
import { HttpException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UpdateRecipeDto } from './dto/update-recipe-dto';
export declare class RecipesService {
    private recipeRepository;
    constructor(recipeRepository: Repository<Recipe>);
    getRecipes(): Promise<Recipe[]>;
    getRecipe(id: number): Promise<Recipe>;
    createRecipe(recipe: CreateRecipeDTO): Promise<Recipe | HttpException>;
    deleteRecipe(id: number): Promise<HttpException | import("typeorm").DeleteResult>;
    updateRecipe(id: number, recipe: UpdateRecipeDto): Promise<HttpException | (Recipe & UpdateRecipeDto)>;
}

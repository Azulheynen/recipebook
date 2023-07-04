import { CreateRecipeDTO } from './dto/create-recipe-dto';
import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  ParseIntPipe,
  Delete,
  Patch,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { Recipe } from './recipe.entity';
import { UpdateRecipeDto } from './dto/update-recipe-dto';

@Controller('recipes')
export class RecipesController {
  constructor(private recipesService: RecipesService) {}

  @Get('/')
  async getRecipes() {
    const recipes = await this.recipesService.getRecipes();
    return recipes;
  }

  @Get('/:id')
  async getRecipe(@Param('id', ParseIntPipe) id: number) {
    const recipe = await this.recipesService.getRecipe(id);
    if (!recipe)
      throw new HttpException('Recipe does not exist', HttpStatus.CONFLICT);
    return this.recipesService.getRecipe(id);
  }

  @Delete('/delete')
  deleteUsers(@Param('id', ParseIntPipe) id: number) {
    const recipeDeleted = this.recipesService.deleteRecipe(id);
    if (!recipeDeleted)
      throw new HttpException('Recipe does not exist', HttpStatus.CONFLICT);
    return `recipe with id : #${id} delete succesfully `;
  }

  @Post('/create')
  createRecipe(@Body() newRecipe: CreateRecipeDTO) {
    return this.recipesService.createRecipe(newRecipe);
  }

  @Patch('/update')
  updateRecipe(
    @Param('id', ParseIntPipe) id: number,
    @Body() recipe: UpdateRecipeDto,
  ) {
    return this.recipesService.updateRecipe(id, recipe);
  }

  // @Post(':id/profile')
  // createProfile(
  //   @Param('id', ParseIntPipe)
  //   id: number,
  //   @Body() profile, //falta createprofiledto
  // ) {
  //   return this.recipesService.createProfile(id, profile);
  // }
}

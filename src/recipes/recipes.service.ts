import { CreateRecipeDTO } from './dto/create-recipe-dto';
import { Recipe } from './recipe.entity';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
// import { CreateProfileDto } from './dto/create-profile.dto';
// import { Profile } from './profile.entity';
import { UpdateRecipeDto } from './dto/update-recipe-dto';

@Injectable()
export class RecipesService {
  constructor(
    @InjectRepository(Recipe) private recipeRepository: Repository<Recipe>, // @InjectRepository(Profile) private profileRepository: Repository<Profile>
  ) {}

  async getRecipes() {
    return this.recipeRepository.find();
  }
  async getRecipe(id: number) {
    const recipe = await this.recipeRepository.findOne({
      where: {
        id: id,
      },
    });
    return recipe;
  }
  async createRecipe(recipe: CreateRecipeDTO) {
    const recipeFound = await this.recipeRepository.findOne({
      where: {
        name: recipe.name,
        id: recipe.id,
      },
    });
    if (recipeFound) {
      return new HttpException('recipe already created', HttpStatus.FOUND);
    }

    const newRecipe = this.recipeRepository.create(recipe);
    return await this.recipeRepository.save(newRecipe);
    // return await recipe.save(recipe._id);
  }

  async deleteRecipe(id: number) {
    const deletedRecipe = await this.recipeRepository.delete({ id });
    if (deletedRecipe.affected === 0) {
      return new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return deletedRecipe;
  }
  async updateRecipe(id: number, recipe: UpdateRecipeDto) {
    const recipeFound = await this.recipeRepository.findOne({
      where: {
        id,
      },
    });
    if (!recipeFound) {
      return new HttpException('cant update recipe', HttpStatus.CONFLICT);
    }
    const updatedRecipe = Object.assign(recipeFound, recipe);
    return this.recipeRepository.save(updatedRecipe);
  }

  // async createProfile(id: number, profile: CreateProfileDto) {
  //   const userFound = await this.recipeRepository.findOne({
  //     where: {
  //       id,
  //     },
  //   });
  //   if (!userFound) {
  //     return new HttpException('user nor found', HttpStatus.NOT_FOUND);
  //   }
  //   const newProfile = this.profileRepository.create(profile);
  //   const savedProfile = await this.profileRepository.save(newProfile);
  //   userFound.profile = savedProfile;
  //   return this.recipeRepository.save(userFound);
  // }
}

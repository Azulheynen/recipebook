import { Module } from '@nestjs/common';
import { RecipesController } from './recipes.controller';
import { RecipesService } from './recipes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Recipe } from './recipe.entity';
// import { Profile } from './profile.entity';
// import { Post } from '../post/post.entity';
@Module({
  imports: [
    TypeOrmModule.forFeature([Recipe]),
    // TypeOrmModule.forFeature([Profile]),
    // TypeOrmModule.forFeature([Post]),
  ],
  controllers: [RecipesController],
  providers: [RecipesService],
})
export class RecipeModule {}

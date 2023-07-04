import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
// import { Profile } from './profile.entity';
// import { Post } from '../post/post.entity';

@Entity({ name: 'recipes' })
export class Recipe {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true })
  name: string;
  @Column()
  ingredients: string;
  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
  @Column({ nullable: true })
  category: string;

  //   @OneToOne(() => Profile)
  //   @JoinColumn()
  //   profile: Profile;
  //   @OneToMany(() => Post, (post) => post.author)
  //   posts: Post[];
}

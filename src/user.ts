import {
  prop,
  getModelForClass,
  pre,
  modelOptions,
  Ref,
  Severity,
  DocumentType,
  getModelWithString,
} from "@typegoose/typegoose";
import BlogPost, { BlogPostSchema } from "./blogPost";
import mongoose from 'mongoose'
import Post from "./post"; 

@modelOptions({
  schemaOptions: {
    timestamps: true,
    collection: "users",
  },
  options: {
    allowMixed: Severity.ALLOW
  }
})
@pre<UserSchema>('remove', function(){
  
  BlogPost.remove({_id: {$in: this.blogPosts}})
})  
export class UserSchema {
  @prop({
    type: () => String, 
    required: [true, "Name is required"],
    validate: {
      validator: (name: string) => {
        return name.length > 2;
      },
      message: "Name must be longer than 2 character",
    },
  })
  name!: string;

  // @prop({ type: () => Number })
  // postCount: number;

  @prop({type:() => Post, _id: false})
  posts: Post[];

  @prop({type: () => Number})
  likes?: number;
  
  @prop({ref: () => BlogPostSchema})
  blogPosts: Ref<BlogPostSchema>[]

  get postCount() {
    return this.posts.length
  }
} 

const User = getModelForClass(UserSchema);

export default User;
 
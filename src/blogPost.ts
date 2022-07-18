import { prop, getModelForClass, modelOptions, Ref, Severity } from "@typegoose/typegoose";
import {CommentSchema } from './comment'

@modelOptions({
  schemaOptions: {
    timestamps: true
  },
  options: {allowMixed: Severity.ALLOW}
})
export class BlogPostSchema {

  @prop({type: () => String})
  title!: string;

  @prop({type: () => String})
  content!: string;

  @prop({ref: () => CommentSchema})
  comments: Ref<CommentSchema>[]
}

const BlogPost = getModelForClass(BlogPostSchema) 

export default BlogPost
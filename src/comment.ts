import { prop, modelOptions, getModelForClass, Severity, Ref } from "@typegoose/typegoose";
import { UserSchema } from "./user";

@modelOptions({
  schemaOptions: {
    timestamps: true
  }
})
export class CommentSchema {
  
  @prop({type: () => String})
  content!: string;
  
  @prop({ref: 'UserSchema'})
  author: Ref<UserSchema>;
 
}

const Comment = getModelForClass(CommentSchema)

export default Comment 
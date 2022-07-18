import {pre, modelOptions, getModelForClass, prop, DocumentType, Severity, getClassForDocument, getClass} from '@typegoose/typegoose'



@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
  options: { allowMixed: Severity.ALLOW } 
})
class Post {

  @prop({ type: () => String, required: true })
  title!: string;
  
}
                     

export default Post
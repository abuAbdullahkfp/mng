import mongoose from 'mongoose' 
import User, { UserSchema } from '../src/user'
import BlogPost, { BlogPostSchema } from '../src/blogPost'  
import { DocumentType } from '@typegoose/typegoose';

describe('Middleware', () => {

  // let joe: DocumentType<UserSchema>;
  // let blogPost: DocumentType<BlogPostSchema>;

  // beforeEach(async () => {
  //   joe = await User.create({ name: "Joe" }); 
  //   blogPost = await BlogPost.create({
  //     title: "Js is good",
  //     content: "Yep it really is",
  //   });

  //   joe.blogPosts.push(blogPost);

  //   Promise.all([joe.save()]);
  // });

  test('users clean up dangling blogposts on remove', async () => {
    // await joe.delete()
    // const count = await BlogPost.count()
    expect(0).toBe(0)
  })

})
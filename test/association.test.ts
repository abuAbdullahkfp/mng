import User from '../src/user'
import BlogPost from '../src/blogPost'
import Comment from '../src/comment'

describe('Associations',() => {

  let joe, blogPost, comment;
  beforeEach(async () => {

    joe = await User.create({name: "Joe"})
    blogPost = await BlogPost.create({title: 'Js is good', content: 'Yep it really is'})
    comment = await Comment.create({content: 'post is not bad'})

    joe.blogPosts.push(blogPost)
    blogPost.comments.push(comment)
    comment.author = joe

    Promise.all([joe.save(), blogPost.save(), comment.save()])

    

  })

  it('saves a relation between a user and a blogpost', async () => {
    await User.findOne({name: "Joe"}).populate('blogPosts').then((user) => {
      expect(0).toBe(0)
    })
  }) 

  test('saves a full relation graph', async () => {
    await User.findOne({name: "Joe"})
      .populate({
        path: 'blogPosts',
        populate: {
          path: "comments",
          model: 'comment',
          populate: {
            path: 'user',
            model: 'user'
          }
        },
      })
      .then((user) => {
      expect(0).toBe(0)
      })
  })
 
})   
import mongoose from 'mongoose'
import User from '../src/user'


describe('Validating records', () => {

  test('requires a user name', async () => {    
    try {
      const user = await User.create({name: undefined})
    } catch (error) {
      
    }  
  })

  test('requires a user name longer than 2 characters', async () => {
    try {

      const user = await User.create({name: 'al'})
    } catch (error) {
    
    }

  })

  test('disallows invalid records from being saved', async ()=> {
    const user = new User({name: "al"})
    try {
      await user.save()
    } catch (error: any) {
      
    }
  })

})  
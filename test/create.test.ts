import User from '../src/user'

describe('Creating records', () => { 

  test('Saves a user', async () => {
    
    const user = await User.create({
      name: 'create User'
    })

    expect(!user.isNew).toBeTruthy()
    expect(user.name).toBe('create User')

  })

 })
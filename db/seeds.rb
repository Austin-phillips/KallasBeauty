    @time = [ 30, 60, 90, 120 ]
    @user_id = 0;
    @date = [
      '1-20-18',
      '1-21-18',
      '1-22-18',
      '1-23-18',
      '1-24-18',
      '1-25-18',
      '1-26-18',
      '1-27-18'
    ]
    @time = [
      '2:00',
      '2:30',
      '3:00',
      '3:30',
      '4:00',
      '4:30'
  ]

    25.times do 
      Service.create(
        name: Faker::Food.dish,
        price: Faker::Commerce.price,
        description: Faker::Lorem.paragraph,
        time: @time.sample
      )
    end 

    User.create(
      email: 'test@admin.com',
      password: 'password',
      admin: true
    )

    User.create(
      email: 'test@user.com',
      password: 'password',
    )

    puts 'Services created'
    puts 'Admin created'

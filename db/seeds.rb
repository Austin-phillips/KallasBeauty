    # t.string "name"
    # t.float "price"
    # t.text "description"
    # t.integer "time"

    @time = [ 30, 60, 90, 120 ]

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

    puts 'Services created'
    puts 'Admin created'

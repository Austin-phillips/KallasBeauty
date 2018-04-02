    @time = [ 30, 60, 90, 120 ]
    @time_slots = 11
    @taken = [ true, false ]
    @day_id = 0


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
      email: 'phillips.austin51@gmail.com',
      password: 'password',
    )

    1.times do
      @day_id += 1
      Day.create(
        day: 'Monday',
        date: '03-29-2018'
      )
      12.times do 
        @time_slots = @time_slots + 1 
        TimeSlot.create(
          day_id: @day_id,
          time: @time_slots,
          taken: @taken.sample
        )
      end 
    end 

    puts 'Services created'
    puts 'Admin created'
    puts 'Schedule Created'


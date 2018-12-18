    @time = [ '10 Min', '15 Min', '30 Min', '1 Hour', '1.5 Hours', '2 Hours', '2.5 Hours' ]
    @time_slots = [
      '10:00 AM',
      '10:30 AM',
      '11:00 AM',
      '11:30 AM',
      '12:00 PM',
      '12:30 PM',
      '1:00 PM',
      '1:30 PM',
      '2:00 PM',
      '2:30 PM',
      '3:00 PM',
      '3:30 PM',
      '4:00 PM',
      '4:30 PM',
      '5:00 PM'
    ]
    @taken = [ true, false ]
    @day_id = 0
    @date1 = "2018-08-01"
    @date2 = "2018-10-30"

    Appointment.create(
      date: "2018-12-12",
      time: '9:00 AM',
      service: 'Volume Lashes',
      first: 'Austin',
      last: 'Phillips',
      email: 'Philly@gmail.com',
      notes: '',
      length: '120',
    )

    10.times do 
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
      email: 'jaiden@gmail.com',
      password: 'password',
    )

  date1 = Date.parse(@date1)
  date2 = Date.parse(@date2)
  @schedule = (date1..date2).to_a
  @schedule.each do |d|
    1.times do
      @day_id += 1
      Day.create(
        date: d ,
        day: d.strftime("%A")
      )
      @time_slots.each do |t|
        TimeSlot.create(
          day_id: @day_id,
          time: t,
          taken: false
        )
      end 
    end 
  end 

    # 1.times do
    #   @day_id += 1
    #   Day.create(
    #     day: 'Monday',
    #     date: '03-29-2018'
    #   )
    #   12.times do 
    #     @time_slots = @time_slots + 1 
    #     TimeSlot.create(
    #       day_id: @day_id,
    #       time: @time_slots,
    #       taken: @taken.sample
    #     )
    #   end 
    # end 

    puts 'Services created'
    puts 'Admin created'
    puts 'Schedule Created'


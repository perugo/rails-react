# rubocop:disable Rails/Output
exit unless Rails.env.development?

puts 'Trancating tables...'

# 全てのテーブルのデータを削除
ActiveRecord::Base.connection.tables.each do |table|
  unless table == 'schema_migrations'
    ActiveRecord::Base.connection.execute("TRUNCATE TABLE #{table} RESTART IDENTITY CASCADE")
  end
end

Rails.root.glob('db/seeds/**/*.rb').each do |file|
  puts "Executing #{file}..."
  load file
end

puts 'Yay! Seed executed! Enjoy your development! :)'

# rubocop:enable Rails/Output

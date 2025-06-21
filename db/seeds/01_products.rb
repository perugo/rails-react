(1..5).each do |i|
  Product.create!(
    name: "Product #{i}",
    description: "This is product number #{i}.",
    price: i * 1000
  )
end

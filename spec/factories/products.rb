FactoryBot.define do
  factory :product do
    sequence(:name) { |n| "商品 #{n}" }

    price { 1000 }
    description { '商品の詳細' }
  end
end

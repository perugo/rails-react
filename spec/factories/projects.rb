FactoryBot.define do
  factory :project do
    sequence(:name) { |n| "Project #{n}" }
    description { 'This is a sample project description.' }
  end
end

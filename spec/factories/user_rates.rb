FactoryGirl.define do
  factory :user_rate do
    user nil
    event nil
    rate_points 1
    binary_value 1
    agregate_value ""
    completed false
    success false
  end
end

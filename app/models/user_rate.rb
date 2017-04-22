class UserRate < ApplicationRecord
  belongs_to :user
  belongs_to :event

  enum rate_type: [:binary, :agregate]  # тип ставки
  enum rate_direction: [:up, :down]  # направление ставки
end

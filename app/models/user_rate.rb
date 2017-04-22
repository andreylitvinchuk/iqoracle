class UserRate < ApplicationRecord
  belongs_to :user
  belongs_to :event
end

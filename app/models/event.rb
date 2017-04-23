class Event < ApplicationRecord
  belongs_to :metrix
  has_many :user_rates

  scope :default, -> { order(happen_at: :asc) }
  scope :upcoming, -> { where("happen_at > ?", DateTime.now).order(happen_at: :asc) }

  def metrix_value
    if self.happen_at > DateTime.now
      100
    else
      nil
    end
  end
end

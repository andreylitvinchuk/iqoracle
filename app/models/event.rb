class Event < ApplicationRecord
  belongs_to :metrix
  # enum sale_type: [:sale, :reserv, :rent]  # тип продажи (продажа/резерв/аренда)

    scope :upcoming, -> { where("happen_at > ?", DateTime.now).order(happen_at: :asc)  }

end

class Event < ApplicationRecord
  belongs_to :metrix
  # enum sale_type: [:sale, :reserv, :rent]  # тип продажи (продажа/резерв/аренда)


end

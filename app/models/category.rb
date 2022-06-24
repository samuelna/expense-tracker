class Category < ApplicationRecord
  has_many :expenses, through: :tags
end

class Expense < ApplicationRecord
  has_many :categories, through: :tags
end

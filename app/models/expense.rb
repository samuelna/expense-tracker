class Expense < ApplicationRecord
  has_many :categories, through: :tags

  validates :amount, presence: true, numericality: { greater_than_or_equal_to: 0.00 }
end

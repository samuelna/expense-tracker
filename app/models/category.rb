class Category < ApplicationRecord
  has_many :tags
  has_many :expenses, through: :tags

  validates :name, presence: true, uniqueness: { case_sensitive: false }
end

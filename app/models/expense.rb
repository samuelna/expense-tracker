class Expense < ApplicationRecord
  attr_accessor :category_names

  has_many :tags
  has_many :categories, through: :tags

  before_validation :format_category_names

  validates :amount, presence: true, numericality: { greater_than_or_equal_to: 0.00 }
  validates :category_names, presence: true

  before_save :find_or_create_categories

  private

  def find_or_create_categories
    self.categories = category_names.map do |name|
      Category.find_or_create_by(name: name)
    end
  end

  def format_category_names
    self.category_names = if category_names.is_a?(Array)
      category_names.select { |name| name.is_a?(String) }.map(&:strip).map(&:downcase)
    else
      ["other"]
    end
  end
end

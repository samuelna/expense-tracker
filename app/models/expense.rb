class Expense < ApplicationRecord
  scope :with_categories, -> { includes(:categories) }

  attr_accessor :category_names

  has_many :tags
  has_many :categories, through: :tags

  before_validation :format_category_names

  validates :amount, presence: true, numericality: { greater_than_or_equal_to: 0.00 }
  validates :category_names, presence: true

  before_save :find_or_create_categories

  def as_json(options = {})
    super(options.merge(include: :categories)).tap do |expense|
      expense["categories"] = expense.fetch("categories").map { |c| c.fetch("name") }
    end
  end

  private

  def find_or_create_categories
    self.categories = category_names.map do |name|
      Category.find_or_create_by(name: name)
    end
  end

  def format_category_names
    self.category_names = if category_names.is_a?(String)
      category_names.split(",").map(&:strip).map(&:downcase)
    else
      ["other"]
    end
  end
end

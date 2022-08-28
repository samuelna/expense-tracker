# frozen_string_literal: true

require "rails_helper"

RSpec.describe Expense do
  subject { build(:expense) }

  describe "validations" do
    it { is_expected.to validate_presence_of(:amount) }
    it { is_expected.to validate_numericality_of(:amount).is_greater_than_or_equal_to(0.0) }
  end

  describe "create" do
    context "when category already exists" do
      before { create(:category, name: "personal") }

      it "does not create a new category" do
        expect { build(:expense, category_names: "personal").save }.not_to change(Category, :count)
      end
    end

    context "when category does not exist" do
      it "creates a new category" do
        expect { build(:expense, category_names: "personal").save }.to change(Category, :count)
      end
    end
  end
end

# frozen_string_literal: true

require "rails_helper"

RSpec.describe Expense do
  subject { build(:expense) }

  describe "validations" do
    it { is_expected.to validate_presence_of(:amount) }
    it { is_expected.to validate_numericality_of(:amount).is_greater_than_or_equal_to(0.0) }
  end
end

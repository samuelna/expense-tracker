# frozen_string_literal: true

require "rails_helper"

RSpec.describe ExpensesController do
  describe "#index" do
    let!(:expenses) { create_list(:expense, 2) }
    before { get :index, format: :json }

    it "returns all expenses" do
      expect(json_body).to eq(expenses.to_a.map(&:as_json))
    end

    it "includes categories" do
      expect(json_body).to eq([
        expenses.first.as_json.tap { |p| p["categories"] = ["other"] },
        expenses.second.as_json.tap { |p| p["categories"] = ["other"] },
      ])
    end
  end

  describe "#create" do
    let(:params) do
      {
        amount: 9.99,
        category_names: "personal, food",
        note: "",
      }
    end

    it "is successful" do
      post :create, params: params, format: :json
      expect(json_body).to include({
        amount: 9.99,
        categories: ["personal", "food"],
      })
    end
  end
end

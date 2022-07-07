# frozen_string_literal: true

class ExpensesController < ApplicationController
  def index
    @expenses = Expense.with_categories.order(:created_at)

    respond_to do |format|
      format.html
      format.json { render json: @expenses }
    end
  end

  def create
    @expense = Expense.create(expense_params)

    respond_to do |format|
      format.html
      format.json { render json: @expense }
    end
  end

  private

  def expense_params
    params.permit(
      :amount,
      :category_names,
      :created_at,
      :note,
      :persistent,
    )
  end
end

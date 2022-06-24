class CreateExpenseAndCategoryTables < ActiveRecord::Migration[7.0]
  def change
    create_table :expenses do |t|
      t.float :amount, null: false
      t.string :note
      t.boolean :persistent, default: false
      t.timestamps
    end

    create_table :categories do |t|
      t.string :name, null: false
      t.timestamps
    end

    create_table :tags do |t|
      t.references :expense
      t.references :category
      t.timestamps
    end
  end
end

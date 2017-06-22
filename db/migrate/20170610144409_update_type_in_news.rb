class UpdateTypeInNews < ActiveRecord::Migration[5.0]
  def change
    remove_column :news, :type, :integer
    add_column :news, :category, :integer, limit: 2, default: 0, index: true
  end
end

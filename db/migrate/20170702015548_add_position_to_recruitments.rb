class AddPositionToRecruitments < ActiveRecord::Migration[5.0]
  def change
    add_column :recruitments, :position, :integer, unique: true
  end
end

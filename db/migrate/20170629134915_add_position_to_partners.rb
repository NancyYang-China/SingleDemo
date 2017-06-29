class AddPositionToPartners < ActiveRecord::Migration[5.0]
  def change
    add_column :partners, :position, :integer, unique: true
  end
end

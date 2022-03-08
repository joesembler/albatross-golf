class CreateStrokes < ActiveRecord::Migration[6.1]
  def change
    create_table :strokes do |t|
      t.integer :strokes
      t.integer :hole_id
      t.integer :user_id
      t.date :date

      t.timestamps
    end
  end
end

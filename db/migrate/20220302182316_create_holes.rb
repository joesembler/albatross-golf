class CreateHoles < ActiveRecord::Migration[6.1]
  def change
    create_table :holes do |t|
      t.integer :course_id
      t.integer :hole_number
      t.integer :par
      t.integer :yardage
      t.integer :strokes

      t.timestamps
    end
  end
end

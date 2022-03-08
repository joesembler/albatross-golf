class Hole < ApplicationRecord
    has_many :strokes
    has_many :users, through :strokes
    belongs_to :course
end

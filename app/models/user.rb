class User < ApplicationRecord
    has_many :strokes
    has_many :holes, through: :strokes
    has_many :courses, through: :holes
    

    validates :username, presence: true, uniqueness: true
end

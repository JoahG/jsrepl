class CreateCodebits < ActiveRecord::Migration
  def change
    create_table :codebits do |t|
      t.string :slug
      t.text :code

      t.timestamps
    end
  end
end

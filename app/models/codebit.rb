class Codebit < ActiveRecord::Base
	attr_accessible :code, :slug

	before_create :gen_slug

	private
	def gen_slug
		begin
			self.slug = ('a'..'z').to_a.shuffle[0,3].join
		end while Codebit.find_by_slug(self.slug)
	end
end

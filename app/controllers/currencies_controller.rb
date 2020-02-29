class CurrenciesController < ApplicationController
	def index
	end

	def search
		@currencies = Currency.where('LOWER(name) LIKE ?', "%#{params[:search].downcase}%")
		render json: { currencies: @currencies }
	end

	def calculate
	end 
end

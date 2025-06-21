require 'rails_helper'

RSpec.describe Product do
  it 'ファクトリーデータが有効' do
    expect(build(:product)).to be_valid
  end

  describe 'バリデーション' do
    it '商品の価格は >=0' do
      expect(build(:product, price: -10)).to be_invalid
    end
  end
end

adjectives = ['おしゃれな', '高品質な', '人気の', '洗練された', '快適な']
materials  = ['コットン', 'ウール', 'レザー', 'リネン', 'ポリエステル']
products   = ['シャツ', 'ジャケット', 'パンツ', 'ワンピース', 'スカート', 'スウェット']

source_text = File.read(Rails.root.join('db/text_source.txt').to_s)
sentences = source_text.split(/。|！|？/) # 文を分割

# 20文字~100文字の範囲でランダムに選ぶ関数
def generate_description(sentences)
  loop do
    description = sentences.sample.strip
    return description if description.length.between?(20, 100)
  end
end

100.times do
  name = "#{adjectives.sample}#{materials.sample}#{products.sample}"
  description = generate_description(sentences)
  price = rand(1000..20_000)

  Product.create!(
    name: name,
    description: description,
    price: price
  )
end

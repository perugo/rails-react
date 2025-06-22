module ActiveRecord
  class Base
    class << self
      # モデル/カラムのI18n表示名
      # @param  [Symbol] カラム名 : nilならモデル表示名を返す
      # @return [String] モデル/カラムのI18n表示名
      def t(column = nil)
        if column.nil?
          self.model_name.human
        else
          self.human_attribute_name(column)
        end
      end
    end
  end
end

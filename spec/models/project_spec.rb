require 'rails_helper'

RSpec.describe Project do
  describe 'ファクトリーデータ' do
    it '名前を指定できる' do
      project = create(:project, name: 'test project')

      expect(project.name).to eq 'test project'
    end
  end
end

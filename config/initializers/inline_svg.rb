InlineSvg.configure do |config|
  config.asset_file = InlineSvg::CachedAssetFile.new(
      paths: [
          "#{Rails.root}/public/images",
      ],
      filters: /\.svg/
  )
end
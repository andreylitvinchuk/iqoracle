uri = URI('http://tsw.ru.forexprostools.com/api.php')
uri.query = URI.encode_www_form(params)

res = Net::HTTP.get_response(uri)

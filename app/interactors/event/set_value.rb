class Event::SetValue
  include Interactor::Organizer

  class Action
    include Interactor

    #required context:
    # event_id || event
    #

    def call
      event = context.event || Event.find(context.event_id)

      uri = URI('http://tsw.ru.forexprostools.com/api.php')
      uri.query = URI.encode_www_form(
          {
              action: 'refresher',
              pairs: event.pair_id,
              timeframe: 10})
      res = Net::HTTP.get_response(uri)

    end

  end

  organize Action
end